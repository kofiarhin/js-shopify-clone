
const renderInfo = function (message) {

    const element = document.querySelector(".info");
    element.classList.add('success');
    element.textContent = message;

}


const renderErrors = function (errors) {

    const errArr = Object.keys(errors);

    errArr.forEach(err => {

        const field = document.querySelector(`.error-${err}`);

        field.textContent = errors[err];
    });

}


// clear all errors
const clearErrors = function () {

    const errors = document.querySelectorAll(".error");

    errors.forEach(error => error.textContent = "")
}

module.exports = {
    renderInfo,
    renderErrors,
    clearErrors
}