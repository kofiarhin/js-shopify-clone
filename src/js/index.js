require('../css/styles.sass')
const Router = require("./router");


function MainController() {

    // ger information from url
    Router();
}

window.addEventListener("load", MainController);