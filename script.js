// access input elements
const firstName = document.querySelector('.first-name')
const lastName = document.querySelector('.last-name')
const email = document.querySelector('.email')
const phoneNumber = document.querySelector('.phone-number')
const password = document.querySelector('.password')
const confirm = document.querySelector('.confirm')

const nameValidation = /[^A-Z-]/i

// access error elements
const firstNameError = document.querySelector('.error-message:nth-of-type(1)')

// add event listeners to each input
firstName.addEventListener('input', e => {
    checkFirstName(e)
})

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
