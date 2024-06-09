document.addEventListener("DOMContentLoaded", () => {
    const themeSwitcherButton = document.getElementById("theme-switch-button");
    const themeMenu = document.getElementById("theme-menu");
    const themeIcon = document.getElementById("theme-icon");

    const sunIconElement = document.querySelector("#icons #sun-icon svg");
    const moonIconElement = document.querySelector("#icons #moon-icon svg");
    const monitorIconElement = document.querySelector(
        "#icons #monitor-icon svg"
    );

    if (!sunIconElement || !moonIconElement || !monitorIconElement) {
        console.error("Uno o más iconos no se han encontrado.");
        return;
    }

    const sunIcon = sunIconElement.outerHTML;
    const moonIcon = moonIconElement.outerHTML;
    const monitorIcon = monitorIconElement.outerHTML;

    const sunIconContainer = document.querySelector(
        ".icon-container[data-icon='sun-icon']"
    );
    const moonIconContainer = document.querySelector(
        ".icon-container[data-icon='moon-icon']"
    );
    const monitorIconContainer = document.querySelector(
        ".icon-container[data-icon='monitor-icon']"
    );

    if (sunIconContainer) sunIconContainer.innerHTML = sunIcon;
    if (moonIconContainer) moonIconContainer.innerHTML = moonIcon;
    if (monitorIconContainer) monitorIconContainer.innerHTML = monitorIcon;

    const setIcon = theme => {
        if (theme === "dark") {
            themeIcon.innerHTML = moonIcon;
        } else if (theme === "light") {
            themeIcon.innerHTML = sunIcon;
        } else {
            themeIcon.innerHTML = monitorIcon;
        }
    };

    const setTheme = theme => {
        localStorage.setItem("theme", theme);

        if (theme === "system") {
            document.documentElement.classList.remove("dark");
            document.documentElement.classList.remove("light");
            const systemPreference =
                window.matchMedia("(prefers-color-scheme: dark)").matches ?
                    "dark"
                :   "light";
            document.documentElement.classList.add(systemPreference);
        } else if (theme === "dark") {
            document.documentElement.classList.add("dark");
            document.documentElement.classList.remove("light");
        } else {
            document.documentElement.classList.add("light");
            document.documentElement.classList.remove("dark");
        }

        setIcon(theme);
        document.dispatchEvent(
            new CustomEvent("themeChange", { detail: theme })
        );
    };

    window.setTheme = setTheme;

    themeSwitcherButton.addEventListener("click", () => {
        themeMenu.classList.toggle("hidden");
    });

    document.querySelectorAll("#theme-menu button").forEach(button => {
        button.addEventListener("click", e => {
            const theme = e.currentTarget.getAttribute("data-theme");
            setTheme(theme);
            themeMenu.classList.add("hidden");
        });
    });

    const savedTheme = localStorage.getItem("theme") || "system";
    setTheme(savedTheme);
});
