# import reflex as rx

# config = rx.Config(app_name="app", plugins=[rx.plugins.TailwindV3Plugin()])


import reflex as rx

class ProdConfig(rx.Config):
    pass

# Development config (default)
config = rx.Config(
    app_name="app",
    plugins=[rx.plugins.TailwindV3Plugin()],
)

# Production config override
def get_config():
    import os
    if os.getenv("REFLEX_ENV") == "prod":
        return ProdConfig(
            app_name="app",
            plugins=[rx.plugins.TailwindV3Plugin()],
            env=rx.Env.PROD,  # Important for production
            # frontend_port=3000,  # Optional: specify if needed
            # backend_port=8000,   # Optional: specify if needed
        )
    return config