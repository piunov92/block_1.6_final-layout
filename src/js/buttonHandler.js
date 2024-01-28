const buttonShowText = document.querySelector('.btn--read')
const textDescription = document.querySelector('.text--about')
const span = document.createElement('span')
const textHidden =
  'Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера, ' +
  'что подтверждает большое количество постоянных клиентов. ' +
  'Мы гордимся тем, что к нам обращаются по рекомендациям и, ' +
  'в свою очередь, советуют нас родным и близким.'

function buttonContent(text, btn, degrees) {
  btn.lastElementChild.textContent = text
  btn.firstElementChild.style.transform = `rotate(${degrees}deg)`
}

buttonShowText.addEventListener('click', function () {
  if (
    textDescription.children.length &&
    textDescription.lastElementChild.matches('.hidden-text')
  ) {
    textDescription.removeChild(span)
    buttonContent('Читать далее', buttonShowText, 0)
  } else {
    buttonContent('Скрыть', buttonShowText, 180)
    span.className = 'hidden-text'
    span.innerText = textHidden
    textDescription.appendChild(span)
  }
})

const buttonShowCards = document.querySelector('.btn--read').cloneNode(true)
document
  .querySelector('.main__description-brands-swiper')
  .appendChild(buttonShowCards)
buttonShowCards.className += ' btn--read-cards'
buttonShowCards.lastElementChild.textContent = 'Показать все'
buttonShowCards.addEventListener('click', function () {
  const cardsItem = document.querySelectorAll('.cards__item')
  const lastElement = document.querySelector('.cards').lastElementChild
  if (lastElement.matches('.cards__show-md')) {
    for (let i = 0; i < cardsItem.length; i++) {
      cardsItem[i].classList.remove('cards__show-md')
    }
    buttonContent('Показать все', buttonShowCards, 0)
  } else {
    buttonContent('Скрыть', buttonShowCards, 180)
    for (let i = 0; i < cardsItem.length; i++) {
      cardsItem[i].className += ' cards__show-md'
    }
  }
})

const techCards = document
  .querySelector('.main__description-brands')
  .cloneNode(true)
document.querySelector('.main__description').appendChild(techCards)

const mainDescription = document.querySelector('.main__description')
// console.log(mainDescription)
const mainDescriptionTechCards = mainDescription.children[3]
mainDescriptionTechCards.className += ' .main__description-brands--tech'
// console.log(mainDescriptionTechCards)
const mainDescriptionTechCardsSwiper =
  mainDescriptionTechCards.querySelector('.swiper')
mainDescriptionTechCardsSwiper.classList.remove('swiper--brands')
mainDescriptionTechCardsSwiper.className += ' swiper--tech'
// console.log(mainDescriptionTechCards.children[1].children[0])
