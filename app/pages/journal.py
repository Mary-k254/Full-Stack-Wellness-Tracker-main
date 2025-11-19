import reflex as rx
from app.states.auth_state import AuthState
from app.states.journal_state import JournalState
from app.components.navbar import navbar


def journal_editor() -> rx.Component:
    return rx.el.div(
        rx.el.h2("Daily Journal", class_name="text-2xl font-bold text-gray-900 mb-4"),
        rx.el.div(
            rx.el.textarea(
                placeholder="How was your day?",
                on_change=JournalState.set_current_journal_text,
                max_length=500,
                class_name="w-full h-48 p-4 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none",
                default_value=JournalState.current_journal_text,
            ),
            rx.el.div(
                rx.el.div(
                    rx.el.span(JournalState.sentiment_analysis["emoji"]),
                    rx.el.span(
                        JournalState.sentiment_analysis["label"].to(str).capitalize(),
                        class_name="font-medium",
                    ),
                    rx.el.span(
                        f"({JournalState.sentiment_analysis['polarity'].to(float).to_string()})"
                    ),
                    class_name="flex items-center gap-2 text-sm text-gray-600",
                ),
                rx.el.p(
                    f"{JournalState.current_journal_text.length()}/500",
                    class_name="text-sm text-gray-500",
                ),
                class_name="flex justify-between items-center mt-2",
            ),
            class_name="relative",
        ),
        rx.el.button(
            "Save Entry",
            on_click=JournalState.save_journal_entry,
            class_name="w-full mt-4 py-3 px-4 text-white font-semibold rounded-lg bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all",
        ),
        class_name="bg-white p-8 rounded-xl border border-gray-200 shadow-sm",
    )


def journal_history() -> rx.Component:
    return rx.el.div(
        rx.el.h2(
            "Past Entries", class_name="text-2xl font-bold text-gray-900 mb-4 mt-12"
        ),
        rx.cond(
            JournalState.journal_entries.length() > 0,
            rx.el.div(
                rx.foreach(
                    JournalState.journal_entries,
                    lambda entry: rx.el.details(
                        rx.el.summary(
                            rx.el.div(
                                rx.el.p(
                                    entry["date"],
                                    class_name="font-semibold text-gray-800",
                                ),
                                rx.el.p(
                                    entry["timestamp"],
                                    class_name="text-sm text-gray-500",
                                ),
                                rx.el.span(
                                    entry["sentiment_label"],
                                    class_name=rx.match(
                                        entry["sentiment_label"],
                                        (
                                            "POSITIVE",
                                            "ml-auto px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full",
                                        ),
                                        (
                                            "NEGATIVE",
                                            "ml-auto px-2 py-1 text-xs font-medium text-red-700 bg-red-100 rounded-full",
                                        ),
                                        (
                                            "NEUTRAL",
                                            "ml-auto px-2 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full",
                                        ),
                                        "px-2 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full",
                                    ),
                                ),
                            ),
                            class_name="flex items-center w-full cursor-pointer",
                        ),
                        rx.el.p(
                            entry["text"],
                            class_name="mt-4 text-gray-700 leading-relaxed whitespace-pre-wrap",
                        ),
                        class_name="p-4 border-b border-gray-200",
                    ),
                ),
                class_name="bg-white rounded-xl border border-gray-200 shadow-sm",
            ),
            rx.el.p(
                "No journal entries yet. Write your first one above!",
                class_name="text-gray-500",
            ),
        ),
    )


def journal_page() -> rx.Component:
    return rx.cond(
        AuthState.is_authenticated,
        rx.el.div(
            navbar(),
            rx.el.main(
                rx.el.div(
                    journal_editor(),
                    journal_history(),
                    class_name="container mx-auto py-8 px-6 max-w-3xl",
                )
            ),
            class_name="min-h-screen bg-gray-50 flex flex-col font-['Inter']",
        ),
        rx.el.div(on_mount=rx.redirect("/")),
    )