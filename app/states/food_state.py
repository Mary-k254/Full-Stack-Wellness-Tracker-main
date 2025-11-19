import reflex as rx
from typing import TypedDict, ClassVar
import datetime
import spacy
from spacy.matcher import PhraseMatcher
import logging


class FoodLogEntry(TypedDict):
    date: str
    food_name: str
    category: str
    timestamp: str


try:
    nlp = spacy.load("en_core_web_sm")
except OSError as e:
    logging.exception(f"Error loading spaCy model: {e}")
    print("spaCy model 'en_core_web_sm' not found. Food extraction will be limited.")
    nlp = None


class FoodState(rx.State):
    food_log_entries: list[FoodLogEntry] = []
    manual_food_selection: str = ""
    free_text_input: str = ""
    extracted_foods_preview: list[str] = []
    FOOD_DATABASE: ClassVar[dict[str, str]] = {
        "ugali": "african",
        "sukuma wiki": "african",
        "nyama choma": "african",
        "githeri": "african",
        "mukimo": "african",
        "pilau": "african",
        "chapati": "african",
        "mandazi": "african",
        "samosa": "african",
        "bhajia": "african",
        "matoke": "african",
        "kachumbari": "african",
        "rice": "grains",
        "pasta": "grains",
        "bread": "grains",
        "oatmeal": "grains",
        "quinoa": "grains",
        "couscous": "grains",
        "noodles": "grains",
        "potato": "grains",
        "sweet potato": "grains",
        "yam": "grains",
        "plantain": "grains",
        "chicken": "proteins",
        "beef": "proteins",
        "fish": "proteins",
        "pork": "proteins",
        "lamb": "proteins",
        "turkey": "proteins",
        "eggs": "proteins",
        "tofu": "proteins",
        "beans": "proteins",
        "lentils": "proteins",
        "chickpeas": "proteins",
        "peanuts": "proteins",
        "almonds": "proteins",
        "cashews": "proteins",
        "milk": "dairy",
        "yogurt": "dairy",
        "cheese": "dairy",
        "butter": "dairy",
        "cream": "dairy",
        "ice cream": "dairy",
        "spinach": "vegetables",
        "kale": "vegetables",
        "cabbage": "vegetables",
        "carrots": "vegetables",
        "tomato": "vegetables",
        "onion": "vegetables",
        "broccoli": "vegetables",
        "cauliflower": "vegetables",
        "lettuce": "vegetables",
        "cucumber": "vegetables",
        "pepper": "vegetables",
        "eggplant": "vegetables",
        "banana": "fruits",
        "apple": "fruits",
        "orange": "fruits",
        "mango": "fruits",
        "pineapple": "fruits",
        "watermelon": "fruits",
        "grapes": "fruits",
        "strawberry": "fruits",
        "avocado": "fruits",
        "papaya": "fruits",
        "passion fruit": "fruits",
        "coffee": "beverages",
        "tea": "beverages",
        "juice": "beverages",
        "soda": "beverages",
        "water": "beverages",
        "smoothie": "beverages",
        "beer": "beverages",
        "wine": "beverages",
        "chips": "snacks",
        "cookies": "snacks",
        "cake": "snacks",
        "chocolate": "snacks",
        "candy": "snacks",
        "popcorn": "snacks",
        "nuts": "snacks",
    }
    food_categories: ClassVar[list[str]] = [
        "african",
        "grains",
        "proteins",
        "dairy",
        "vegetables",
        "fruits",
        "beverages",
        "snacks",
    ]
    _matcher: ClassVar[PhraseMatcher | None] = None

    @classmethod
    def _initialize_matcher(cls):
        if nlp and cls._matcher is None:
            cls._matcher = PhraseMatcher(nlp.vocab, attr="LOWER")
            patterns = [nlp.make_doc(food) for food in cls.FOOD_DATABASE.keys()]
            cls._matcher.add("FOOD", patterns)

    def _extract_foods_from_text(self, text: str) -> list[str]:
        self._initialize_matcher()
        if not nlp or not self._matcher:
            return []
        doc = nlp(text.lower())
        matches = self._matcher(doc)
        foods = []
        for match_id, start, end in matches:
            food = doc[start:end].text
            if food not in foods:
                foods.append(food)
        return foods

    @rx.event
    def preview_extracted_foods(self):
        """Extracts foods from free_text_input and updates the preview list."""
        if not self.free_text_input.strip():
            self.extracted_foods_preview = []
            return
        self.extracted_foods_preview = self._extract_foods_from_text(
            self.free_text_input
        )

    @rx.event
    def add_food_manual(self):
        """Adds a single food item selected from the dropdown."""
        if not self.manual_food_selection:
            return rx.toast.warning("Please select a food item.")
        food_name = self.manual_food_selection
        category = self.FOOD_DATABASE.get(food_name, "unknown")
        entry = FoodLogEntry(
            date=datetime.date.today().strftime("%Y-%m-%d"),
            food_name=food_name,
            category=category,
            timestamp=datetime.datetime.now().strftime("%I:%M %p"),
        )
        self.food_log_entries.insert(0, entry)
        self.manual_food_selection = ""
        return rx.toast.success(f"Added '{food_name.capitalize()}' to your log.")

    @rx.event
    def add_extracted_foods(self):
        """Adds all foods from the preview list to the log."""
        if not self.extracted_foods_preview:
            return rx.toast.warning(
                "No foods to add. Please enter text and preview first."
            )
        for food_name in self.extracted_foods_preview:
            category = self.FOOD_DATABASE.get(food_name, "unknown")
            entry = FoodLogEntry(
                date=datetime.date.today().strftime("%Y-%m-%d"),
                food_name=food_name,
                category=category,
                timestamp=datetime.datetime.now().strftime("%I:%M %p"),
            )
            self.food_log_entries.insert(0, entry)
        count = len(self.extracted_foods_preview)
        yield rx.toast.success(f"Added {count} food item(s) to your log.")
        self.free_text_input = ""
        self.extracted_foods_preview = []

    @rx.var
    def food_db_options(self) -> list[str]:
        return sorted(list(self.FOOD_DATABASE.keys()))

    @rx.var
    def food_frequency(self) -> list[dict[str, str | int]]:
        """Calculates the frequency of each food item logged."""
        from collections import Counter

        if not self.food_log_entries:
            return []
        food_counts = Counter((entry["food_name"] for entry in self.food_log_entries))
        return [
            {"food": food, "count": count} for food, count in food_counts.most_common(5)
        ]