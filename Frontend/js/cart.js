// Select cart items container
const cartItemsEl = document.getElementById("recipes");

// Function to display cart items
const displayCartItems = () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart.length === 0) {
    cartItemsEl.innerHTML = "<p>Your cart is empty</p>";
    return;
  }
  
  let cartHTML = cart.map((product, index) => `
    <div class="cart-item">
      <img src="${product.url}" alt="${product.title}">
      <div class="cart-item-details">
        <h4>${product.title}</h4>
        <p>Price: $${product.price}</p>
        <button onclick="removeFromCart(${index})">Remove</button>
      </div>
    </div>
  `).join("");
  
  cartItemsEl.innerHTML = cartHTML;
};

// Remove item from cart
const removeFromCart = (index) => {
  let cart = JSON.parse(localStorage.getItem("cart"));
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCartItems();
};

// Display cart items on load
window.addEventListener("DOMContentLoaded", displayCartItems);

// Handle checkout button
document.getElementById("checkout-btn").addEventListener("click", () => {
  alert("Proceeding to checkout...");
  localStorage.removeItem("cart"); // Clear cart after checkout
  window.location.href = "index.html";
});
