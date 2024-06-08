window.scrollToTop = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

window.scrollToComment = function () {
    document
        .getElementById("load-comments-button")
        .scrollIntoView({ behavior: "smooth" });
};

window.addEventListener("scroll", () => {
    const scrollButtons = document.getElementById("scroll-buttons");
    if (window.scrollY > 50) {
        scrollButtons.classList.remove("opacity-0");
        scrollButtons.classList.add("opacity-100");
    } else {
        scrollButtons.classList.remove("opacity-100");
        scrollButtons.classList.add("opacity-0");
    }
});
