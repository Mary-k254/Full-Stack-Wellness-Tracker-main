import reflex as rx
from app.states.auth_state import AuthState
from app.states.mood_state import MoodState
from app.states.journal_state import JournalState
from app.states.food_state import FoodState
from app.components.navbar import navbar


def quick_stat_card(title: str, value: rx.Var, icon: str) -> rx.Component:
    return rx.el.div(
        rx.icon(icon, class_name="h-6 w-6 text-purple-600"),
        rx.el.div(
            rx.el.p(title, class_name="text-sm font-medium text-gray-500"),
            rx.el.p(value.to_string(), class_name="text-2xl font-bold text-gray-900"),
            class_name="flex flex-col",
        ),
        class_name="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 shadow-sm",
    )


def action_card(title: str, description: str, href: str, icon: str) -> rx.Component:
    return rx.el.a(
        rx.el.div(
            rx.icon(icon, class_name="h-8 w-8 text-purple-600 mb-4"),
            rx.el.h3(title, class_name="text-lg font-semibold text-gray-800"),
            rx.el.p(description, class_name="text-sm text-gray-500 mt-1"),
            class_name="p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300",
        ),
        href=href,
    )


def food_frequency_chart() -> rx.Component:
    return rx.el.div(
        rx.el.h3(
            "Top 5 Logged Foods",
            class_name="text-xl font-semibold text-gray-800 mb-4 px-6",
        ),
        rx.recharts.bar_chart(
            rx.recharts.cartesian_grid(stroke_dasharray="3 3"),
            rx.recharts.graphing_tooltip(),
            rx.recharts.x_axis(data_key="food"),
            rx.recharts.y_axis(),
            rx.recharts.bar(data_key="count", fill="#8884d8"),
            data=FoodState.food_frequency,
            height=250,
        ),
        class_name="bg-white p-4 rounded-xl border border-gray-200 shadow-sm",
    )


def dashboard_mood_chart() -> rx.Component:
    return rx.el.div(
        rx.el.h3(
            "7-Day Mood Trend",
            class_name="text-xl font-semibold text-gray-800 mb-4 px-6",
        ),
        rx.recharts.line_chart(
            rx.recharts.cartesian_grid(stroke_dasharray="3 3"),
            rx.recharts.graphing_tooltip(),
            rx.recharts.x_axis(data_key="date"),
            rx.recharts.y_axis(domain=[0, 10]),
            rx.recharts.line(data_key="mood_score", stroke="#8884d8", type_="monotone"),
            data=MoodState.mood_history_last_7_days,
            height=250,
        ),
        class_name="bg-white p-4 rounded-xl border border-gray-200 shadow-sm",
    )


def dashboard() -> rx.Component:
    return rx.cond(
        AuthState.is_authenticated,
        rx.el.div(
            navbar(),
            rx.el.main(
                rx.el.div(
                    rx.el.h1(
                        f"Welcome Back!", class_name="text-3xl font-bold text-gray-900"
                    ),
                    rx.el.div(
                        quick_stat_card(
                            "Current Mood", MoodState.last_mood_score, "smile"
                        ),
                        quick_stat_card(
                            "7-Day Avg Mood",
                            MoodState.average_mood_last_7_days,
                            "line-chart",
                        ),
                        quick_stat_card(
                            "Journal Entries",
                            JournalState.journal_entries.length(),
                            "book-text",
                        ),
                        quick_stat_card(
                            "Food Entries",
                            FoodState.food_log_entries.length(),
                            "utensils",
                        ),
                        class_name="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8",
                    ),
                    rx.el.div(
                        action_card(
                            "Log Mood",
                            "Record your current mood and tags.",
                            "/mood-tracker",
                            "circle-plus",
                        ),
                        action_card(
                            "Write Journal",
                            "Reflect on your day with a journal entry.",
                            "/journal",
                            "square-pen",
                        ),
                        action_card(
                            "Log Food",
                            "Add a food item to your daily log.",
                            "/food-log",
                            "utensils-crossed",
                        ),
                        class_name="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8",
                    ),
                    rx.el.div(
                        dashboard_mood_chart(),
                        food_frequency_chart(),
                        class_name="grid lg:grid-cols-2 gap-8 mt-8",
                    ),
                    class_name="container mx-auto py-8 px-6",
                ),
                class_name="flex-grow",
            ),
            class_name="min-h-screen bg-gray-50 flex flex-col font-['Inter']",
        ),
        rx.el.div(on_mount=rx.redirect("/")),
    )