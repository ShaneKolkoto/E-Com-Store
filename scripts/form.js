const loader = document.querySelector(".loader");
loader.style.display = "none";

// select inputs
const submitBtn = document.querySelector(".submit-btn");
const name = document.querySelector("#name") || null;
const surname = document.querySelector("#surname") || null;
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const number = document.querySelector("#number") || null;
const tac = document.querySelector("#terms-and-cond") || null;
const notification = document.querySelector("#notification") || null;

submitBtn.addEventListener("click", () => {
  if (name != null) {
    // sign up page
    if (name.value.length < 3) {
      showAlert("name must be 3 letters long");
    } else if (!email.value.length) {
      showAlert("enter your email");
    } else if (password.value.length < 8) {
      showAlert("password should be 8 letters long");
    } else if (!number.value.length) {
      showAlert("enter your phone number");
    } else if (!Number(number.value) || number.value.length < 10) {
      showAlert("invalid number, please enter valid one");
    } else if (!tac.checked) {
      showAlert("you must agree to our terms and conditions");
    } else {
      // submit form
      loader.style.display = "block";
      
      window.location = "index.html";
    }
  } else {
    // login page
    if (!email.value.length || !password.value.length) {
      showAlert("fill all the inputs");
    } else {
      loader.style.display = "block";
      window.location = "index.html";
    }
  }
});
