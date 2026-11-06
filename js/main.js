/* Premium redesign concept — interactions */
(function () {
  "use strict";
  var menu = document.querySelector(".menu"), nav = document.getElementById("nav");
  if (menu && nav) menu.addEventListener("click", function () {
    var open = menu.getAttribute("aria-expanded") !== "true";
    nav.classList.toggle("open", open); menu.setAttribute("aria-expanded", String(open));
    menu.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  var header = document.querySelector(".header");
  function onScroll() { if (header) header.classList.toggle("scrolled", window.scrollY > 8); }
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }); }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  } else items.forEach(function (el) { el.classList.add("in"); });
  document.querySelectorAll(".year").forEach(function (y) { y.textContent = new Date().getFullYear(); });
})();
