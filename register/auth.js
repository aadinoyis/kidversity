
const createUser = () => {
  const user_fullname = document.querySelector('#full_name').value
  const user_email = document.querySelector('#email_address').value
  const user_phone = document.querySelector('#phone_number').value
  const user_nationality = document.querySelector('#nationality').value
  const user_gender = document.querySelector('#gender').value
  const user_password = document.querySelector('#password').value
  
  console.log(user_fullname)

  if (user_fullname != '' && user_email != '' && user_phone != '' && user_nationality != '' && user_gender != '' && user_password != '') {
    localStorage.setItem('fullname', user_fullname);
    localStorage.setItem('email', user_email)
    localStorage.setItem('phone', user_phone)
    localStorage.setItem('nationality', user_nationality)
    localStorage.setItem('gender', user_gender)
    localStorage.setItem('password', user_password)
    window.location.replace('/dashboard')
  } else {
    alert('incorrect credentials')
  }
}

const authUser = (email, pass) => {
  const authEmail = localStorage.getItem('email')
  const authPass = localStorage.getItem('password')
  
  authEmail == email && authPass == pass ? window.location.replace('/dashboard') : alert('incorrect credentials')
}
