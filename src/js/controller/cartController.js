const { verifyToken } = require("../lib/helper");
const _ = require("lodash");
const CartView = require("../views/cartView");



// cart controller

module.exports = () => {


    // get token
    const token = sessionStorage.getItem("token");

    if (!_.isEmpty(token)) {

        try {

            // verify token
            const user = verifyToken(token);

            console.log("????", user)

            CartView.renderCart();


        } catch (e) {

            sessionStorage.removeItem("token");
            window.location.href = "login.html"
        }
    }

}