
const getUser = () => {
  const fullname = localStorage.getItem('fullname')
  document.querySelector('.user').innerHTML = fullname
}

window.addEventListener('load', e => {
  e.preventDefault()
  getUser()
})