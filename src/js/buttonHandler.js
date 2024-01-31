const buttonShowText = document.querySelector('.btn--read')
const textDescription = document.querySelector('.text')
const pElement = document.createElement('p')
let textHidden =
  'Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера, ' +
  'что подтверждает большое количество постоянных клиентов. ' +
  'Мы гордимся тем, что к нам обращаются по рекомендациям и, ' +
  'в свою очередь, советуют нас родным и близким.'
const loremIpsum =
  'Lorem ipsum dolor sit amet. Quo voluptatem voluptatem et earum adipisci vel modi' +
  'quisquam sed maxime placeat quo doloremque voluptate eos odio' +
  'dolore nam dolor quas. Qui voluptas corporis qui dicta omnis ut laborum' +
  'voluptatem est vitae obcaecati. Sit omnis voluptates et odit autem aut adipisci quia ut' +
  'eveniet fugiat. Ut quod totam eos repudiandae enim ea voluptas quaerat est laborum doloremque.'

const header = document.querySelector('.header')
const largeScreen = window.matchMedia('(min-width: 1440px)')
let textLgScreen = textHidden

if (largeScreen.matches) {
  textHidden = loremIpsum
  header.style.display = 'none'
}

largeScreen.addEventListener('change', function (event) {
  if (event.matches) {
    header.style.display = 'none'
    textHidden = loremIpsum
  } else {
    header.style.display = 'flex'
    textHidden = textLgScreen
  }
})
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
    textDescription.lastElementChild.matches('.text__about--hidden')
  ) {
    textDescription.removeChild(pElement)
    buttonContent('Читать далее', buttonShowText, 0)
  } else {
    buttonContent('Скрыть', buttonShowText, 180)
    pElement.className = 'text__about--hidden'
    pElement.innerText = textHidden + loremIpsum
    textDescription.appendChild(pElement)
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
