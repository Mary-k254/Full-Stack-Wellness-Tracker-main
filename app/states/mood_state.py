import reflex as rx
from typing import TypedDict
import datetime


class MoodEntry(TypedDict):
    date: str
    mood_score: int
    tags: list[str]
    timestamp: str


class MoodState(rx.State):
    mood_entries: list[MoodEntry] = []
    current_mood_score: int = 5
    selected_tags: list[str] = []
    available_tags: list[str] = [
        "happy",
        "sad",
        "anxious",
        "energetic",
        "tired",
        "focused",
        "stressed",
        "calm",
    ]

    @rx.event
    def toggle_tag(self, tag: str):
        if tag in self.selected_tags:
            self.selected_tags.remove(tag)
        else:
            self.selected_tags.append(tag)

    @rx.event
    def log_mood(self):
        if self.current_mood_score is not None:
            entry = MoodEntry(
                date=datetime.date.today().strftime("%Y-%m-%d"),
                mood_score=self.current_mood_score,
                tags=self.selected_tags.copy(),
                timestamp=datetime.datetime.now().strftime("%I:%M %p"),
            )
            self.mood_entries.insert(0, entry)
            self.current_mood_score = 5
            self.selected_tags = []
            return rx.toast.success("Mood logged successfully!")
        return rx.toast.error("Please select a mood score.")

    @rx.var
    def mood_history_last_7_days(self) -> list[MoodEntry]:
        today = datetime.date.today()
        last_week = today - datetime.timedelta(days=7)
        recent_entries = [
            e
            for e in self.mood_entries
            if datetime.datetime.strptime(e["date"], "%Y-%m-%d").date() > last_week
        ]
        entries_by_date = {entry["date"]: entry for entry in recent_entries}
        date_range = [
            (today - datetime.timedelta(days=i)).strftime("%Y-%m-%d") for i in range(7)
        ]
        chart_data = []
        for date_str in reversed(date_range):
            if date_str in entries_by_date:
                chart_data.append(entries_by_date[date_str])
            else:
                chart_data.append(
                    {"date": date_str, "mood_score": 0, "tags": [], "timestamp": ""}
                )
        return chart_data

    @rx.var
    def average_mood_last_7_days(self) -> float:
        scores = [
            e["mood_score"]
            for e in self.mood_history_last_7_days
            if e["mood_score"] > 0
        ]
        if not scores:
            return 0.0
        return sum(scores) / len(scores)

    @rx.var
    def last_mood_score(self) -> int:
        if not self.mood_entries:
            return 0
        return self.mood_entries[0]["mood_score"]