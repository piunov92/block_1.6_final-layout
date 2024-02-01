//все модалки
const modalAll = document.querySelectorAll('.modal')
//blur слой
const backdrop = document.querySelectorAll('.container').item(0).children[0]
//получаем все кнопки открытия модалок (их всешо две на странице, кнопки repair)
const modalRepairOpenButton = document.querySelectorAll('.btn-repair')
//кнопка левого модального окнв
const modalBurgerOpenButton = document.getElementById('show-dialog')
//кнопки закрытия модалок
const modalAllClose = document.querySelectorAll('.close-bt')
//экран
const largeScreen = window.matchMedia('(min-width: 1440px)')
//получаем детей main title
const mainTitle = document.querySelectorAll('.main__title')[0].children

//заголовок правого модального окна **********************
const dialogNavModals = document.querySelectorAll('.dialog__title')
console.log(dialogNavModals[0])

for (let i = 0; i < mainTitle.length - (mainTitle.length - 2); i++) {
  let clone = mainTitle[i].cloneNode(true)
  dialogNavModals[0].appendChild(clone)
}

dialogNavModals[0].children[1].textContent = 'Обратная связь'
//****************************

//показать модалку repair сразу от двух кнопок
modalRepairOpenButton.forEach((button) => {
  button.addEventListener('click', function () {
    backdrop.style.display = 'flex'
    modalAll[1].style.display = 'flex'
  })
})

modalBurgerOpenButton.addEventListener('click', () => {
  modalAll[0].style.display = 'block'
  document.body.style.overflow = 'hidden'
  backdrop.style.display = 'flex'
})

modalAllClose.forEach((button) => {
  button.addEventListener('click', function () {
    backdrop.style.display = 'none'
    document.body.style.overflow = 'initial'
    if (largeScreen.matches) {
      modalAll[1].style.display = 'none'
    } else {
      modalAll.forEach((modal) => {
        modal.style.display = 'none'
      })
    }
  })
})

largeScreen.addEventListener('change', function (event) {
  backdrop.style.display = 'none'
  if (event.matches) {
    modalAll[0].style.display = 'block'
  } else {
    modalAll[0].style.display = 'none'
  }
})

window.addEventListener('click', function (e) {
  if (largeScreen.matches) {
    if (e.target === backdrop) {
      modalAll[1].style.display = 'none'
      backdrop.style.display = 'none'
    }
  } else if (e.target === backdrop) {
    modalAll.forEach((modal) => {
      modal.style.display = 'none'
    })
    backdrop.style.display = 'none'
  }
})
