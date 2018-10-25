var menuBtn = document.querySelector(".header-page__menu");
var mobileMenu = document.querySelector(".navigation__list");

if(menuBtn.classList.contains("no-js-btn-nav")) {
  menuBtn.classList.remove("no-js-btn-nav");
}

if(mobileMenu.classList.contains("no-js-nav")) {
  mobileMenu.classList.remove("no-js-nav");
}

menuBtn.addEventListener("click", function(e) {
  e.preventDefault();
  menuBtn.classList.toggle("header-page__menu--open");
  mobileMenu.classList.toggle("navigation__list--open");
});

menuBtn.addEventListener("touchend", function(e) {
  e.preventDefault();
  menuBtn.classList.toggle("header-page__menu--open");
  mobileMenu.classList.toggle("navigation__list--open");
});
