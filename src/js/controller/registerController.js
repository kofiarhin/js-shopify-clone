const { renderLoader } = require("../lib/helper");
const User = require("../model/user");
const md5 = require("md5");
const _ = require("lodash");
const { validateAll } = require("indicative/validator");
const RegisterView = require("../views/registerView");


// create user
const createUser = async function (data) {


    try {

        const user = new User();

        // hash password
        const hash = md5(data.password);
        data.password = hash;

        await user.create(data);
        sessionStorage.setItem("success", `you have successfully register as ${data.email}`);
        window.location.href = "login.html?success=true"

    } catch (error) {

        console.log(error);
    }
}


//format errors
const formatErrors = (errors) => {

    let formattedErrors = {}


    errors.forEach(error => {

        formattedErrors[error.field] = error.message;

    });


    if (!_.isEmpty(formattedErrors)) {

        return formattedErrors;
    }

}



// validate data
const validateData = async function (data) {

    const rules = {
        firstname: "required|min:4|max:50",
        lastname: "required|min:4|max:50",
        password: "required",
        email: "required|email",
        gender: "required"
    };


    const messages = {

        "email.email": "invalid email format",
        "required": (field) => `${field} is required`
    }



    try {
        //   validate data
        await validateAll(data, rules, messages);

    } catch (errors) {


        const formatted = formatErrors(errors);

        if (!_.isEmpty(formatted)) {

            return formatted;
        }


    }

}



// submit controller
const submitControler = async function (e) {

    e.preventDefault();

    // get  user data
    const firstname = document.querySelector(".firstname").value.trim();
    const lastname = document.querySelector(".lastname").value.trim();
    const email = document.querySelector(".email").value.trim();
    const password = document.querySelector(".password").value.trim();
    const gender = document.querySelector(".gender").value.trim();



    // console.log(firstname, lastname, email, password, gender)
    // clear errors
    RegisterView.clearErrors();

    // let data = { firstname, lastname, email, password, gender }

    const data = {
        firstname: "admin",
        lastname: "admin",
        email: "admin@gmail.com",
        password: "password",
        gender: "male"
    }
    // do some validation works
    const errors = await validateData(data);

    if (!_.isEmpty(errors)) {

        RegisterView.renderErrors(errors)
        return;
    }

    // craete user
    await createUser(data);

}

// register controller
module.exports = function () {

    // renderLoader();

    const form = document.querySelector("form");
    form.addEventListener("submit", submitControler);
}