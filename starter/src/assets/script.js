/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
// string array

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/
// functions needed?

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/
// maybe its neccesary to add images from unsplash in case new products need to be added

/* Declare an empty array named cart to hold the items in the cart */

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
// create product card object

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
// function product card object

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
// function product card object

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
// function product card object

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/
// function product card object

/* Create a function called emptyCart that empties the products from the cart */
// function product card object

/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/
// 

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/
/*Remove all items from the cart. ? this is already written...

/*Integrate a currency switcher to switch between USD, EUR, and YEN.
function customer object*/

/*Implement currency formatting to accomodate USD, EUR, and YEN.
function customer object*/

/*Come back once you're familiar with the DOM API, HTML, and CSS and try the
following:
Change/update the formatting of the store.
Add borders, round corners */

/* Add a mock credit card form with form validation.
the credit card needs 3 digits check and individual credit card number including expire date.
include a nice picture as a hint */

/* Create a form for adding more products.
Use existing html and use similar like enter cash recieved
combine with the product class... addproduct function*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   // currency
}
