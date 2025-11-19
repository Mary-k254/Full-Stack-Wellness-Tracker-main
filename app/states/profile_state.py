import reflex as rx


class ProfileState(rx.State):
    username: str = "user@example.com"
    notifications_enabled: bool = True
    data_analysis_consent: bool = False

    @rx.event
    def toggle_notifications(self, value: bool):
        self.notifications_enabled = value

    @rx.event
    def toggle_data_analysis(self, value: bool):
        self.data_analysis_consent = value