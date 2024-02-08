const modalAll = document.querySelectorAll('.modal')
const backdrop = document.querySelectorAll('.container').item(0).children[0]
const modalRepairOpenButton = document.querySelectorAll('.btn-repair')
const modalStatusOpenButton = document.querySelectorAll('.btn-status')
const modalBurgerOpenButton = document.getElementById('show-dialog')
const modalAllClose = document.querySelectorAll('.close-bt')
const largeScreen = window.matchMedia('(min-width: 1440px)')
const mainTitle = document.querySelectorAll('.main__title')[0].children
const dialogNavModals = document.querySelectorAll('.dialog__title')
const form = document.querySelectorAll('.dialog__form')[0]

const submitFormButton = document
  .querySelectorAll('.table__button')[0]
  .cloneNode(true)

submitFormButton.className += ' dialog__form-button'
submitFormButton.children[0].textContent = 'Отправить'

modalAll[1].children[0].appendChild(submitFormButton)

for (let i = 0; i < mainTitle.length - (mainTitle.length - 2); i++) {
  let clone = mainTitle[i].cloneNode(true)
  dialogNavModals[0].appendChild(clone)
}

dialogNavModals[0].children[1].textContent = 'Обратная связь'

function deleteModalESC(event) {
  if (event.key === 'Escape') {
    backdrop.style.display = 'none'
    document.body.style.overflow = 'initial'
    modalAll.forEach((modal) => {
      modal.style.display = 'none'
    })
  }
}
function closeEsc() {
  document.addEventListener('keydown', deleteModalESC.bind(this), {
    once: true
  })
}

function modalRightButtons(button) {
  button.forEach((button) => {
    button.addEventListener('click', function () {
      if (button.matches('.btn-status')) {
        dialogNavModals[0].children[1].textContent = 'Заказать звонок'
        if (form.children.length > 1) {
          form.children[0].style.display = 'none'
          form.children[2].style.display = 'none'
          form.children[3].style.display = 'none'
        }
      } else if (button.matches('.btn-repair')) {
        dialogNavModals[0].children[1].textContent = 'Обратная связь'
        form.children[0].style.display = 'block'
        form.children[2].style.display = 'block'
        form.children[3].style.display = 'block'
      }
      backdrop.style.display = 'flex'
      document.body.style.overflow = 'hidden'
      modalAll[1].style.display = 'flex'
      closeEsc()
      button.blur()
    })
  })
}

modalRightButtons(modalRepairOpenButton)
modalRightButtons(modalStatusOpenButton)

modalBurgerOpenButton.addEventListener('click', () => {
  modalAll[0].style.display = 'block'
  document.body.style.overflow = 'hidden'
  backdrop.style.display = 'flex'
  closeEsc()
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
      document.body.style.overflow = 'initial'
    }
  } else if (e.target === backdrop) {
    modalAll.forEach((modal) => {
      modal.style.display = 'none'
    })
    document.body.style.overflow = 'initial'
    backdrop.style.display = 'none'
  }
})
