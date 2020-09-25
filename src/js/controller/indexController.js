const { renderLoader, showLoader, removeLoader } = require("../lib/helper")



// render main
function renderMain() {

  const main = document.querySelector("#main")

  const markup = `
  
    <h1 class="title center ">Bring your business online</h1>
    <p class="slug">Create an ecommerce website backed by powerful tools that help you find customers, drive sales, and
      manage your
      day-to-day.
      <br>
    </p>
    <a href="shop.html">Explore Shop</a>

    <!-- popular-wrapper -->
    <div class="popular-wrapper">

      <!-- shop-unit -->
      <div class="shop-unit">
        <div class="cover"></div>
        <p class="category">Food and Beverage</p>
        <p class="name">Tom Sawyer</p>
      </div>
      <!-- end shop-unit -->

      <!-- shop-unit -->
      <div class="shop-unit">
        <div class="cover"></div>
        <p class="category">Food and Beverage</p>
        <p class="name">Daniel Walker</p>
      </div>
      <!-- end shop-unit -->

      <!-- shop-unit -->
      <div class="shop-unit">
        <div class="cover"></div>
        <p class="category">Food and Beverage</p>
        <p class="name">Prince Taylor</p>
      </div>
      <!-- end shop-unit -->

      <!-- shop-unit -->
      <div class="shop-unit">
        <div class="cover"></div>
        <p class="category">Food and Beverage</p>
        <p class="name">Bill James</p>
      </div>
      <!-- end shop-unit -->

    </div>

    <!-- end popular-wraper -->

    <h1 class="title center ">Take the Best plan Forward</h1>

    <!-- forward-wrapper -->
    <div class="forward-wrapper">

      <!-- forward-unit -->
      <div class="forward-unit">
        <h2>Start an Online Business</h2>
        <p class="slug">Create a business, whether you’ve got a fresh idea or are looking for a new way to make money.
        </p>
      </div>
      <!-- end forward-unit -->

      <!-- forward-unit -->
      <div class="forward-unit">
        <h2>Move your business online</h2>
        <p class="slug">Turn your retail store into an online store and keep serving customers without missing a beat.
        </p>
      </div>
      <!-- end forward-unit -->

      <!-- forward-unit -->
      <div class="forward-unit">
        <h2>Switch to TheShop</h2>
        <p class="slug">Bring your business to Shopify, no matter which ecommerce platform you’re currently using.
        </p>
      </div>
      <!-- end forward-unit -->

    </div>
    <!-- end forward-wrapper -->
  `;


  main.innerHTML = markup;

}


// render banner
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

  renderMain()

}