/* global Swiper */

const galleryThumbs = new Swiper(".js-intro-slider-thumbs", {
  spaceBetween: 15,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});

const swiper = new Swiper(".js-intro-slider", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  thumbs: {
    swiper: galleryThumbs,
  },
});
