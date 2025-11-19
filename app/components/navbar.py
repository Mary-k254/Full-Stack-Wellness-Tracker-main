import reflex as rx
from app.states.auth_state import AuthState


def navbar() -> rx.Component:
    return rx.el.header(
        rx.el.div(
            rx.el.a(
                rx.el.div(
                    rx.icon("smile-plus", class_name="h-8 w-8 text-purple-600"),
                    rx.el.span(
                        "MoodBite", class_name="text-xl font-bold text-gray-800"
                    ),
                    class_name="flex items-center gap-2",
                ),
                href="/",
            ),
            rx.cond(
                AuthState.is_authenticated,
                rx.el.div(
                    rx.el.a(
                        "Dashboard",
                        href="/dashboard",
                        class_name="text-gray-600 hover:text-purple-600 font-medium transition-colors",
                    ),
                    rx.el.a(
                        "Mood Tracker",
                        href="/mood-tracker",
                        class_name="text-gray-600 hover:text-purple-600 font-medium transition-colors",
                    ),
                    rx.el.a(
                        "Journal",
                        href="/journal",
                        class_name="text-gray-600 hover:text-purple-600 font-medium transition-colors",
                    ),
                    rx.el.a(
                        "Food Log",
                        href="/food-log",
                        class_name="text-gray-600 hover:text-purple-600 font-medium transition-colors",
                    ),
                    rx.el.a(
                        "Profile",
                        href="/profile",
                        class_name="text-gray-600 hover:text-purple-600 font-medium transition-colors",
                    ),
                    rx.el.button(
                        "Log Out",
                        on_click=AuthState.logout,
                        class_name="ml-4 px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors",
                    ),
                    class_name="hidden md:flex items-center gap-6",
                ),
                rx.fragment(),
            ),
            class_name="container mx-auto flex justify-between items-center",
        ),
        class_name="py-4 px-6 bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50",
    )