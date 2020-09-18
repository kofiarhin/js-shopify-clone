// register view

const clearErrors = function () {

    const errors = document.querySelectorAll(".error");

    errors.forEach(error => {
        error.classList.remove("active")
        error.textContent = "";
    });

}

const renderErrors = function (errors) {



    const elements = document.querySelectorAll(".error");

    const errArr = Object.keys(errors);

    errArr.forEach(err => {
        const element = document.querySelector(`.error-${err}`);
        element.classList.add("active")
        element.textContent = errors[err];
    });
}


module.exports = {

    renderErrors,
    clearErrors
}