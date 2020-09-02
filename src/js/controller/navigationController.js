// rende side nav
const renderSideNav = function (markup) {

    const element = document.createElement('div');
    element.classList.add("sidenav");
    element.innerHTML = markup;

    document.body.appendChild(element);

}


// render main header
const renderHeader = function (markup) {

    const header = document.querySelector("header");

    header.classList.add("main-header");
    header.innerHTML = markup;

};


const menuController = function () {

    const menu = document.querySelector(".menu");

    if (menu) {
        menu.addEventListener("click", function () {

            const sidenav = document.querySelector(".sidenav");
            sidenav.classList.toggle("active");
        });
    }

}

// navigation controller
module.exports = function () {


    // check if user is logged in

    const token = sessionStorage.getItem('token');
    let navMarkup = "";
    if (token) {

        navMarkup = `
            
             <nav> 
                <a href="index.html">Profile</a>
                <a href="shop.html?id=">My Shop</a>
                <a href="postItem.html">Post Item</a>
                <a href="#logout">Logout</a>
            </nav>
            `;
    } else {

        navMarkup = `

            <nav> 
                <a href="index.html">Home</a>
                <a href="shop.html">Shop</a>
                <a href="login.html">Login</a>
                <a href="register.html">Register</a>
            </nav>
    
    `;
    }



    const markup = `
         <div class="container"> 
                    
                    <a href="index.html">
                            <h1 class="logo">TheShop</h1>
                     </a>

            <form> 
                <input type="text"  placeholder="Search for product" />
            </form>

            ${navMarkup}

              <div class="menu"> 
                 <i class="fa fa-bars"> </i>
              </div>

             </div>
         
         `;

    renderHeader(markup);
    renderSideNav(navMarkup);
    menuController();
}