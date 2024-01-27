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

const cloneBtnRead = document.querySelector('.btn--read').cloneNode(true)
document
  .querySelector('.main__description-brands-swiper')
  .appendChild(cloneBtnRead)
cloneBtnRead.className += ' btn--read-cards'

let buttonShowCards = cloneBtnRead
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
