ocument.addEventListener("DOMContentLoaded", function () {
const title = document.querySelector(".md-header__title");
if (title) {
title.style.cursor = "pointer";
title.addEventListener("click", () => {
window.location.href = "/";
});
}
});