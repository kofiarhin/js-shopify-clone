module.exports = function () {


    const hash = window.location.hash.replace("#", "");

    if (hash === "logout") {

        sessionStorage.removeItem("token");

        window.location.href = "login.html"
    }
}