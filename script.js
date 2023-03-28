// access input elements
const firstName = document.querySelector('.first-name')
const lastName = document.querySelector('.last-name')
const email = document.querySelector('.email')
const phoneNumber = document.querySelector('.phone-number')
const password = document.querySelector('.password')
const passConfirm = document.querySelector('.confirm')

const nameValidation = /[^A-Z-]/i
const emailValidation = /\w+@\w+[.]\w{3}/

// access error elements
const firstNameError = document.querySelector('.first-name-error')
const lastNameError = document.querySelector('.last-name-error')
const emailError = document.querySelector('.email-error')
const phoneError = document.querySelector('.phone-error')
const passwordError = document.querySelector('.password-error')
const confirmError = document.querySelector('.confirm-error')

// add event listeners to each input
firstName.addEventListener('input', e => checkFirstName(e))

lastName.addEventListener('input', e => checkLastName(e))

email.addEventListener('input', () => checkEmail())

phoneNumber.addEventListener('input', () => checkPhone())

password.addEventListener('input', () => checkPassword())

passConfirm.addEventListener('input', () => checkPassword())

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

function checkEmail() {
    if (email.value.length > 0) {
        if (!emailValidation.test(email.value)) {
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

function checkPhone() {
    if (phoneNumber.value.length > 0) {
        if (phoneNumber.validity.valid) {
            phoneNumber.classList.remove("error")
            phoneNumber.classList.add("validated")
            phoneError.textContent = ""
        } else {
            phoneNumber.classList.remove("validated")
            phoneNumber.classList.add("error")
            phoneError.textContent = "Please enter a valid phone number"
        }
    } else {
        phoneNumber.classList.remove("validated")
    }
}

function checkPassword() {
    if (password.value.length > 0) {
        if (passConfirm.value === password.value) {
            passConfirm.classList.remove("error")
            passConfirm.classList.add("validated")
            confirmError.textContent = ""
        } else {
            passConfirm.classList.remove("validated")
            passConfirm.classList.add("error")
            confirmError.textContent = "Passwords do not match"
        }

        if (password.value.length < 8) {
            password.classList.remove("validated")
            password.classList.add("error")
            passwordError.textContent = "Password must be at least 8 characters"
        } else {
            password.classList.remove("error")
            password.classList.add("validated")
            passwordError.textContent = ""
        }
    } else {
        password.classList.remove("validated")
    }
}