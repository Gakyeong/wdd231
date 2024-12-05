// params.js
const products = [
  { id: 1, name: "Product 1", price: 3, image: "https://placehold.co/300" },
  { id: 2, name: "Product 2", price: 5, image: "https://placehold.co/300" },
  { id: 3, name: "Product 3", price: 1, image: "https://placehold.co/300" },
];
function productslist(product) {
  return `<section>
  <img src ="${product.image}" alt = "${product.name}">
  <h2> ${product.name}</h2>
  <p> Price : $ ${product.price} </p>
  </section>`;
}

function getPram(param) {
  const urlParams = new URLSearchParams(window.location.search);
  const query = urlParams.get("param");
}

function renderProduct() {
  const productElement = document.querySelector("main");
  const productId = getPram("productId");
  const product = products.find(
    (product) => product.id === parseInt(productId)
  );
  const html = productslist(product);
  productElement.insertAdjacentHTML("beforeend", html);
}
renderProduct();
