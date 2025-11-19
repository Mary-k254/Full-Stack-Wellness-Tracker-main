import reflex as rx
from app.pages.index import index
from app.pages.dashboard import dashboard
from app.pages.profile import profile_page
from app.pages.mood_tracker import mood_tracker_page
from app.pages.journal import journal_page
from app.pages.food_log import food_log_page
from app.states.auth_state import AuthState

app = rx.App(
    theme=rx.theme(appearance="light"),
    head_components=[
        rx.el.link(rel="preconnect", href="https://fonts.googleapis.com"),
        rx.el.link(rel="preconnect", href="https://fonts.gstatic.com", cross_origin=""),
        rx.el.link(
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",
            rel="stylesheet",
        ),
    ],
)
app.add_page(index, route="/", on_load=AuthState.on_load)
app.add_page(dashboard, route="/dashboard", on_load=AuthState.on_load)
app.add_page(mood_tracker_page, route="/mood-tracker", on_load=AuthState.on_load)
app.add_page(journal_page, route="/journal", on_load=AuthState.on_load)
app.add_page(food_log_page, route="/food-log", on_load=AuthState.on_load)
app.add_page(profile_page, route="/profile", on_load=AuthState.on_load)