const form = document.querySelector('form')

const errorMsg = document.getElementById('error-msg')
const errorMsgMobile = document.getElementById('error-msg-mobile')

form.addEventListener('submit', e => {
    e.preventDefault()

    const emailInput = form['email']
    const emailVal = form['email'].value

    if(emailVal === '') {
        errorMsg.innerText = 'Email cannot be empty'
        errorMsgMobile.innerText = 'Email cannot be empty'
        errorMsg.classList.add('error')
        errorMsgMobile.classList.add('error')
        emailInput.classList.add('error')
    } else if(!isValid(emailVal)) {
        errorMsg.innerText = 'Email Address invalid'
        errorMsgMobile.innerText = 'Email Address invalid'
        errorMsg.classList.add('error')
        errorMsgMobile.classList.add('error')
        emailInput.classList.add('error')
    } else {
        errorMsg.classList.remove('error')
        errorMsgMobile.classList.remove('error')
        emailInput.classList.remove('error')
    }
})

function isValid(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}