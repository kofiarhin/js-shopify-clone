const { renderLoader } = require("../lib/helper");
const User = require("../model/user");
module.exports = function () {

    // renderLoader();

    const form = document.querySelector("form");

    form.addEventListener("submit", async (e) => {

        e.preventDefault();

        const data = {
            name: 'admin',
            email: "admin@gmail.com",
            password: 'password',
            createdOn: Date.now()
        };

        const user = new User();

        try {

            await user.create(data);

            window.location.href = "login.html"

        } catch (error) {

            console.log(error);
        }

    });
}