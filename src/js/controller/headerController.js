

function renderHeader(markup) {
    // const header = document.createElement("header");

    const header = document.querySelector("header")
    header.classList.add("main-header")
    header.innerHTML = markup;
}



// rennder header
const render = function () {


    let markup = `
    
             <div class="container"> 
                    
                    <a href="index.html">
                            <h1 class="logo">TheShop</h1>
                    
                     </a>

            <form> 
                <input type="text"  placeholder="Search for product" />
            </form>
            <nav> 
                <a href="men.html">Men</a>
                <a href="women.html">Women</a>
                <a href="cart.html">Cart</a>
                <a href="login.html">Login</a>
                <a href="register.html">Register</a>
            </nav>

                <i class="fa fa-bars menu"></i>
             </div>
    `;

    renderHeader(markup);

}

module.exports = {
    render
}