// Custom elements - Header and footer

class InsertEle extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `    
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="index.html"><img src = "../images/logos/logo.png" alt = "Shoper" width ="100%"/></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>  
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search for products" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>  
        <ul class="nav-links">
          <li class="link link1"><a href='cart.html'><i class="fa-solid fa-cart-shopping"></i></a></li>
          <li class="link link2" ><a href="login.html" class="login-btn btn btn-primary"><i class="fa-solid fa-user"></i></i>Login</a></li>
        </ul>  
      </div>  
    </div>  
  </nav>
  <div class="categories">
      <ul class="list-cat">
        <li class="li-items"><a href="index.html">Home</a></li>
        <li class="li-items"><a href="products.html">All Products</a></li>
        <div
        class="dropdown-toggle li-items"
        type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          >
          Women
        </div>
        <ul class="dropdown-menu" id="demo">
          <li><a class="dropdown-item" href="women.html">All products</a></li>
          <li><a class="dropdown-item" href="women_dress.html">Dresses</a></li>
          <li><a class="dropdown-item" href="women_pants.html">Pants</a></li>
          <li><a class="dropdown-item" href="women_skirt.html">Skirts</a></li>
        </ul>
        <div
          class="dropdown-toggle li-items"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          men
        </div>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="men.html">All products</a></li>
          <li><a class="dropdown-item" href="men_shirt.html">Shirts</a></li>
          <li><a class="dropdown-item" href="men_pants.html">Pants</a></li>
          <li><a class="dropdown-item" href="men_hoodie.html">Hoodies</a></li>
        </ul>
        <li class="li-items"><a href="kids.html">Kids</a></li>
        <li class="li-items"><a href="contact.html">Contact</a></li>
      </ul>
    </div>
  `;
  }
}

class SpFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer>
    <div class="foot-container">
      <div class="foot-menu-con con-1">
        <div class="head-menu">
          <h3><a href = "women.html">Women</a></h3>
        </div>
        <div class="menu-list">
          <ul class="foot-menu-list">
            <li class="foot-menu-list-item"><a href = "women.html">Dress</a></li>
            <li class="foot-menu-list-item"><a href = "women.html">Pants</a></li>
            <li class="foot-menu-list-item"><a href = "women.html">Skirts</a></li>
          </ul>
        </div>
      </div>
      <div class="foot-menu-con con-2">
        <div class="head-menu">
          <h3><a href = "men.html">Men</a></h3>
        </div>
        <div class="menu-list">
          <ul class="foot-menu-list">
            <li class="foot-menu-list-item"><a href = "men.html">Shirts</a></li>
            <li class="foot-menu-list-item"><a href = "men.html">Pants</a></li>
            <li class="foot-menu-list-item"><a href = "men.html">Hoodies</a></li>
          </ul>
        </div>
      </div>
      <div class="foot-menu-con con-3">
        <div class="head-menu">
          <h3><a href = "kids.html">Kids</a></h3>
        </div>
      </div>
      <div class="foot-menu-con con-4">
        <div class="head-menu">
          <h3>Links</h3>
        </div>
        <div class="menu-list">
          <ul class="foot-menu-list">
            <li class="foot-menu-list-item"><a href="index.html">Home</a></li>
            <li class="foot-menu-list-item">
              <a href="login.html">Login</a>
            </li>
            <li class="foot-menu-list-item">
              <a href="contact.html">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="copyright-text">
      <p class="foot-text">© 2023 E-commerce website</p>
    </div>
  </footer>
    `;
  }
}

customElements.define("my-head", InsertEle);
customElements.define("sp-foot", SpFooter);

// eamil and password validation

const logEmail = document.getElementById("email");
const logPassword = document.getElementById("password");
var lgnBtn = document.getElementById("home_lgn_btn");

function login() {
  if (logEmail.value === "admin@admin.com" && logPassword.value === "123456") {
    alert("Login Successful");
    window.open("index.html");
  } else {
    alert("Incorrect email or password");
  }
}
