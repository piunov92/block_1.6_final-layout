import Swiper from 'swiper'
// eslint-disable-next-line import/no-unresolved
import { Keyboard, Pagination } from 'swiper/modules'
Swiper.use([Pagination, Keyboard])

const breakpoint = window.matchMedia('(min-width:767px)')
let mainDescriptionBrandsSwiper

const breakpointChecker = function () {
  if (breakpoint.matches) {
    if (mainDescriptionBrandsSwiper !== undefined) {
      mainDescriptionBrandsSwiper.destroy(true, true)
    }
  } else if (!breakpoint.matches) {
    return initSwiper('swiper--brands'), initSwiper('swiper--tech')
  }
}

const initSwiper = function (swiperSelector) {
  mainDescriptionBrandsSwiper = new Swiper(`.${swiperSelector}`, {
    direction: 'horizontal',
    slidesPerView: 'auto',
    longSwipes: 11,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: false,
      enabled: true
    }
    // keyboard: {
    //   enabled: true,
    //   onlyInViewport: true
    // }
  })
}

breakpoint.addEventListener('change', breakpointChecker)
breakpointChecker()
