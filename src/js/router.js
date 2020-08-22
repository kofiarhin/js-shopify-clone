const indexController = require("./controller/indexController");
const aboutController = require("./controller/aboutController");
const contactController = require("./controller/contactController");

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
            contactController();
            return;
        case "/login.html":
            console.log("register controller")
            return;
        case "/contact.html":
            console.log("contact controller")
            return;
        default:
            console.log("page not found!!!")
            return null;
    }



}