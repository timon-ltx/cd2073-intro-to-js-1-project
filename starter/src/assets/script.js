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
const cherry = {
  name: 'cherry',
  price: '1',
  quantity: 0,
  productId: '100',
  image: './images/cherry.jpg'
}

const orange = {
  name: 'orange',
  price: '1',
  quantity: 0,
  productId: '101',
  image: './images/orange.jpg'
}

const strawberry = {
  name: 'strawberry',
  price: '1',
  quantity: 0,
  productId: '102',
  image: './images/strawberry.jpg'
}

const products = [cherry, orange, strawberry]

function array_guard (array) {
  if (array) {
    if (array.length <= 0) {
      return false
    }
    return true
  }
}

// function get_product that takes in the a productId and array as an argument and returns the specific product
function get_product (productId, array) {
  // this is our guard
  product = -1
  if (array_guard(array)) {
    array.forEach(function id (element) {
      if (element.productId.toString() === productId.toString()) {
        // if the product is already in the cart
        product = element
        if (element) {
        } else {
          // this will be the case if the product is not yet in the cart
          // and the cart already has a product (length is greater than 0)
          return -1
        }
      }
    })
    // lesson learned: return statement needs to be
    // outside the foreach function
    return product
  }
  return 0
}

/* Declare an empty array named cart to hold the items in the cart */
let cart = []

// function get_quantity_in_cart that takes in the a productId as an argument and returns the quantity of that product in the cart
function get_quantity_in_cart (productId, cart) {
  // this is our guard
  // if cart is a falsy value, check if the length is less than
  // or equal to 0
  // if cart passed our guard, add product to cart
  if (cart) {
    if (cart.length <= 0) {
      return 0
    }
    element = get_product(productId, cart)
    if (element === 0) {
      value = element.quantity
    } else {
      return -1
    }
  } else {
    value = 0
  }
  return value
}

/* Create a function named addProductToCart that takes in the product productId as an argument */
// addProductToCart should get the correct product based on the productId - done
// addProductToCart should then increase the product's quantity
// tested by addProductToCart adds product to cart (3 ms) ok
// if the product is not already in the cart, add it to the cart
// addProductToCart should then not increase the product's quantity
// addProductToCart a second time does not append the item twice (2 ms)
function addProductToCart (productId) {
  quantity = get_quantity_in_cart(productId, cart)
  if (quantity === 0) {
    element = get_product(productId, products)
    cart.push(element)
    element = get_product(productId, cart)
    element.quantity += 1
  } else if (quantity <= 1) {
    element = get_product(productId, cart)
    // if the product is not in the card, push it to cart array
    if (element === -1) {
      element = get_product(productId, products)
      cart.push(element)
      element = get_product(productId, cart)
      element.quantity += 1
    } else {
      // if the product is already in the card, just increase the quantity
      element.quantity += 1
    }
  }
}
// return cart

/* Create a function named increaseQuantity that takes in the productId as an argument
 */
// increaseQuantity should get the correct product based on the productId
// increaseQuantity should then increase the product's quantity
// in the cart
function increaseQuantity (productId) {
  element = get_product(productId, cart)
  element.quantity += 1
}

/* Create a function named decreaseQuantity that takes in the productId as an argument 
    // decreaseQuantity should get the correct product based on the productId
      // decreaseQuantity should decrease the quantity of the product
      // if the function decreases the quantity to 0, the product is removed from the cartconst index = myArray.indexOf(2);*/
function decreaseQuantity (productId) {
  element = get_product(productId, cart)
  element.quantity -= 1
  if (element.quantity === 0) {
    const index = cart.indexOf(element)
    cart.splice(index, 1)
  }
}

/* Create a function named removeProductFromCart that takes in the productId as an argument 
    // removeProductFromCart should get the correct product based on the productId
      // removeProductFromCart should update the product quantity to 0
      // removeProductFromCart should remove the product from the cart*/
function removeProductFromCart (productId) {
  element = get_product(productId, cart)
  element.quantity = 0
  const index = cart.indexOf(element)
  cart.splice(index, 1)
}

/* Create a function named cartTotal that has no parameters */
function cartTotal () {
  // cartTotal should iterate through the cart to get the total of all products
  sum = 0
  cart.forEach(function id (element) {
    sum += parseInt(element.price) * element.quantity
    // cartTotal should return the sum of the products in the cart
  })
  return sum
}

/* Create a function called emptyCart that empties the products from the cart */
function emptyCart () {
  cart = []
}

/* Create a function named pay that takes in an amount as an argument */
function pay (amount) {
  // pay will return a negative number if there is a remaining balance
  // pay will return a positive number if money should be returned to customer
  return amount - cartTotal()
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/
/*Remove all items from the cart. ? this is already written...

/*Integrate a currency switcher to switch between USD, EUR, and YEN.
function customer object*/
// consider getting values from api https://exchangeratesapi.io/

/* function currency(symbol){
  // convert to reference  
  switch(symbol){
    case 'EUR':
      products.forEach(function id(element){
        element.price = String(parseInt(element.price) / 0.91)
      })      
      break;
    case 'YEN':
      // Chinese Yuan
      products.forEach(function id(element){
        element.price = String(parseInt(element.price) / 6.87)
      })
      break;
    default:
      break;

    switch(symbol){
      case 'EUR':
        products.forEach(function id(element){
            element.price = String(parseInt(element.price) * 0.91)
            }
          )
        break;
      case 'YEN':
        // Chinese Yuan
        products.forEach(function id(element){
          element.price = String(parseInt(element.price) * 6.87)
        })
        break;
      default:
        break;
    }
}}*/

/*Implement currency formatting to accomodate USD, EUR, and YEN.
function customer object
seems repetetive. functions are suprising.
maybe different decimal numbers etc*/

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
  get_quantity_in_cart,
  get_product,
  array_guard,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay,
  emptyCart
  /* Uncomment the following line if completing the currency converter bonus */
  // currency
}
