require('../css/styles.sass')
const Router = require("./router");
const HeaderController = require("./controller/headerController");
const SidenavController = require("./controller/sidenavController");
const HashChangeController = require('./controller/hashChangeController');

function MainController() {

    // ger information from url
    Router();

    // render headers
    HeaderController.render();

    // sideNavController

    SidenavController();
}


// check for hashchange
window.addEventListener("hashchange", HashChangeController);

// on window load
window.addEventListener("load", MainController);