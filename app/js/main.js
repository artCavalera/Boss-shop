const swiper = new Swiper('.look__slider', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 40,
  // Navigation arrows
  navigation: {
    nextEl: '.look__slider-arrow-next',
    prevEl: '.look__slider-arrow-prev',
  },
})
