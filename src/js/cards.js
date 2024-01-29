const cloneCards = document
  .querySelector('.main__description-brands')
  .cloneNode(true)
document.querySelector('.main__description').appendChild(cloneCards)

const mainDescription = document.querySelector('.main__description')
const mainDescriptionRepairCards = mainDescription.children
mainDescriptionRepairCards[3].className +=
  ' main__description-brands--repair-cards'

const repairCards = document.querySelector(
  '.main__description-brands--repair-cards'
)

repairCards.children.item(1).children.item(0).children.item(0).className +=
  ' cards--repair'

repairCards.children.item(1).className +=
  ' main__description-brands-swiper--repair'

repairCards.children.item(1).lastChild.remove()

// console.log(repairCards)

repairCards.children.item(0).textContent = 'Ремонт различных видов техники'

const repairCardsItems = repairCards.querySelectorAll('.cards__item')

const itemText = [
  'Ремонт ноутбуков',
  'Ремонт планшетов',
  'Ремонт ПК',
  'Ремонт мониторов',
  'Ремонт телевизоров',
  'Ремонт аудио-систем'
]

//Удаляем всю залупу в repairCards

for (let i = repairCardsItems.length - 1; i >= itemText.length; i--) {
  // console.log(i)
  repairCardsItems[i].remove()
}

// console.log(repairCards.querySelectorAll('.cards__item'))

let index = 0
repairCardsItems.forEach((item) => {
  const spanElement = document.createElement('span')
  item.className += ' cards__item--repair'
  item.children.item(0).remove()
  if (index <= itemText.length) {
    if (index >= 3) {
      item.className += ' cards__hidden--repair'
    }
    spanElement.textContent = itemText[index++]
  }
  item.prepend(spanElement)
  item.children.item(0).className = 'cards__brand cards__text'
  item.children.item(1).className += ' cards__btn--repair'
  item.classList.remove('cards__hidden')
})
