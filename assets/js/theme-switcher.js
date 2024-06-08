document.addEventListener("DOMContentLoaded", () => {
    const themeSwitcherButton = document.getElementById("theme-switch-button");
    const themeMenu = document.getElementById("theme-menu");
    const themeIcon = document.getElementById("theme-icon");

    // Get icons from the hidden icons container
    const sunIconElement = document.querySelector("#icons #sun-icon svg");
    const moonIconElement = document.querySelector("#icons #moon-icon svg");
    const monitorIconElement = document.querySelector(
        "#icons #monitor-icon svg"
    );

    if (!sunIconElement || !moonIconElement || !monitorIconElement) {
        console.error("One or more theme icons are not found in the DOM.");
        return;
    }

    const sunIcon = sunIconElement.outerHTML;
    const moonIcon = moonIconElement.outerHTML;
    const monitorIcon = monitorIconElement.outerHTML;

    // Set icons in the theme menu
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
        document.documentElement.setAttribute("data-theme", theme);
        setIcon(theme);
    };

    // Attach setTheme to the global window object
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

    const savedTheme =
        localStorage.getItem("theme") ||
        ((
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
        ) ?
            "dark"
        :   "light");
    setTheme(savedTheme);
});
