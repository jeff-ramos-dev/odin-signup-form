// access input elements
const firstName = document.querySelector('.first-name')
const lastName = document.querySelector('.last-name')
const email = document.querySelector('.email')
const phoneNumber = document.querySelector('.phone-number')
const password = document.querySelector('.password')
const passConfirm = document.querySelector('.confirm')

const nameValidation = /[^A-Z-]/i
const emailValidation = /\w*@\w*[.]\w*/

// access error elements
const firstNameError = document.querySelector('.first-name-error')
const lastNameError = document.querySelector('.last-name-error')
const emailError = document.querySelector('.email-error')

// add event listeners to each input
firstName.addEventListener('input', e => checkFirstName(e))

lastName.addEventListener('input', e => checkLastName(e))

email.addEventListener('input', e => checkEmail(e))

phoneNumber.addEventListener('input', e => checkPhone(e))

password.addEventListener('input', e => checkPassword(e))

passConfirm.addEventListener('input', e => checkConfirm(e))

// write functions to determine the error message to display
function checkFirstName(e) {
    if (firstNameError.textContent) {
        firstNameError.textContent = ""
    }

    if (nameValidation.test(e.target.value) && e.target.value.length > 0) {
        firstNameError.textContent = "please use alphabet characters only"
        firstName.classList.remove("validated")
        firstName.classList.add("error")
    } else if (firstName.classList.contains("error")) {
       firstName.classList.remove("error") 
       firstName.classList.add("validated")
       firstNameError.textContent = ""
    }

    if (e.target.value.length > 24) {
        e.target.value = e.target.value.slice(0, -1)
        firstNameError.textContent = "Name limit is 24 characters"
    } else if (firstName.classList.contains('error') &&
    !nameValidation.test(e.target.value) ||
    e.target.value.length === 0) {
        firstName.classList.remove('error')
        firstNameError.textContent = ""

        if (!firstName.classList.contains("validated"))
        firstName.classList.add("validated")
    }

    if (!firstName.classList.contains("error")) {
        firstName.classList.add("validated")
    }

    if (firstName.classList.contains("validated") && e.target.value.length === 0) {
        firstName.classList.remove("validated")
    }
}

function checkLastName(e) {
    if (lastNameError.textContent) {
        lastNameError.textContent = ""
    }

    if (nameValidation.test(e.target.value) && e.target.value.length > 0) {
        lastNameError.textContent = "please use alphabet characters only"
        lastName.classList.remove("validated")
        lastName.classList.add("error")
    } else if (lastName.classList.contains("error")) {
       lastName.classList.remove("error") 
       lastName.classList.add("validated")
       lastNameError.textContent = ""
    }

    if (e.target.value.length > 24) {
        e.target.value = e.target.value.slice(0, -1)
        lastNameError.textContent = "Name limit is 24 characters"
    } else if (lastName.classList.contains('error') &&
    !nameValidation.test(e.target.value) ||
    e.target.value.length === 0) {
        lastName.classList.remove('error')
        lastNameError.textContent = ""

        if (!lastName.classList.contains("validated"))
        lastName.classList.add("validated")
    }

    if (!lastName.classList.contains("error")) {
        lastName.classList.add("validated")
    }

    if (lastName.classList.contains("validated") && e.target.value.length === 0) {
        lastName.classList.remove("validated")
    }
}

function checkEmail(e) {
    if (e.target.value.length > 0) {
        if (!emailValidation.test(e.target.value)) {
            emailError.textContent = "Please enter a valid email"
            email.classList.remove("validated")
            email.classList.add("error")
        } else {
            email.classList.remove("error")
            emailError.textContent = ""
            email.classList.add("validated")
        }
    }
}