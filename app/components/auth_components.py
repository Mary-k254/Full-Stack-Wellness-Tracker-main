import reflex as rx
from app.states.auth_state import AuthState


def input_field(
    placeholder: str,
    value: rx.Var[str],
    on_change: rx.event.EventHandler,
    type: str = "text",
) -> rx.Component:
    return rx.el.input(
        placeholder=placeholder,
        on_change=on_change,
        type=type,
        class_name="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all",
        default_value=value,
    )


def auth_button(
    text: str,
    on_click: rx.event.EventHandler,
    is_disabled: rx.Var[bool],
    is_loading: rx.Var[bool],
) -> rx.Component:
    return rx.el.button(
        rx.cond(is_loading, rx.spinner(class_name="text-white"), text),
        on_click=on_click,
        disabled=is_disabled,
        class_name="w-full py-3 px-4 text-white font-semibold rounded-lg bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex justify-center",
    )


def signup_form() -> rx.Component:
    return rx.el.form(
        rx.el.div(
            input_field(
                "Email",
                AuthState.signup_username,
                AuthState.set_signup_username,
                type="email",
            ),
            input_field(
                "Password",
                AuthState.signup_password,
                AuthState.set_signup_password,
                type="password",
            ),
            input_field(
                "Confirm Password",
                AuthState.signup_confirm_password,
                AuthState.set_signup_confirm_password,
                type="password",
            ),
            auth_button(
                "Create Account",
                AuthState.signup,
                ~AuthState.signup_form_is_valid,
                AuthState.is_loading,
            ),
            class_name="flex flex-col gap-4",
        ),
        on_submit=AuthState.signup,
        width="100%",
    )


def login_form() -> rx.Component:
    return rx.el.form(
        rx.el.div(
            input_field(
                "Email",
                AuthState.login_username,
                AuthState.set_login_username,
                type="email",
            ),
            input_field(
                "Password",
                AuthState.login_password,
                AuthState.set_login_password,
                type="password",
            ),
            auth_button(
                "Sign In",
                AuthState.login,
                ~AuthState.login_form_is_valid,
                AuthState.is_loading,
            ),
            class_name="flex flex-col gap-4",
        ),
        on_submit=AuthState.login,
        width="100%",
    )


def auth_card() -> rx.Component:
    return rx.el.div(
        rx.el.div(
            rx.el.h2(
                rx.cond(AuthState.show_login, "Welcome Back", "Create an Account"),
                class_name="text-2xl font-bold text-gray-900",
            ),
            rx.el.p(
                rx.cond(
                    AuthState.show_login,
                    "Sign in to continue to MoodBite.",
                    "Start your journey with us today.",
                ),
                class_name="text-sm text-gray-600 mt-1",
            ),
            class_name="text-center",
        ),
        rx.cond(
            AuthState.error_message != "",
            rx.el.div(
                rx.icon("flag_triangle_right", class_name="h-4 w-4 mr-2"),
                AuthState.error_message,
                class_name="bg-red-100 border border-red-200 text-red-700 px-4 py-2 rounded-lg text-sm flex items-center",
            ),
            rx.fragment(),
        ),
        rx.cond(AuthState.show_login, login_form(), signup_form()),
        rx.el.div(
            rx.cond(
                AuthState.show_login,
                "Don't have an account? ",
                "Already have an account? ",
            ),
            rx.el.button(
                rx.cond(AuthState.show_login, "Sign Up", "Sign In"),
                on_click=AuthState.toggle_form,
                class_name="font-semibold text-purple-600 hover:text-purple-800",
            ),
            class_name="text-sm text-center text-gray-600",
        ),
        class_name="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col gap-6",
    )