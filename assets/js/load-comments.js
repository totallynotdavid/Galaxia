document.addEventListener("DOMContentLoaded", function () {
    const loadCommentsButton = document.getElementById("load-comments-button");
    const commentsContainer = document.getElementById("comments-container");

    if (loadCommentsButton && commentsContainer) {
        loadCommentsButton.addEventListener("click", function () {
            fetch("/components/comments.html")
                .then(response => response.text())
                .then(html => {
                    commentsContainer.innerHTML = html;
                    loadCommentsButton.style.display = "none";
                });
        });
    }
});
