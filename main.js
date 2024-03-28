// Changes of quantity assign to the input, add or subtract items from the cart
let minusBtn = document.querySelector(".input__minus");
let plusBtn = document.querySelector(".input__plus");
let userInput = document.querySelector(".input__number");
let userInputNumber = 0;

//after the listener, it will run a arrow function that was added as a parameter
plusBtn.addEventListener("click", () => {
  userInputNumber++;
  userInput.value = userInputNumber;
  console.log(userInputNumber);
});

minusBtn.addEventListener("click", () => {
  userInputNumber--;
  //Make sure that the userInputNumber never goes below zero
  if (userInputNumber <= 0) {
    userInputNumber = 0;
  }
  userInput.value = userInputNumber;
  console.log(userInputNumber);
});
// Add the total od the products into the cart when the "add to cart" is press

const addToCartBtn = document.querySelector(".details__button");
// The cartNotification variable will be changing according to the user input
let cartNotification = document.querySelector(".header__cart--notification");
// last value will take the initial value from cartNotification, transform it in a number using parseInt
let lastValue = parseInt(cartNotification.innerText);

//Call the addToCartBtn and then add a listener that will execute an arrow function
addToCartBtn.addEventListener("click", () => {
  // Call the lastValue and add the input from the user (userInputNumber)
  lastValue = lastValue + userInputNumber;

//This update the addCartBtn to the new value insert it to the html  
  priceModal.innerHTML = `$125 x${lastValue} <span>$${lastValue*125}.00</span>`

  //Call the cartNotification variable and then use the property .innerText
  //insert the value of lastValue in the cartNotification variable
  cartNotification.innerText = lastValue;

  //The "header__cart--notification" has a display:none. Call the variable that contains the element and change the styles.
  cartNotification.style.display = "block";
  console.log(cartNotification);
});

// Gallery modal logic

const CartIconBtn = document.querySelector(".header__cart");
const cartModal = document.querySelector(".cart-modal");
let priceModal = document.querySelector(".cart-modal__price");

CartIconBtn.addEventListener("click", () => {
  //classList will return a list of the scss classes applied to the element
  // toggle alternate the class adding the new 'show' class
  cartModal.classList.toggle("show");
// Insert the updated value for the cart 'lastValue variable' into the html
// The price of the product is 125, multiply the 'lastValue' * 125 to get the price combine of the products in the cart
  priceModal.innerHTML = `$125 x${lastValue} <span>$${lastValue*125}.00</span>`
});

