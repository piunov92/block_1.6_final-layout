const btnRead = document.getElementsByClassName('btn--read')
let textDescription = document.getElementsByClassName('main__description-text')
let text = textDescription.item(0).children
let hiddenString =
  'Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким.'
let spanElement = document.createElement('span')

btnRead[0].addEventListener('click', function () {
  const selector = '.hidden-text'
  if (text[0].children.length && text[0].lastElementChild.matches(selector)) {
    text[0].removeChild(spanElement)
    btnRead[0].lastElementChild.textContent = 'Читать далее'
    btnRead[0].firstElementChild.style.transform = 'rotate(0deg)'
  } else {
    btnRead[0].lastElementChild.textContent = 'Скрыть'
    btnRead[0].firstElementChild.style.transform = 'rotate(180deg)'
    spanElement.className = 'hidden-text'
    spanElement.innerText = hiddenString
    text[0].appendChild(spanElement)
  }
})
