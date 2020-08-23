
// console.log an item
const test = function (item) {

    console.log(item);
};


// get element from dom
const getElement = function (name) {

    return document.querySelector(name);
}

// show loader
function showLoader() {

    const element = document.createElement("div");
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper")

    wrapper.innerHTML = `
            <div class="loader">
                    
                     
   <span class="loader-inner-1"></span>
        <span class="loader-inner-2"></span>
        <span class="loader-inner-3"></span>
        <span class="loader-inner-4"></span>
             </div>
    `;

    document.body.appendChild(wrapper);

}

// remove loader
function removeLoader() {

    const element = document.querySelector(".loader");

    element.classList.remove("active")
}


module.exports = {
    test,
    getElement,
    showLoader
}