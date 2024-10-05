const user = localStorage.getItem('fullname')

  // const authEmail = localStorage.getItem(email)
  // const authPass = localStorage.getItem(password)
  
user ? window.location.replace('/dashboard') : null;