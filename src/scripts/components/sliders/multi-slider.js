/* global Swiper */

const swiper = new Swiper(".js-multi-slider", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  // Responsive breakpoints
  breakpoints: {
    991: {
      slidesPerView: 2,
    },
    1199: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
