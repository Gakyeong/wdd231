// params.js
const products = [
  { id: 1, name: "Product 1", price: 3, image: "https://placehold.co/300" },
  { id: 2, name: "Product 2", price: 5, image: "https://placehold.co/300" },
  { id: 3, name: "Product 3", price: 1, image: "https://placehold.co/300" },
];

function renderProducts() {
  const productsElement = document.querySelector(".products");
  productsElement.innerHTML = "";
  const html = products.map(productslist);
  productsElement.innerHTML = html.join("");
}
function productslist(product) {
  return `<li><a href = "product.html?productId=${product.id}>${product.name}</li>`;
}
renderProducts();
