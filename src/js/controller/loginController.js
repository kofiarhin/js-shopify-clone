const { renderLoader } = require("../lib/helper");
const User = require("../model/user");
const _ = require("lodash");


async function loginUser(data) {

    const user = new User();

    try {

        const userData = await user.login(data);

        if (!_.isEmpty(userData)) {

            const { password: userPassword } = userData;

            if (data.password == userPassword) {

                console.log("password match");
            } else {

                console.log("invalid email/password combination")
            }
        }


    } catch (error) {

        console.log(error);
    }
}

module.exports = function () {

    // renderLoader();

    const form = document.querySelector("form");

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        loginUser({ email: "admin@gmail.com", password: "password" })


    });
}