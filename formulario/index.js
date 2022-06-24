/*Abrir Modal*/
document.getElementById('modalbtn').addEventListener('click', () => {
  document.getElementById('modal').classList.add('open')
})
/*Cerrar Modal*/
document.getElementById('cerrar').addEventListener('click', () => {
  document.getElementById('modal').classList.remove('open')
})

document.getElementById('formulario').addEventListener('submit', (e) => {
  e.preventDefault()

  const name = document.getElementById('name')
  const email = document.getElementById('email')
  const phone = document.getElementById('phone')
  /*Expresiones regulares de validacion*/
  const expName = /^[a-zA-Z]{3,100}$/gi
  const expEmail = /(\w+)\@(\w+)\.(\w+)$/gi
  const expPhone = /^\d{9}$/
  let allValid = true

  if (expName.test(name.value)) {
    document.getElementById('invalidName').classList.remove('visible')
  } else {
    document.getElementById('invalidName').classList.add('visible')
    allValid = false
  }

  if (expEmail.test(email.value)) {
    document.getElementById('invalidEmail').classList.remove('visible')
  } else {
    document.getElementById('invalidEmail').classList.add('visible')
    allValid = false
  }

  if (expPhone.test(phone.value)) {
    document.getElementById('invalidPhone').classList.remove('visible')
  } else {
    document.getElementById('invalidPhone').classList.add('visible')
    allValid = false
  }

  if (allValid) {
    const obj = {
      name: name.value,
      email: email.value,
      phone: phone.value,
    }
    postUser(obj)
      .then((result) => {
        document.getElementById('postMsg').classList.add('visible')
        document.getElementById('modal').classList.remove('open')
        console.log(result)
      })
      .catch((e) => Promise.reject('Error', e))
  }
})

const postUser = (obj) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(obj)
    }, 1500)
  })
}
