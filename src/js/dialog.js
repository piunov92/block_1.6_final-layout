const modal = document.getElementsByClassName('modal')[0]
const backdrop = document.querySelectorAll('.container').item(0).children[0]
const showDialog = document.getElementById('show-dialog')
const closeDialog = document.getElementById('close-dialog')

showDialog.addEventListener('click', () => {
  modal.style.display = 'block'
  document.body.style.overflow = 'hidden'
  backdrop.style.display = 'flex'
  /*
  //только для тега <dialog>
  modal.showModal()
  */
})

closeDialog.addEventListener('click', () => {
  modal.style.display = 'none'
  backdrop.style.display = 'none'
  document.body.style.overflow = 'initial'
  /*
  //только для тега <dialog>
  modal.close()
  */
})

const largeScreen = window.matchMedia('(min-width: 1440px)')
largeScreen.addEventListener('change', function (event) {
  backdrop.style.display = 'none'
  if (event.matches) {
    modal.style.display = 'block'
  } else {
    modal.style.display = 'none'
  }
})

window.addEventListener('click', function (e) {
  if (e.target === backdrop) {
    modal.style.display = 'none'
    backdrop.style.display = 'none'
  }
})
