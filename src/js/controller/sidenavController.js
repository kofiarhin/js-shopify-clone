const { getElement, test } = require("../lib/helper");

function showSidenav() {

    const element = document.querySelector(".sidenav");

    element.classList.add("active");
}


// create sidenav

function createSidenav() {


    const element = document.createElement("div");


    let markup = `
    
                    <ul> 
                    
                            <li>  <a href="index.html"> Home </a></li>
                            <li>  <a href="about.html">About</a></li>
                            <li>  <a href="login.html">Login</a></li>
                            <li>  <a href="register.html">Regsiter</a></li>
                    </ul>
    `;

     element.innerHTML = markup;
     element.classList.add("sidenav");
    
     document.body.appendChild(element);
}


function menuController() {

     const menu = getElement(".menu");

        if(menu) {

            menu.addEventListener("click", function() {

                    const sidenav = getElement(".sidenav");

                    sidenav.classList.toggle("active");
            });
        }
}


// sidenav controller
module.exports = function() {

       createSidenav();

       menuController();

        
}