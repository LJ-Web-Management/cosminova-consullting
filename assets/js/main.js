document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".menu-toggle");
  var headerInner = document.querySelector(".header-inner");
  var header = document.querySelector(".site-header");

  function setHeaderHeight() {
    if (header) {
      document.documentElement.style.setProperty("--header-h", header.offsetHeight + "px");
    }
  }
  setHeaderHeight();
  window.addEventListener("resize", setHeaderHeight);

  if (toggle && headerInner) {
    toggle.addEventListener("click", function () {
      setHeaderHeight();
      headerInner.classList.toggle("open");
    });
  }

  var links = document.querySelectorAll(".main-nav a");
  links.forEach(function (link) {
    if (link.getAttribute("href") === window.location.pathname.split("/").pop() ||
        (window.location.pathname.endsWith("/") && link.getAttribute("href") === "index.html")) {
      link.classList.add("active");
    }
  });
});
