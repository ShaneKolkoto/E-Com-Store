let loader = document.querySelector(".loader");

const becomeSellerElement = document.querySelector(".become-seller");
const productListingElement = document.querySelector(".product-listing");
const applyForm = document.querySelector(".apply-form");
const showApplyFormBtn = document.querySelector("#apply-btn");
const backFromBtn = document.querySelector("#back-btn");

window.onload = () => {
  becomeSellerElement.classList.remove("hide");
        applyForm.classList.add("hide");
        loader.style.display = "none";
};

showApplyFormBtn.addEventListener("click", () => {
  becomeSellerElement.classList.add("hide");
  applyForm.classList.remove("hide");
});

backFromBtn.addEventListener("click", () => {
  window.location = "index.html"
});

// Form submision

const applyFormButton = document.querySelector("#apply-form-btn");
const businessName = document.querySelector("#business-name");
const address = document.querySelector("#business-add");
const about = document.querySelector("#about");
const number = document.querySelector("#number");
const tac = document.querySelector("#terms-and-cond");
const legitInfo = document.querySelector("#legitInfo");

applyFormButton.addEventListener("click", () => {
  if (
    !businessName.value.length ||
    !address.value.length ||
    !about.value.length ||
    !number.value.length
  ) {
    showAlert("fill all the inputs");
  } else {
    if (!tac.checked || !legitInfo.checked) {
      showAlert("you must agree to our term and conditions");
    } else {
      loader.style.display = "block";
      showAlert("compant has been registerd");
      window.location = "addProduct.html"
    }
  }
});
