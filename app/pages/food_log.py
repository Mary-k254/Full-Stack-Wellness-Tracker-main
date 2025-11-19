import reflex as rx
from app.states.auth_state import AuthState
from app.states.food_state import FoodState
from app.components.navbar import navbar


def category_badge(category: rx.Var[str]) -> rx.Component:
    return rx.el.span(
        category.capitalize(),
        class_name=rx.match(
            category,
            (
                "african",
                "px-2 py-1 text-xs font-medium text-purple-700 bg-purple-100 rounded-full",
            ),
            (
                "grains",
                "px-2 py-1 text-xs font-medium text-yellow-700 bg-yellow-100 rounded-full",
            ),
            (
                "proteins",
                "px-2 py-1 text-xs font-medium text-red-700 bg-red-100 rounded-full",
            ),
            (
                "dairy",
                "px-2 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-full",
            ),
            (
                "vegetables",
                "px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full",
            ),
            (
                "fruits",
                "px-2 py-1 text-xs font-medium text-orange-700 bg-orange-100 rounded-full",
            ),
            (
                "beverages",
                "px-2 py-1 text-xs font-medium text-cyan-700 bg-cyan-100 rounded-full",
            ),
            (
                "snacks",
                "px-2 py-1 text-xs font-medium text-pink-700 bg-pink-100 rounded-full",
            ),
            "px-2 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full",
        ),
    )


def quick_add_form() -> rx.Component:
    return rx.el.div(
        rx.el.h3("Quick Add", class_name="text-lg font-semibold text-gray-800"),
        rx.el.p(
            "Select a food item from the database.",
            class_name="text-sm text-gray-500 mb-4",
        ),
        rx.el.select(
            rx.el.option("Select a food...", value="", disabled=True),
            rx.foreach(
                FoodState.food_db_options,
                lambda food: rx.el.option(food.capitalize(), value=food),
            ),
            on_change=FoodState.set_manual_food_selection,
            class_name="w-full p-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all",
            value=FoodState.manual_food_selection,
        ),
        rx.el.button(
            "Add Food",
            on_click=FoodState.add_food_manual,
            class_name="w-full mt-4 py-3 text-white font-semibold rounded-lg bg-purple-600 hover:bg-purple-700 transition-all",
        ),
        class_name="p-6 bg-white rounded-xl border border-gray-200 shadow-sm",
    )


def free_text_form() -> rx.Component:
    return rx.el.div(
        rx.el.h3("Free Text Entry", class_name="text-lg font-semibold text-gray-800"),
        rx.el.p(
            "Describe your meal, and we'll find the food items.",
            class_name="text-sm text-gray-500 mb-4",
        ),
        rx.el.textarea(
            placeholder="e.g., I had ugali with sukuma wiki and beef for lunch.",
            on_change=FoodState.set_free_text_input,
            class_name="w-full h-24 p-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none",
            default_value=FoodState.free_text_input,
        ),
        rx.el.button(
            "Preview Foods",
            on_click=FoodState.preview_extracted_foods,
            class_name="w-full mt-4 py-2 text-purple-700 font-semibold rounded-lg bg-purple-100 hover:bg-purple-200 transition-all",
        ),
        rx.cond(
            FoodState.extracted_foods_preview.length() > 0,
            rx.el.div(
                rx.el.p(
                    "Detected foods:",
                    class_name="text-sm font-medium text-gray-700 mt-4 mb-2",
                ),
                rx.el.div(
                    rx.foreach(
                        FoodState.extracted_foods_preview,
                        lambda food: rx.el.span(
                            food.capitalize(),
                            class_name="px-3 py-1 text-sm font-medium text-white bg-purple-500 rounded-full",
                        ),
                    ),
                    class_name="flex flex-wrap gap-2",
                ),
                rx.el.button(
                    "Add Detected Foods",
                    on_click=FoodState.add_extracted_foods,
                    class_name="w-full mt-4 py-3 text-white font-semibold rounded-lg bg-purple-600 hover:bg-purple-700 transition-all",
                ),
                class_name="mt-4",
            ),
            rx.fragment(),
        ),
        class_name="p-6 bg-white rounded-xl border border-gray-200 shadow-sm",
    )


def food_log_history() -> rx.Component:
    return rx.el.div(
        rx.el.h2(
            "Food Log History", class_name="text-2xl font-bold text-gray-900 mt-12 mb-4"
        ),
        rx.cond(
            FoodState.food_log_entries.length() > 0,
            rx.el.div(
                rx.foreach(
                    FoodState.food_log_entries,
                    lambda entry: rx.el.div(
                        rx.el.div(
                            rx.el.p(
                                entry["food_name"].capitalize(),
                                class_name="font-semibold text-gray-800",
                            ),
                            category_badge(entry["category"]),
                        ),
                        rx.el.div(
                            rx.el.p(entry["date"], class_name="text-sm text-gray-500"),
                            rx.el.p(
                                entry["timestamp"], class_name="text-sm text-gray-500"
                            ),
                            class_name="flex gap-2 items-center",
                        ),
                        class_name="flex justify-between items-center p-4 border-b border-gray-200",
                    ),
                ),
                class_name="bg-white rounded-xl border border-gray-200 shadow-sm",
            ),
            rx.el.p(
                "No food logged yet. Add your first meal above!",
                class_name="text-gray-500",
            ),
        ),
    )


def food_log_page() -> rx.Component:
    return rx.cond(
        AuthState.is_authenticated,
        rx.el.div(
            navbar(),
            rx.el.main(
                rx.el.div(
                    rx.el.h1(
                        "Food Log", class_name="text-3xl font-bold text-gray-900 mb-8"
                    ),
                    rx.el.div(
                        quick_add_form(),
                        free_text_form(),
                        class_name="grid md:grid-cols-2 gap-8",
                    ),
                    food_log_history(),
                    class_name="container mx-auto py-8 px-6 max-w-4xl",
                ),
                class_name="flex-grow",
            ),
            class_name="min-h-screen bg-gray-50 flex flex-col font-['Inter']",
        ),
        rx.el.div(on_mount=rx.redirect("/")),
    )