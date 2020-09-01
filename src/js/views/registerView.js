// register view

const clearErrors = function () {

    const errors = document.querySelectorAll(".error");

    errors.forEach(error => {

        error.textContent = "";
    });

}

const renderErrors = function (errors) {

    const elements = document.querySelectorAll(".error");

    const errArr = Object.keys(errors);

    errArr.forEach(err => {

        const element = document.querySelector(`.error-${err}`);
        element.textContent = errors[err];
    });
}


module.exports = {

    renderErrors,
    clearErrors
}