const indexController = require("./controller/indexController");
const aboutController = require("./controller/aboutController");
const contactController = require("./controller/contactController");
const LoginController = require("./controller/loginController")
const RegisterController = require("./controller/registerController")
const CartController = require("./controller/cartController");




// router
module.exports = function () {

    const state = {

        url: ""
    };

    const windowUrl = window.location.pathname;
    state.url = windowUrl;

    const { url } = state;

    console.log(url)
    switch (url) {

        case "/": case "/index.html":
            indexController();
            return;
        case "/about.html":
            aboutController();
            return;
        case "/register.html":
            RegisterController()
            return;
        case "/login.html":
            LoginController();
            return;
        case "/contact.html":
            console.log("contact controller")
            return;
        case "/cart.html":

            CartController();
            return;
        default:
            console.log("page not found!!!")
            return null;
    }



}