import reflex as rx
from app.components.auth_components import auth_card
from app.components.navbar import navbar


def index() -> rx.Component:
    return rx.el.div(
        navbar(),
        rx.el.main(
            rx.el.div(
                rx.el.div(
                    rx.el.h1(
                        "Track Your Mood, Understand Your Life.",
                        class_name="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight",
                    ),
                    rx.el.p(
                        "MoodBite helps you find connections between your food, mood, and overall well-being with AI-powered insights.",
                        class_name="mt-4 text-lg text-gray-600 max-w-2xl mx-auto",
                    ),
                    class_name="text-center",
                ),
                auth_card(),
                class_name="container mx-auto flex flex-col items-center justify-center gap-12 px-4 py-16",
            ),
            class_name="flex-grow flex items-center",
        ),
        class_name="min-h-screen bg-gray-50 flex flex-col font-['Inter']",
    )