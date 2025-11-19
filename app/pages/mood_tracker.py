import reflex as rx
from app.states.auth_state import AuthState
from app.states.mood_state import MoodState
from app.components.navbar import navbar


def mood_slider() -> rx.Component:
    return rx.el.div(
        rx.el.label(
            f"How are you feeling? {MoodState.current_mood_score}/10",
            class_name="text-lg font-medium text-gray-700 mb-4",
        ),
        rx.el.input(
            type="range",
            min=0,
            max=10,
            on_change=MoodState.set_current_mood_score.throttle(100),
            class_name="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600",
            default_value=MoodState.current_mood_score.to_string(),
            key=MoodState.current_mood_score.to_string(),
        ),
        class_name="w-full",
    )


def tag_selection() -> rx.Component:
    return rx.el.div(
        rx.el.label(
            "What's contributing to your mood? (optional)",
            class_name="text-lg font-medium text-gray-700 mb-4",
        ),
        rx.el.div(
            rx.foreach(
                MoodState.available_tags,
                lambda tag: rx.el.button(
                    tag.capitalize(),
                    on_click=lambda: MoodState.toggle_tag(tag),
                    class_name=rx.cond(
                        MoodState.selected_tags.contains(tag),
                        "px-4 py-2 text-sm font-medium text-white bg-purple-600 border border-transparent rounded-full shadow-sm hover:bg-purple-700 transition-all",
                        "px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-50 transition-all",
                    ),
                ),
            ),
            class_name="flex flex-wrap gap-2",
        ),
        class_name="w-full",
    )


def mood_history_chart() -> rx.Component:
    return rx.el.div(
        rx.recharts.line_chart(
            rx.recharts.cartesian_grid(stroke_dasharray="3 3"),
            rx.recharts.graphing_tooltip(cursor={"fill": "rgba(200, 200, 200, 0.2)"}),
            rx.recharts.x_axis(data_key="date"),
            rx.recharts.y_axis(domain=[0, 10]),
            rx.recharts.line(
                data_key="mood_score",
                stroke="#8884d8",
                active_dot={"r": 8},
                type_="monotone",
            ),
            data=MoodState.mood_history_last_7_days,
            height=300,
            class_name="w-full",
        ),
        class_name="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mt-8",
    )


def mood_history_list() -> rx.Component:
    return rx.el.div(
        rx.el.h3(
            "Recent Entries", class_name="text-xl font-semibold text-gray-800 mb-4"
        ),
        rx.cond(
            MoodState.mood_entries.length() > 0,
            rx.el.div(
                rx.foreach(
                    MoodState.mood_entries,
                    lambda entry: rx.el.div(
                        rx.el.div(
                            rx.el.p(
                                f"Mood: {entry['mood_score']}/10",
                                class_name="font-semibold text-gray-900",
                            ),
                            rx.el.p(
                                entry["timestamp"], class_name="text-sm text-gray-500"
                            ),
                        ),
                        rx.el.div(
                            rx.foreach(
                                entry["tags"],
                                lambda tag: rx.el.span(
                                    tag.capitalize(),
                                    class_name="px-2 py-1 text-xs font-medium text-purple-700 bg-purple-100 rounded-full",
                                ),
                            ),
                            class_name="flex flex-wrap gap-2 mt-2",
                        ),
                        class_name="p-4 border-b border-gray-200",
                    ),
                ),
                class_name="bg-white rounded-xl border border-gray-200 shadow-sm",
            ),
            rx.el.p("No mood entries yet.", class_name="text-gray-500"),
        ),
        class_name="mt-8",
    )


def mood_tracker_page() -> rx.Component:
    return rx.cond(
        AuthState.is_authenticated,
        rx.el.div(
            navbar(),
            rx.el.main(
                rx.el.div(
                    rx.el.h1(
                        "Mood Tracker",
                        class_name="text-3xl font-bold text-gray-900 mb-8",
                    ),
                    rx.el.div(
                        mood_slider(),
                        tag_selection(),
                        rx.el.button(
                            "Log Mood",
                            on_click=MoodState.log_mood,
                            class_name="w-full mt-6 py-3 px-4 text-white font-semibold rounded-lg bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex justify-center",
                        ),
                        class_name="bg-white p-8 rounded-xl border border-gray-200 shadow-sm flex flex-col items-start gap-6",
                    ),
                    mood_history_chart(),
                    mood_history_list(),
                    class_name="container mx-auto py-8 px-6 max-w-3xl",
                ),
                class_name="flex-grow",
            ),
            class_name="min-h-screen bg-gray-50 flex flex-col font-['Inter']",
        ),
        rx.el.div(on_mount=rx.redirect("/")),
    )