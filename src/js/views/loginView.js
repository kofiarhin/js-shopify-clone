
const renderInfo = function (message) {

    const element = document.querySelector(".info");
    element.classList.add('success');
    element.textContent = message;

}


const renderErrors = function (errors) {



}


module.exports = {
    renderInfo,
    renderErrors
}