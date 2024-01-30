const dialog = document.querySelector('.modal')
const showDialog = document.querySelector('#show-dialog')
const closeDialog = document.querySelector('#close-dialog')

showDialog.addEventListener('click', () => {
  dialog.showModal()
})

closeDialog.addEventListener('click', () => {
  dialog.close()
})
