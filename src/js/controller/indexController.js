const { showLoader, removeLoader } = require("../lib/helper");
// index controller
module.exports = function () {

    showLoader();

    setTimeout(() => {


        removeLoader();
    }, 3000);

}