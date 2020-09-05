const { checkLogin } = require("../lib/helper");


module.exports = function () {

    const user = checkLogin();
    console.log(user)
}