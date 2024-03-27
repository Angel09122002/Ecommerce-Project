// Changes of quantity assign to the input, add or subtract items from the cart
let minusBtn = document.querySelector(".input__minus");
let plusBtn = document.querySelector(".input__plus");
let userInput = document.querySelector(".input__number")
let userInputNumber = 0;

//after the listener, it will run a arrow function that was added as a parameter
plusBtn.addEventListener("click", ()=>{
    userInputNumber ++; 
    userInput.value = userInputNumber;
    console.log(userInputNumber)
}); 

minusBtn.addEventListener('click', ()=>{
    
   userInputNumber --;
//Make sure that the userInputNumber never goes below zero
   if (userInputNumber <= 0) {
        userInputNumber = 0;
   }
   userInput.value = userInputNumber;
    console.log(userInputNumber )
});
// Add the total od the products into the cart when the "add to cart" is press

const addToCartBtn = document.querySelector('.details__button');
// The cartNotification variable will be changing according to the user input
let cartNotification = document.querySelector('header__cart--notification');
  
//Call the addToCartBtn and then add a listener that will execute an arrow function

addToCartBtn.addEventListener('click', ()=>{
    cartNotification.innerText = userInputNumber;
    console.log(cartNotification);
});