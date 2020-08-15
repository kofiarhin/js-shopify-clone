const indexController = require("./controller/indexController");
const aboutController = require("./controller/aboutController");


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

        case "/":
            indexController();
            return;
        case "/about.html":
            aboutController();
            return;
        case "/register.html":
            console.log("register page")
            return;
        case "/login.html":
            console.log("register controller")
            return;
        default:
            console.log("page not found!!!")
            return null;
    }



}