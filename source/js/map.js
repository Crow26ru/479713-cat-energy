var wrapperMap = document.querySelector(".map__wrapper");
var imageMap = document.querySelector(".map__image");
var interactiveMap = document.querySelector(".map__interactive-map");

if(wrapperMap.classList.contains("no-js-wrapper-map")) {
  wrapperMap.classList.remove("no-js-wrapper-map");
}

if(imageMap.classList.contains("no-js-image-map")) {
  imageMap.classList.remove("no-js-image-map");
}

if(interactiveMap.classList.contains("no-js-map")) {
  interactiveMap.classList.remove("no-js-map");
}
