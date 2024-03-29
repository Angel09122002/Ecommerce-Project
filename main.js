// Changes of quantity assign to the input, add or subtract items from the cart
const minusBtn = document.querySelector(".input__minus");
const plusBtn = document.querySelector(".input__plus");
let userInput = document.querySelector(".input__number");
let userInputNumber = 0;

plusBtn.addEventListener("click", () => {
  userInputNumber++;
  userInput.value = userInputNumber;
  console.log(userInputNumber);
});

minusBtn.addEventListener("click", () => {
  userInputNumber--;
  if (userInputNumber <= 0) {
    userInputNumber = 0;
  }
  userInput.value = userInputNumber;
  console.log(userInputNumber);
});

// Add the total of the products into the cart when the "add to cart" is press
const addToCartBtn = document.querySelector(".details__button");
let cartNotification = document.querySelector(".header__cart--notification");
let lastValue = parseInt(cartNotification.innerText);

addToCartBtn.addEventListener("click", () => {
  lastValue = lastValue + userInputNumber;
  cartNotification.innerText = lastValue;
  //The "header__cart--notification" has a display:none. Call the variable that contains the element and change the styles.
  cartNotification.style.display = "block";
  drawProductModal();
  priceModal.innerHTML = `$125 x${lastValue} <span>$${
    lastValue * 125
  }.00</span>`;
  console.log(cartNotification);
});

// Gallery modal logic
const CartIconBtn = document.querySelector(".header__cart");
const cartModal = document.querySelector(".cart-modal");
const productContainer = document.querySelector(
  ".cart-modal__checkout-container"
);

CartIconBtn.addEventListener("click", () => {
  cartModal.classList.toggle("show");

  if (lastValue == 0) {
    productContainer.innerHTML = '<p class="cart-empty">Your cart is empty</p>';
  } else {
    drawProductModal();
  }
});

// Change the thumbnail images
const imgContainer = document.querySelector(".gallery__img-container");
const previousGalleryBtn = document.querySelector(".gallery__previous");
const nextGalleryBtn = document.querySelector(".gallery__next");
let imgIndex = 1;

nextGalleryBtn.addEventListener("click", () => {
  changeNextImg(imgContainer);
});
previousGalleryBtn.addEventListener("click", () => {
  changePreviousImg(imgContainer);
});

// change Thumbnails img
let thumbnails = document.querySelectorAll(".gallery__thumbnail");
// Thumbnails is a nodeList, it need to be translate to a array.
thumbnails = [...thumbnails];

thumbnails.forEach((thumbnails) => {
  thumbnails.addEventListener("click", (event) => {
    console.log(event.target.id);
    imgContainer.style.backgroundImage = `url('../images/image-product-${event.target.id}.jpg')`;
  });
});

// change Thumbnails img in the  modal

let modalThumbnail = document.querySelectorAll(".modal-gallery__thumbnail");
const modalImgContainer = document.querySelector(
  ".modal-gallery__img-container"
);

modalThumbnail = [...modalThumbnail];

modalThumbnail.forEach((modalThumbnail) => {
  modalThumbnail.addEventListener("click", (event) => {
    console.log(event.target.id.slice(-1));

    modalImgContainer.style.backgroundImage = `url('../images/image-product-${event.target.id.slice(
      -1
    )}.jpg')`;
  });
});

// change Main img of the modal with the arrow button
const PreviousModalBtn = document.querySelector(".modal-gallery__previous");
const NextModalBtn = document.querySelector(".modal-gallery__next");

PreviousModalBtn.addEventListener("click", () => {
  changePreviousImg(modalImgContainer);
});
NextModalBtn.addEventListener("click", () => {
  changeNextImg(modalImgContainer);
});

// Show the modal gallery when the user click in the main image
const imgModal = document.querySelector(".modal-gallery__background");
const closeModalBtn = document.querySelector(".modal-gallery__close");
imgContainer.addEventListener("click", () => {
  imgModal.style.display = "grid";
});

closeModalBtn.addEventListener("click", () => {
  imgModal.style.display = "none";
});

// Open hamburger menu
const hamburgerMenu = document.querySelector(".header__menu");
const modalNavbar = document.querySelector(".modal-navbar__background");
const closeModalNavbar = document.querySelector(".modal-navbar__close-icon");

modalNavbar.style.display = "none";

hamburgerMenu.addEventListener("click", () => {
  console.log("abrir modal");
  modalNavbar.style.display = "block";
});

closeModalNavbar.addEventListener("click", () => {
  modalNavbar.style.display = "none";
});
// functions

// Delete cart content
function deleteProduct() {
  const deleteProductBtn = document.querySelector(".cart-modal__delete");

  deleteProductBtn.addEventListener("click", () => {
    productContainer.innerHTML = '<p class="cart-empty">Your cart is empty</p>';
    lastValue = 0;
    cartNotification.innerText = lastValue;
  });
}

function drawProductModal() {
  productContainer.innerHTML = `
        <div class="cart-modal__details-container">
        <img
        class="cart-modal__img"
        src="./images/image-product-1-thumbnail.jpg"
        alt="thumbnail"
        />
        <div>
        <p class="cart-modal__product">Autumn Limited Edition...</p>
        <p class="cart-modal__price">$125 x3 <span>$375.00</span></p>
        </div>
        <img
        class="cart-modal__delete"
        src="./images/icon-delete.svg"
                alt="icon-delete"
              />
  </div>
  <button class="cart-modal__checkout">Check out</button>`;

  deleteProduct();
  let priceModal = document.querySelector(".cart-modal__price");
  priceModal.innerHTML = `$125 x${lastValue} <span>$${
    lastValue * 125
  }.00</span>`;
}

function changeNextImg(imgContainer) {
  if (imgIndex == 4) {
    imgIndex = 1;
  } else {
    imgIndex++;
  }
  imgContainer.style.backgroundImage = `url('../images/image-product-${imgIndex}.jpg')`;
}

function changePreviousImg(imgContainer) {
  if (imgIndex == 1) {
    imgIndex = 4;
  } else {
    imgIndex--;
  }
  imgContainer.style.backgroundImage = `url('../images/image-product-${imgIndex}.jpg')`;
}
