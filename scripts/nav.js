const createNav = () => {
    let nav = document.querySelector(".navbar");
  
    nav.innerHTML = `
          <div class="nav">
              <img src="./assets/img/dark-logo.png" class="brand-logo" alt="">
              <div class="nav-items">
                  <div class="search">
                      <input type="text" class="search-box" placeholder="search brand, product">
                      <button class="search-btn">search</button>
                  </div>
                  <a>
                  <img src="./assets/img/user.png" id="user-img" alt="">
                  <div class="login-logout-popup hide">
                      <p class="account-info"> Log in as, name </p>
                      <button class="btn" id="user-btn">Log out</button>
                      <button class="btn" id="user-seller-btn">Become a seller</button>
                  </div>
                  </a>
                  <a href="#"><img src="./assets/img/cart.png" alt=""></a>
              </div>
          </div>
          <ul class="links-container">
              <li class="link-item"><a href="#" class="link">home</a></li>
              <li class="link-item"><a href="#" class="link">women</a></li>
              <li class="link-item"><a href="#" class="link">men</a></li>
              <li class="link-item"><a href="#" class="link">kids</a></li>
              <li class="link-item"><a href="#" class="link">accessories</a></li>
          </ul>
      `;
  };
  
  createNav();
  
  // Nav popup
  const userImageButton = document.querySelector("#user-img");
  const userPopUp = document.querySelector(".login-logout-popup");
  const popuptext = document.querySelector(".account-info");
  const actionBtn = document.querySelector("#user-btn");
  const actionSellerBtn = document.querySelector("#user-seller-btn");
  const searchButton = document.querySelector(".search-btn");

  searchButton.addEventListener("click", () => {
    window.location = "search.html"
  });
  
  userImageButton.addEventListener("click", () => {
    userPopUp.classList.toggle("hide");
  });
  
  actionSellerBtn.addEventListener("click", () => {
    window.location = "seller.html";
  });
  
  window.onload = () => {
    let user = JSON.parse(sessionStorage.user || null);
    if (user != null) {
      popuptext.innerHTML = `login in as, <br> John Doe`;
      actionBtn.innerHTML = "log out";
      actionBtn.addEventListener("click", () => {
        window.location = "login.html";
      });
    } else {
      popuptext.innerHTML = "log in to place order";
      actionBtn.innerHTML = "log in";
      actionBtn.addEventListener("click", () => {
        window.location = "login.html";
      });
    }
  };
  