const techCards = document
  .querySelector('.main__description-brands')
  .cloneNode(true)
document.querySelector('.main__description').appendChild(techCards)

// const mainDescription = document.querySelector('.main__description')
// console.log(mainDescription)
// const mainDescriptionTechCards = mainDescription.children[3]
// mainDescriptionTechCards.className += ' .main__description-brands--tech'
// console.log(mainDescriptionTechCards)
// const mainDescriptionTechCardsSwiper =
//   mainDescriptionTechCards.querySelector('.swiper')
// mainDescriptionTechCardsSwiper.classList.remove('swiper--brands')
// mainDescriptionTechCardsSwiper.className += ' swiper--tech'
// console.log(mainDescriptionTechCards.children[1].children[0])
