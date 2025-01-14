// console.log('====================================');
// console.log("Connected");
// console.log('====================================');
// Simulated API data (can be replaced by fetch from an actual API)


fetch("https://cdn.shopify.com/s/files/1/0883/2188/4479/files/apiCartData.json?v=1728384889")
.then(response => response.json())
.then(data => {
  const cartItems = document.getElementById("cart-items");

  data.forEach(item => {
    const row = document.createElement("tr");

    const subtotal = item.price * item.quantity;

    row.innerHTML = `
      <td colspan="2">
        <img src="${item.image}" alt="${item.name}" height="50px" width="50px">
        <span>${item.name}</span>
      </td>
      <td>Rs. ${item.price.toFixed(2)}</td>
      <td>${item.quantity}</td>
      <td>Rs. ${subtotal.toFixed(2)}</td>
      <td><i class="fa-solid fa-trash" style="cursor: pointer;" onclick="removeItem('${item.id}')"></i></td>
    `;

    cartItems.appendChild(row);
  });
})
.catch(error => console.error("Error fetching cart data:", error));

function removeItem(itemId) {
alert(`Remove item with ID: ${itemId}`);
}