require('../css/styles.sass')
const Router = require("./router");
const HeaderController = require("./controller/headerController");

function MainController() {

    // ger information from url
    Router();

    // render headers
    HeaderController.render();
}

window.addEventListener("load", MainController);