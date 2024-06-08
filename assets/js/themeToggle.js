let themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {
    let root = document.documentElement;

    if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
        root.classList.remove("dark");
        localStorage.theme = "light";
    } else {
        root.classList.add("dark");
        localStorage.theme = "dark";
    }
});

document.addEventListener("DOMContentLoaded", event => {
    if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
});

console.log("themeToggle.js loaded");
