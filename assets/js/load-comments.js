document.addEventListener("DOMContentLoaded", function () {
    const loadCommentsButton = document.getElementById("load-comments-button");
    const commentsContainer = document.getElementById("comments-container");

    const getCurrentTheme = () => {
        return document.documentElement.getAttribute("data-theme") || "light";
    };

    if (loadCommentsButton && commentsContainer) {
        loadCommentsButton.addEventListener("click", function () {
            const script = document.createElement("script");
            script.src = "https://giscus.app/client.js";
            script.setAttribute("data-repo", "totallynotdavid/galaxia");
            script.setAttribute(
                "data-repo-id",
                "MDEwOlJlcG9zaXRvcnkyNDU5MzcwNzQ="
            );
            script.setAttribute("data-category", "Comments");
            script.setAttribute("data-category-id", "DIC_kwDODqizss4Cf7W2");
            script.setAttribute("data-mapping", "title");
            script.setAttribute("data-strict", "1");
            script.setAttribute("data-reactions-enabled", "1");
            script.setAttribute("data-emit-metadata", "1");
            script.setAttribute("data-input-position", "top");
            script.setAttribute("data-theme", getCurrentTheme());
            script.setAttribute("data-lang", "es");
            script.setAttribute("data-loading", "lazy");
            script.crossOrigin = "anonymous";
            script.async = true;

            commentsContainer.appendChild(script);

            loadCommentsButton.style.display = "none";
        });
    }
});
