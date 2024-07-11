const menuClosed = document.querySelector(".menu-closed");
const navbar = document.querySelector(".nav-bar");
const menuOpen = document.querySelector(".menu-open");
const headerOverlay = document.querySelector(".header-overlay");
const body = document.querySelector(".body");
menuClosed.addEventListener("click", () => {
  navbar.classList.add("js-navbar");
  headerOverlay.classList.add("js-header-overlay");
  body.classList.add("js-fixed");
});

menuOpen.addEventListener("click", () => {
  navbar.classList.remove("js-navbar");
  headerOverlay.classList.remove("js-header-overlay");
  body.classList.remove("js-fixed");
});

headerOverlay.addEventListener("click", () => {
  navbar.classList.remove("js-navbar");
  headerOverlay.classList.remove("js-header-overlay");
  body.classList.remove("js-fixed");
});
const caseStudy = document.querySelectorAll(".case-study");
const styleGuide = document.querySelectorAll(".style-guide");
const closePopup = document.querySelectorAll(".close-poup");
const closePopupStyle = document.querySelectorAll(".close-poup-style");
const caseStudyPopUp = document.querySelectorAll(".case-study-popup");
const styleGuidePopUp = document.querySelectorAll(".style-guide-popup");
for (const [i] of caseStudy.entries()) {
  caseStudy[i].addEventListener("click", () => {
    caseStudyPopUp[i].classList.add("js-display");
    body.classList.add("js-fixed");
  });
}

for (const [i] of closePopup.entries()) {
  closePopup[i].addEventListener("click", () => {
    caseStudyPopUp[i].classList.remove("js-display");
    body.classList.remove("js-fixed");
  });
}

for (const [i] of styleGuide.entries()) {
  styleGuide[i].addEventListener("click", () => {
    styleGuidePopUp[i].classList.add("js-display");
    body.classList.add("js-fixed");
  });
}
for (const [i] of closePopupStyle.entries()) {
  closePopupStyle[i].addEventListener("click", () => {
    styleGuidePopUp[i].classList.remove("js-display");
    body.classList.remove("js-fixed");
  });
}
//Swiper Slider
var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
