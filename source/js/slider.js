var sliderButtonBefore = document.querySelector(".example__btn--before");
var sliderButtonAfter = document.querySelector(".example__btn--after");

sliderButtonBefore.addEventListener("click", function(e) {
  e.preventDefault();

  var sliderBar = document.querySelector(".example__range");
  var slide = document.querySelector(".example__slides");

  if(sliderBar.classList.contains("example__range--after")) {
    sliderBar.classList.remove("example__range--after");
  }

  if(slide.classList.contains("example__slides--after")) {
    slide.classList.remove("example__slides--after");
    slide.classList.add("example__slides--before");
  }
});

sliderButtonBefore.addEventListener("touchend", function(e) {
  e.preventDefault();

  var sliderBar = document.querySelector(".example__range");
  var slide = document.querySelector(".example__slides");

  if(sliderBar.classList.contains("example__range--after")) {
    sliderBar.classList.remove("example__range--after");
  }

  if(slide.classList.contains("example__slides--after")) {
    slide.classList.remove("example__slides--after");
    slide.classList.add("example__slides--before");
  }
});

sliderButtonAfter.addEventListener("click", function(e) {
  e.preventDefault();

  var sliderBar = document.querySelector(".example__range");
  var slide = document.querySelector(".example__slides");

  if(!sliderBar.classList.contains("example__range--after")) {
    sliderBar.classList.add("example__range--after");
  }

  if(slide.classList.contains("example__slides--before")) {
    slide.classList.remove("example__slides--before");
    slide.classList.add("example__slides--after");
  }
});

sliderButtonAfter.addEventListener("touchend", function(e) {
  e.preventDefault();

  var sliderBar = document.querySelector(".example__range");
  var slide = document.querySelector(".example__slides");

  if(!sliderBar.classList.contains("example__range--after")) {
    sliderBar.classList.add("example__range--after");
  }

  if(slide.classList.contains("example__slides--before")) {
    slide.classList.remove("example__slides--before");
    slide.classList.add("example__slides--after");
  }
});
