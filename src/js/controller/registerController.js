const { renderLoader } = require("../lib/helper");
const User = require("../model/user");
const md5 = require("md5");


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

const submitControler = async function (e) {

    e.preventDefault();

    const data = {
        name: 'admin',
        email: "admin@gmail.com",
        password: 'password',
        createdOn: Date.now()
    };

    await createUser(data);


}

// register controller
module.exports = function () {

    // renderLoader();

    const form = document.querySelector("form");

    form.addEventListener("submit", submitControler);
}