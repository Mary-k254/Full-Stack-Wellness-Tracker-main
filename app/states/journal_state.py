import reflex as rx
from typing import TypedDict
from textblob import TextBlob
import datetime


class JournalEntry(TypedDict):
    date: str
    text: str
    sentiment_label: str
    sentiment_polarity: float
    timestamp: str


class JournalState(rx.State):
    journal_entries: list[JournalEntry] = []
    current_journal_text: str = ""

    @rx.var
    def sentiment_analysis(self) -> dict[str, str | float]:
        if not self.current_journal_text.strip():
            return {"label": "NEUTRAL", "polarity": 0.0, "emoji": "😐"}
        blob = TextBlob(self.current_journal_text)
        polarity = blob.sentiment.polarity
        if polarity > 0.1:
            label = "POSITIVE"
            emoji = "😊"
        elif polarity < -0.1:
            label = "NEGATIVE"
            emoji = "😔"
        else:
            label = "NEUTRAL"
            emoji = "😐"
        return {"label": label, "polarity": polarity, "emoji": emoji}

    @rx.event
    def save_journal_entry(self):
        if not self.current_journal_text.strip():
            return rx.toast.error("Journal entry cannot be empty.")
        sentiment = self.sentiment_analysis
        entry = JournalEntry(
            date=datetime.date.today().strftime("%Y-%m-%d"),
            text=self.current_journal_text,
            sentiment_label=sentiment["label"],
            sentiment_polarity=sentiment["polarity"],
            timestamp=datetime.datetime.now().strftime("%I:%M %p"),
        )
        self.journal_entries.insert(0, entry)
        self.current_journal_text = ""
        return rx.toast.success("Journal entry saved!")

    @rx.var
    def last_sentiment(self) -> str:
        if not self.journal_entries:
            return "NEUTRAL"
        return self.journal_entries[0]["sentiment_label"]