const { renderLoader, genToken } = require("../lib/helper");
const User = require("../model/user");
const _ = require("lodash");
const { renderInfo } = require("../views/loginView");
const md5 = require("md5");
const { validateAll } = require("indicative/validator");
const LoginView = require("../views/loginView");

// check success
function checkSuccess() {

    const success = sessionStorage.getItem("success");

    // if there is a sesssion display session inf and delete session from session storage
    if (success) {

        renderInfo(success);
        sessionStorage.removeItem("success")
    }
}


// login user
async function loginUser(data) {

    const user = new User();

    try {

        const userData = await user.login(data);

        if (!_.isEmpty(userData)) {

            const { password: userPassword } = userData;

            if (md5(data.password) == userPassword) {

                // generate token
                const token = genToken(userData);
                // set session token
                sessionStorage.setItem("token", token);

                // redirect user  to cart
                window.location.href = "shop.html"

            } else {


                const btn = document.querySelector("button");
                btn.textContent = "Submit";
                renderInfo("Invalid username/password combination")
            }
        }


    } catch (error) {

        console.log(error);
    }
}



function handleErrors(errors) {

    let result = {};

    errors.forEach(error => {

        result[error.field] = error.message;
    });

    if (!_.isEmpty(result)) {

        return result;
    }
}


// validate data
async function validateData(data) {


    const rules = {
        email: "required|email",
        password: "required"
    };

    const messages = {

        required: (field) => `${field} id required`,
        "email.email": "invalid eamil format",

    };

    try {
        await validateAll(data, rules, messages)
    } catch (e) {

        const errors = handleErrors(e)

        if (!_.isEmpty(errors)) {
            return errors;
        }
    }

}


// submit controller

async function SubmitController(e) {
    e.preventDefault();


    // clear errors
    LoginView.clearErrors();

    const email = document.querySelector(".email").value;
    const password = document.querySelector(".password").value;


    const data = {
        email,
        password
    }

    const errors = await validateData(data);

    if (!_.isEmpty(errors)) {

        // return console.log("display errors")
        return LoginView.renderErrors(errors)
    }

    const user = new User();

    const userData = await user.getUser("email", email);


    if (!_.isEmpty(userData)) {

        const { password } = userData;

        if (password === md5(data.password)) {

            const { password, ...rest } = userData;

            const token = genToken(rest);

            sessionStorage.setItem('token', token);

            window.location.href = "shop.html";
        }
    }


}



// login controller
module.exports = function () {

    // check if there is success data in sesssion
    // displays success content and delete success session
    checkSuccess();

    renderLoader();

    const form = document.querySelector("form");
    const btn = document.querySelector("button");

    form.addEventListener("submit", SubmitController);
}