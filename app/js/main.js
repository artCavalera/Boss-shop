const openBtn = document.querySelector('.open-modal')
const modal = document.querySelector('.modal')
const modalOverlay = document.querySelector('.modal__overlay')
const closeBtn = document.querySelector('.close-modal')

function openModal() {
  modal.setAttribute('aria-hidden', 'false')
  document.body.classList.add('scroll-lock')
}

function closeModal() {
  modal.setAttribute('aria-hidden', 'true')
  document.body.classList.remove('scroll-lock')
}

if (modalOverlay) {
  modalOverlay.addEventListener('click', closeModal)
}

openBtn.addEventListener('click', openModal)
closeBtn.addEventListener('click', closeModal)

document.addEventListener('keydown', (e) => {
  if ((e.key = 'Escape' && modal.getAttribute('aria-hidden') === 'false')) {
    closeModal()
  }
})

const openPopupBtn = document.querySelector('.catalog-popup')
const popup = document.querySelector('.popup')
const popupOverlay = document.querySelector('.popup__overlay')
const closePopupBtn = document.querySelector('.close-popup')

function openPopup() {
  popup.setAttribute('aria-hidden', 'false')
  document.body.classList.add('scroll-lock')
}

function closePopup() {
  popup.setAttribute('aria-hidden', 'true')
  document.body.classList.remove('scroll-lock')
}

if (openPopupBtn) {
  openPopupBtn.addEventListener('click', openPopup)
}

if (popupOverlay) {
  popupOverlay.addEventListener('click', closePopup)
}

if (closePopupBtn) {
  closePopupBtn.addEventListener('click', closePopup)
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && popup.getAttribute('aria-hidden') === 'false') {
    closePopup()
  }
})

const breakpoint = window.matchMedia('(min-width: 576px)')
let sliderMobile = null

function initSwiper() {
  sliderMobile = new Swiper('.slider-mobile', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,

    navigation: {
      nextEl: '.product__slider-arrow-next',
      prevEl: '.product__slider-arrow-prev',
    },
  })
}

function destroySwiper() {
  if (sliderMobile) {
    sliderMobile.destroy(true, true)
    sliderMobile = null
  }
}

function handleBreakpointChange(e) {
  if (e.matches) {
    destroySwiper()
  } else {
    if (!sliderMobile) initSwiper()
  }
}

handleBreakpointChange(breakpoint)

breakpoint.addEventListener('change', handleBreakpointChange)

const swiperReviews = new Swiper('.reviews-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 8,
  spaceBetween: 16,

  // If we need pagination
  pagination: {
    el: '.reviews-pagination',
    type: 'fraction',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-arrow-next',
    prevEl: '.reviews-arrow-prev',
  },

  breakpoints: {
    320: { slidesPerView: 2 },
    480: { slidesPerView: 3 },
    768: { slidesPerView: 4 },
    1000: { slidesPerView: 6 },
    1400: { slidesPerView: 8 },
  },
})

const swiper = new Swiper('.look__slider', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  // Navigation arrows
  navigation: {
    nextEl: '.look__slider-arrow-next',
    prevEl: '.look__slider-arrow-prev',
  },
  breakpoints: {
    320: { slidesPerView: 1 },
    576: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1000: { slidesPerView: 3 },
    1400: { slidesPerView: 3 },
  },
})

const headerBtn = document.querySelector('.header__btn')
const menu = document.querySelector('.menu')

headerBtn.addEventListener('click', () => {
  menu.classList.toggle('menu--active')
})

const modeContainer = document.querySelector('.view-mode__container')
const modeBtnGrid = document.querySelector('.view-mode__btn-grid')
const modeBtnLine = document.querySelector('.view-mode__btn-line')

modeBtnGrid?.addEventListener('click', () => {
  modeContainer.classList.add('view-mode__container--grid')
  modeContainer.classList.remove('view-mode__container--line')
})

modeBtnLine?.addEventListener('click', () => {
  modeContainer.classList.add('view-mode__container--line')
  modeContainer.classList.remove('view-mode__container--grid')
})

const rangeSlider = document.querySelector('.range__slider')
const rangeMin = document.querySelector('.range__min')
const rangeMax = document.querySelector('.range__max')

noUiSlider.create(rangeSlider, {
  start: [300, 3000],
  step: 100,
  range: {
    min: 300,
    max: 3000,
  },
  format: {
    to: (value) => Math.round(value),
    from: (value) => Number(value),
  },
})

rangeSlider.noUiSlider.on('update', (values, handle) => {
  if (handle === 0) {
    rangeMin.value = values[0]
  } else {
    rangeMax.value = values[1]
  }
})

rangeMin.addEventListener('change', () => {
  rangeSlider.noUiSlider.set([rangeMin.value, null])
})

rangeMax.addEventListener('change', () => {
  rangeSlider.noUiSlider.set([rangeMax.value, null])
})
