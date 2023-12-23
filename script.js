const pass = document.querySelector('#password')
const conPass = document.querySelector('#conpassword')
const button = document.querySelector('.btn')
const span = document.querySelector('.msg')

button.addEventListener('click', checkPassword)

button.addEventListener('click', () => {
    console.log(pass.value)
    console.log(conPass.value)
    console.log(pass.value == conPass.value)
})

function checkPassword(){
    if(!(pass.value === conPass.value)) {
        button.removeAttribute('type', 'submit')
        button.setAttribute('type', 'button')
        conPass.setAttribute('class', 'error')
        pass.setAttribute('class', 'error')
        span.textContent = 'The password does not match'

    } else {
        button.setAttribute('type', 'submit')
        conPass.removeAttribute('class', 'error')
        pass.removeAttribute('class', 'error')
        console.log('nahse')
    }
}

