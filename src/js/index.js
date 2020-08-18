require('../css/styles.sass')
const Router = require("./router");
const HeaderController = require("./controller/headerController");
const SidenavController = require("./controller/sidenavController");

function MainController() {

    // ger information from url
    Router();

    // render headers
    HeaderController.render();

    // sideNavController

    SidenavController();
}

window.addEventListener("load", MainController);