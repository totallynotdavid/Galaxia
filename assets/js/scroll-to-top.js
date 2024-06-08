window.scrollToTop = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

window.scrollToComment = function () {
    document.getElementById("load-comments-button").scrollIntoView({ behavior: "smooth" });
};

window.addEventListener("scroll", () => {
    const scrollButtons = document.getElementById("scroll-buttons");
    if (window.scrollY > 50) {
        scrollButtons.classList.remove("md:hidden");
        scrollButtons.classList.add("md:flex");
    } else {
        scrollButtons.classList.remove("md:flex");
        scrollButtons.classList.add("md:hidden");
    }
});
