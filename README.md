Step 1: Set up a new React project:

Open your terminal or command prompt.
Create a new folder for your project: mkdir shopping-cart-app
Change to the project folder: cd shopping-cart-app
Initialize a new React app: npx create-react-app .
Start the development server: npm start

Step 2: Install react-router-dom package:

In your terminal, run: npm install react-router-dom

Step 3: Create the components:

Inside the src folder, create a new folder called components.
Inside the components folder, create three files: App.js, ShoppingCart.js, and Checkout.js.

Step 4: Implement Item component (Item.js):

In Item.js, create a functional component named Item.
The Item component should receive props: item, onRemove, onIncrement, and onDecrement.
The component should render the item name, price, quantity, and three buttons: one for removing the item, one for incrementing the quantity, and one for decrementing the quantity.

Step 5: Implement ShoppingCart component (ShoppingCart.js):

In ShoppingCart.js, create a functional component named ShoppingCart.
The ShoppingCart component should receive props: cartItems, onRemove, onIncrement, and onDecrement.
The component should display all the items in the cart using the Item component.
Implement the handleRemoveItem, handleIncrementItem, and handleDecrementItem functions to update the cartItems state accordingly.
Calculate the total price of all items and display it at the bottom of the cart.

Step 6: Implement Checkout component (Checkout.js):

In Checkout.js, create a functional component named Checkout.
The Checkout component should receive props: cartItems and totalPrice.
Display the details of all items in the cart, similar to the ShoppingCart component.
Display the total price at the bottom of the checkout page.
If cartItems is empty or not available, display the message "Cart is empty or state data is missing."

Step 7: Update App.js:

In App.js, create a functional component named App.
Import the necessary components: ShoppingCart and Checkout.
Create the cartItems state using the useState hook, and initialize it with an array of item objects.
Create the handler functions (handleRemoveItem, handleIncrementItem, and handleDecrementItem) to update the cartItems state.
Implement the calculateTotalPrice function to calculate the total price of all items in the cart.
Set up the routing using react-router-dom:
Wrap the Routes component with a Router component.
Define two routes: one for the shopping cart ("/") and one for the checkout page ("/checkout").
For each route, render the corresponding component (ShoppingCart for "/" and Checkout for "/checkout").
Pass the necessary props to the ShoppingCart and Checkout components.

Step 8: Add CSS styling:

Create a new file named styles.css inside the src folder.
Write the provided CSS styles in the styles.css file to style your components.
Import the styles.css file into the index.js file to apply the styles to the entire application.

Step 1: Test the application:

Go to the browser and open http://localhost:3000 to see the shopping cart page.
Click the "Checkout" button to navigate to the checkout page and see the items and total price.
