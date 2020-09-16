const jwt = require("jsonwebtoken");
const config = require("../../../config/config");





// verify token
const verifyToken = (token) => {

    // get payload
    const payload = jwt.verify(token, config.secret);

    return payload;

}

// genterate token
const genToken = function (data) {

    const token = jwt.sign(data, config.secret);

    return token;
};




// console.log an item
const test = function (item) {

    console.log(item);
};


const checkLogin = () => {

    const token = sessionStorage.getItem("token");

    if (token) {

        const payload = verifyToken(token);


        if (!_.isEmpty(payload)) {

            return payload;
        }

    }



}


// get element from dom
const getElement = function (name) {

    return document.querySelector(name);
}

// show loader
function showLoader() {

    const element = document.createElement("div");
    element.classList.add("wrapper")
    element.classList.add("active");



    element.innerHTML = `
     <div class="wrapper">
  <div id="preloader">
  <div id="loader"></div>
</div>
</div>       
`;

    document.body.appendChild(element);

}


const removeLoader = function () {

    const element = document.querySelector(".wrapper");
    element.classList.remove("active");
    element.classList.add("remove");

    test(element)
}


const renderLoader = function () {

    showLoader();
    setTimeout(() => {
        removeLoader();
    }, 1000);
}

module.exports = {
    test,
    getElement,
    showLoader,
    removeLoader,
    renderLoader,
    genToken,
    verifyToken,
    checkLogin
}