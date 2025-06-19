document.addEventListener("DOMContentLoaded", function () {
  const siteTitle = document.querySelector(".md-header__title span");

  if (siteTitle && !siteTitle.closest("a")) {
    const link = document.createElement("a");
    link.href = window.location.origin + "/";
    link.classList.add("custom-link-style");
    link.appendChild(siteTitle);
    siteTitle.parentNode.replaceChild(link, siteTitle);
  }
});

