
// console.log an item
const test = function (item) {

    console.log(item);
};


const getElement = function(name) {

    return document.querySelector(name);
}

module.exports = {
    test,
    getElement
}