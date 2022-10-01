const mailClick = document.querySelector('.mailClick'),
  form = document.querySelector('#form')
mailClick.addEventListener('click', (e) => {
  e.preventDefault()
  form.classList.toggle('formShow')
})
