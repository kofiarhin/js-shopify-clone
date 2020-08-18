

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
                            <h1 class="logo">EscoShop</h1>
                    
                     </a>

            <form> 
                <input type="text"  placeholder="Search for product" />
            </form>
            <nav> 
                <a href="shop.html">Shop</a>
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