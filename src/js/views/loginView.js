
const renderInfo = function (message) {

    const element = document.querySelector(".info");
    element.classList.add('success');
    element.textContent = message;

}


module.exports = {
    renderInfo
}