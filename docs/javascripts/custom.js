document.addEventListener("DOMContentLoaded", function () {
  const siteTitle = document.querySelector(".md-header__title span");

  if (siteTitle && !siteTitle.closest("a")) {
    const link = document.createElement("a");
    link.href = "/";
    link.style.color = "inherit";
    link.style.textDecoration = "none";
    siteTitle.parentNode.replaceChild(link, siteTitle);
    link.appendChild(siteTitle);
  }
});

