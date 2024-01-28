import Swiper from 'swiper'
// eslint-disable-next-line import/no-unresolved
import { Pagination } from 'swiper/modules'
Swiper.use([Pagination])

let init = false
const swiperMode = () => {
  const screen = 767
  const slides = document.querySelectorAll('.swiper')

  const slider = (element) => {
    return new Swiper(element, {
      direction: 'horizontal',
      slidesPerView: 'auto',
      loop: true,
      createElements: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: false,
        enabled: true
      }
    })
  }
  if (document.body.clientWidth <= screen) {
    if (!init) {
      init = true
      slides.forEach((slide) => {
        slider(slide)
      })
    }
  }
  if (document.body.clientWidth > screen) {
    slides.forEach(function (slide) {
      if (slide.swiper) slide.swiper.destroy(true, true)
    })
    init = false
  }
}

window.addEventListener('load', swiperMode)
window.addEventListener('resize', swiperMode)
