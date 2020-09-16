const { renderLoader, showLoader, removeLoader } = require("../lib/helper")


function renderBanner() {

    const banner = document.querySelector("#banner");

    let markup = `
     
    <div class="content">

      <h1 class="title">Build an online
        <br> business -- no matter
        <br>
        what business!</h1>

      <div class="wrapper">
        <form action="">
          <input type="text" placeholder="Enter your email address">
          <button for="">Start Free Trial</button>
        </form>
      </div>

      <p class="slug">
        Try the for free, no credit card required.
        <br>
        By entering your email, you agree to receive marketing
        emails from theshop.
      </p>

    </div>
     
     `;
    banner.innerHTML = markup;

}
// index controller
module.exports = function () {

    renderBanner()

}