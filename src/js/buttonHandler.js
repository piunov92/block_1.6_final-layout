const btnRead = document.getElementsByClassName('btn--read')
let textDescription = document.getElementsByClassName('main__description-text')
let text = textDescription.item(0).children
let hiddenString =
  'Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким.'
let spanElement = document.createElement('span')
const selectorText = '.hidden-text'
// const selectorCards = '.hidden-cards'

let btnReadContent = function (
  btnClassName,
  indexTarget,
  childrenItems,
  indexChildren,
  matchesSelector,
  selectorElement,
  content
) {
  btnClassName[indexTarget].addEventListener('click', function () {
    if (
      childrenItems[indexChildren].children.length &&
      childrenItems[indexChildren].lastElementChild.matches(matchesSelector)
    ) {
      childrenItems[indexChildren].removeChild(selectorElement)
      btnClassName[indexTarget].lastElementChild.textContent = 'Читать далее'
      btnClassName[indexTarget].firstElementChild.style.transform =
        'rotate(0deg)'
    } else {
      btnClassName[indexTarget].lastElementChild.textContent = 'Скрыть'
      btnClassName[indexTarget].firstElementChild.style.transform =
        'rotate(180deg)'
      selectorElement.className = 'hidden-text'
      selectorElement.innerText = content
      childrenItems[indexChildren].appendChild(selectorElement)
    }
  })
}

const cloneBtnRead = document.querySelector('.btn--read').cloneNode(true)
document
  .querySelector('.main__description-brands-swiper')
  .appendChild(cloneBtnRead)

btnReadContent(btnRead, 0, text, 0, selectorText, spanElement, hiddenString)

// btnRead[0].addEventListener('click', function () {
//   if (
//     text[0].children.length &&
//     text[0].lastElementChild.matches(selectorText)
//   ) {
//     text[0].removeChild(spanElement)
//     btnRead[0].lastElementChild.textContent = 'Читать далее'
//     btnRead[0].firstElementChild.style.transform = 'rotate(0deg)'
//   } else {
//     btnRead[0].lastElementChild.textContent = 'Скрыть'
//     btnRead[0].firstElementChild.style.transform = 'rotate(180deg)'
//     spanElement.className = 'hidden-text'
//     spanElement.innerText = hiddenString
//     text[0].appendChild(spanElement)
//   }
// })
