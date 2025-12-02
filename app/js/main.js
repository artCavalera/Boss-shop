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

const swiperReviews = new Swiper('.reviews__slider', {
  loop: true,
  slidesPerView: 8,
  spaceBetween: 16,
  // Navigation arrows
  navigation: {
    nextEl: '.reviews__arrow-next',
    prevEl: '.reviews__arrow-prev',
  },
  pagination: {
    el: '.reviews__pagination',
    type: "fraction",
  },
})
