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

//Ф-я копирования кнопок свайпов
function copyButton(btnSelector, toElementSelector, addSelectors) {
  const element = document.querySelector(`.${btnSelector}`).cloneNode(true)
  document.querySelector(`.${toElementSelector}`).appendChild(element)
  addSelectors.forEach((selector) => {
    element.className += ` ${selector}`
  })
  element.lastElementChild.textContent = 'Показать все'
  return element
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

const buttonShowCards = copyButton(
  'btn--read',
  'main__description-brands-swiper',
  ['btn--read-cards']
)

const buttonShowCardsRepair = copyButton(
  'btn--read',
  'main__description-brands-swiper--repair',
  ['btn--read-cards', 'btn--read-repair']
)

buttonShowCards.addEventListener('click', function () {
  const cardsItem = document.querySelectorAll('.cards__hidden')
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

buttonShowCardsRepair.addEventListener('click', function () {
  const cardsItem = document.querySelectorAll('.cards__hidden--repair')
  const lastElement = document.querySelector('.cards--repair').lastElementChild
  if (lastElement.matches('.cards__show-md')) {
    for (let i = 0; i < cardsItem.length; i++) {
      cardsItem[i].classList.remove('cards__show-md')
    }
    buttonContent('Показать все', buttonShowCardsRepair, 0)
  } else {
    buttonContent('Скрыть', buttonShowCardsRepair, 180)
    for (let i = 0; i < cardsItem.length; i++) {
      cardsItem[i].className += ' cards__show-md'
    }
  }
})
