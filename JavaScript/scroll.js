"use strict";

const navbar = document.querySelector(".navbar");
let originalColor;

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  if (!originalColor) {
    originalColor = window.getComputedStyle(navbar).backgroundColor;
  }

  if (scrollPosition > 100) {
    navbar.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
  } else {
    navbar.style.backgroundColor = originalColor;
  }
});

// Scroll Button

const downBtn = document.getElementById("icon-down");

downBtn.addEventListener("click", () => {
  window.scrollBy(0, 985);
});


window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    downBtn.style.opacity = "0";
  } else {
    downBtn.style.opacity = "1";
  }
});



