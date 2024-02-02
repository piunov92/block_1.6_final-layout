const formButton = document.querySelectorAll('.dialog__form-button')[0]
const form = document.querySelectorAll('.dialog__form')[0]
form.action = 'javascript:alert("Ваша заявка отправлена!")'
form.method = 'POST'

formButton.addEventListener('click', () => {
  form.submit()
})
