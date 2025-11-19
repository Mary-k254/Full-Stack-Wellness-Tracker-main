import reflex as rx
import re
from typing import Optional

EMAIL_REGEX = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$"


class AuthState(rx.State):
    is_authenticated: bool = False
    token: str = ""
    error_message: str = ""
    show_login: bool = True
    signup_username: str = ""
    signup_password: str = ""
    signup_confirm_password: str = ""
    login_username: str = ""
    login_password: str = ""
    is_loading: bool = False

    @rx.var
    def signup_form_is_valid(self) -> bool:
        return (
            bool(re.match(EMAIL_REGEX, self.signup_username))
            and self.signup_password != ""
            and (self.signup_password == self.signup_confirm_password)
        )

    @rx.var
    def login_form_is_valid(self) -> bool:
        return (
            bool(re.match(EMAIL_REGEX, self.login_username))
            and self.login_password != ""
        )

    @rx.event
    def toggle_form(self):
        self.show_login = not self.show_login
        self.error_message = ""
        self._reset_fields()

    def _reset_fields(self):
        self.signup_username = ""
        self.signup_password = ""
        self.signup_confirm_password = ""
        self.login_username = ""
        self.login_password = ""

    @rx.event
    async def signup(self):
        """Simulates a signup event and logs the user in."""
        self.is_loading = True
        yield
        import asyncio

        await asyncio.sleep(1)
        if not self.signup_form_is_valid:
            self.error_message = "Please fill all fields correctly."
            self.is_loading = False
            return
        self.token = "fake-jwt-token-for-" + self.signup_username
        self.is_authenticated = True
        self.is_loading = False
        self._reset_fields()
        yield rx.redirect("/dashboard")
        return

    @rx.event
    async def login(self):
        """Simulates a login event."""
        self.is_loading = True
        yield
        import asyncio

        await asyncio.sleep(1)
        if not self.login_form_is_valid:
            self.error_message = "Invalid email or password format."
            self.is_loading = False
            return
        if (
            self.login_username == "user@example.com"
            and self.login_password == "password"
        ):
            self.token = "fake-jwt-token-for-" + self.login_username
            self.is_authenticated = True
            self.is_loading = False
            self._reset_fields()
            yield rx.redirect("/dashboard")
            return
        else:
            self.error_message = "Invalid credentials. Please try again."
            self.is_loading = False

    @rx.event
    def logout(self):
        """Logs the user out."""
        self.is_authenticated = False
        self.token = ""
        self._reset_fields()
        return rx.redirect("/")

    @rx.event
    def on_load(self):
        pass