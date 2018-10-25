var menuBtn = document.querySelector(".header-page__menu");
var mobileMenu = document.querySelector(".navigation__list");
var wrapperMap = document.querySelector(".map__wrapper");
var imageMap = document.querySelector(".map__image");
var interactiveMap = document.querySelector(".map__interactive-map");

if(menuBtn.classList.contains("no-js-btn-nav")) {
  menuBtn.classList.remove("no-js-btn-nav");
}

if(mobileMenu.classList.contains("no-js-nav")) {
  mobileMenu.classList.remove("no-js-nav");
}

if(wrapperMap.classList.contains("no-js-wrapper-map")) {
  wrapperMap.classList.remove("no-js-wrapper-map");
}

if(imageMap.classList.contains("no-js-image-map")) {
  imageMap.classList.remove("no-js-image-map");
}

if(interactiveMap.classList.contains("no-js-map")) {
  interactiveMap.classList.remove("no-js-map");
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
