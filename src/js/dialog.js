const dialog = document.querySelector('.modal')
const showDialog = document.querySelector('#show-dialog')
const closeDialog = document.querySelector('#close-dialog')

showDialog.addEventListener('click', () => {
  document.body.style.overflow = 'hidden'
  dialog.showModal()
})

closeDialog.addEventListener('click', () => {
  document.body.style.overflow = 'initial'
  dialog.close()
})

dialog.addEventListener('click', closeOnBackDropClick)

function closeOnBackDropClick({ currentTarget, target }) {
  const dialogElement = currentTarget
  const isClickedOnBackDrop = target === dialogElement
  if (isClickedOnBackDrop) {
    dialogElement.close()
  }
}
