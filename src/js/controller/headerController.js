const { checkLogin } = require("../lib/helper");

// render header

function renderHeader(markup) {
    // const header = document.createElement("header");

    const header = document.querySelector("header")
    header.classList.add("main-header")
    header.innerHTML = markup;
}


// rennder header
const render = function () {

    //  check if user is logged in
    const user = checkLogin();

    let markup = "";

    if (user) {

        markup = `
         <div class="container"> 
                    
                    <a href="index.html">
                            <h1 class="logo">TheShop</h1>
                     </a>

            <form> 
                <input type="text"  placeholder="Search for product" />
            </form>
            <nav> 
                <a href="profile.html">Profile</a>
                <a href="shop.html?id=">My Shop</a>
                <a href="postItem.html">Post Item</a>
                <a href="#logout">Logout</a>
            </nav>
                <i class="fa fa-bars menu"></i>
             </div>
         
         `;
    } else {
        markup = `
    
             <div class="container"> 
                    
                    <a href="index.html">
                            <h1 class="logo">TheShop</h1>
                     </a>

            <form> 
                <input type="text"  placeholder="Search for product" />
            </form>
            <nav> 
                <a href="postItem.html">Post Item</a>
                <a href="shop.html">shop</a>
                <a href="login.html">Login</a>
                <a href="register.html">Register</a>
            </nav>

                <i class="fa fa-bars menu"></i>
             </div>
    `;

    }

    renderHeader(markup);

}

module.exports = {
    render
}