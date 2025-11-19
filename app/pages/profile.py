import reflex as rx
from app.states.auth_state import AuthState
from app.states.profile_state import ProfileState
from app.components.navbar import navbar


def setting_toggle(
    label: str, description: str, value: rx.Var[bool], on_change: rx.event.EventHandler
) -> rx.Component:
    return rx.el.div(
        rx.el.div(
            rx.el.label(label, class_name="font-semibold text-gray-800"),
            rx.el.p(description, class_name="text-sm text-gray-500"),
            class_name="flex-grow",
        ),
        rx.el.div(
            rx.el.button(
                rx.el.span(
                    class_name=rx.cond(
                        value,
                        "translate-x-5 opacity-100 ease-in duration-200 h-5 w-5 rounded-full bg-white shadow-lg transform ring-0 transition-transform",
                        "translate-x-0 opacity-100 ease-in duration-200 h-5 w-5 rounded-full bg-white shadow-lg transform ring-0 transition-transform",
                    )
                ),
                on_click=lambda: on_change(~value),
                class_name=rx.cond(
                    value,
                    "bg-purple-600 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2",
                    "bg-gray-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2",
                ),
            )
        ),
        class_name="flex items-center justify-between p-4 border-b border-gray-200",
    )


def profile_page() -> rx.Component:
    return rx.cond(
        AuthState.is_authenticated,
        rx.el.div(
            navbar(),
            rx.el.main(
                rx.el.div(
                    rx.el.h1(
                        "Profile & Settings",
                        class_name="text-3xl font-bold text-gray-900 mb-8",
                    ),
                    rx.el.div(
                        rx.el.div(
                            rx.el.h2(
                                "Account Information",
                                class_name="text-xl font-semibold text-gray-800 px-4 pb-2 border-b border-gray-200",
                            ),
                            rx.el.div(
                                rx.el.div(
                                    "Email", class_name="font-medium text-gray-600"
                                ),
                                rx.el.div(
                                    ProfileState.username, class_name="text-gray-800"
                                ),
                                class_name="flex justify-between items-center p-4",
                            ),
                            class_name="bg-white rounded-xl border border-gray-200 shadow-sm",
                        ),
                        rx.el.div(
                            rx.el.h2(
                                "Privacy & Consent",
                                class_name="text-xl font-semibold text-gray-800 px-4 pt-4 pb-2",
                            ),
                            setting_toggle(
                                "Email Notifications",
                                "Receive updates and summaries via email.",
                                ProfileState.notifications_enabled,
                                ProfileState.toggle_notifications,
                            ),
                            setting_toggle(
                                "AI Data Analysis",
                                "Allow our AI to analyze your data for personalized insights.",
                                ProfileState.data_analysis_consent,
                                ProfileState.toggle_data_analysis,
                            ),
                            class_name="bg-white rounded-xl border border-gray-200 shadow-sm mt-8",
                        ),
                        rx.el.div(
                            rx.el.button(
                                "Delete Account",
                                class_name="w-full text-left px-4 py-3 font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors",
                                on_click=rx.toast.error(
                                    "Account deletion is not yet implemented."
                                ),
                            ),
                            class_name="bg-white rounded-xl border border-gray-200 shadow-sm mt-8",
                        ),
                    ),
                    class_name="container mx-auto py-8 px-6 max-w-3xl",
                )
            ),
            class_name="min-h-screen bg-gray-50 flex flex-col font-['Inter']",
        ),
        rx.el.div(on_mount=rx.redirect("/")),
    )