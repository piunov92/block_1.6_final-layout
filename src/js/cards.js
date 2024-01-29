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
repairCards.children.item(0).textContent = 'Ремонт различных видов техники'
const repairCardsItem = repairCards.querySelector('.cards__item')
repairCardsItem.className += ' cards__item--repair'
repairCardsItem.children.item(0).remove()

const spanElement = document.createElement('span')
spanElement.textContent = 'Ремонт ноутбуков'
repairCardsItem.prepend(spanElement)
repairCardsItem.children.item(0).className = 'cards__brand cards__text'
repairCardsItem.children.item(1).className += ' cards__btn--repair'
console.log(repairCardsItem.children)
