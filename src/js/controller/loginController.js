const { renderLoader, genToken } = require("../lib/helper");
const User = require("../model/user");
const _ = require("lodash");
const { renderInfo } = require("../views/loginView");
const md5 = require("md5");



// check success
function checkSuccess() {

    const success = sessionStorage.getItem("success");

    console.log(sessionStorage);

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

                console.log("password match. redirect user to dashboard");

                // generate token
                const token = genToken(data);
                // set session token
                sessionStorage.setItem("token", token);

                // redirect user  to cart
                window.location.href = "cart.html"

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




// login controller
module.exports = function () {


    checkSuccess();

    // renderLoader();

    const form = document.querySelector("form");
    const btn = document.querySelector("button");
    form.addEventListener("submit", (e) => {

        e.preventDefault();

        btn.textContent = "Loading......."

        loginUser({ email: "admin@gmail.com", password: "password" })


    });
}