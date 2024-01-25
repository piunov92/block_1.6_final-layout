import Swiper from 'swiper'
// eslint-disable-next-line import/no-unresolved
import { Keyboard, Pagination } from 'swiper/modules'
Swiper.use([Pagination, Keyboard])

// let middleScreen = window.matchMedia('(max-width: 767px)')
// if (middleScreen.matches) {
new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false
  }
})
// } else document.querySelector('.swiper').classList.remove('swiper')
