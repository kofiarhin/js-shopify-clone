const { renderLoader, genToken } = require("../lib/helper");
const User = require("../model/user");
const _ = require("lodash");
const { renderInfo } = require("../views/loginView");
const md5 = require("md5");


// check success
function checkSuccess() {

    const success = sessionStorage.getItem("success");


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


// submit controller

async function SubmitController(e) {
    e.preventDefault();

    const email = document.querySelector(".email").value;
    const password = document.querySelector(".password").value;


    const data = {
        email,
        password
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