
function renderHeader(markup) {
 const header = document.createElement("header");
    header.classList.add("main-header")
    header.innerHTML = markup;
    document.body.appendChild(header)
}


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
                <a href="/">Home </a>
                <a href="login.html">Login</a>
                <a href="register.html">Register</a>
            </nav>

                <i class="fa fa-bars menu"></i>
             </div>
    `;

    renderHeader(markup);

    renderSidenav();

}

module.exports = {
    render
}