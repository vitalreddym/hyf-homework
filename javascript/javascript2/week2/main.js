
// console.log(products);

console.log("Script loaded");
const products = getAvailableProducts();
console.log(products);

let listOfProducts = document.querySelector(".product-list");

function renderProducts(products) {
  for (let i = 0; i < products.length; i++) {
    const productNames = products[i];
    const productTitle = document.createElement("h2");
    const productPrice = document.createElement("p");
    const productRating = document.createElement("p");
    productTitle.innerText = productNames.name;
    productPrice.innerText = `Price: ${productNames.price}`;
    productRating.innerText = `Rating: ${productNames.rating}`;


    let listItems = document.createElement("li");
    listItems.appendChild(productTitle);
    listItems.appendChild(productPrice);
    listItems.appendChild(productRating);
    listOfProducts.appendChild(listItems);
    listItems.className = "product-list";
  }
}
renderProducts(products);


//Search products by name
const inputName = document.querySelector(".search-products");
inputName.addEventListener("input", function () {
  console.log(inputName.value);
  const sortByName = products.filter((enter) => {
    return enter.name.toLowerCase().includes(inputName.value);
  });

  console.log(sortByName);
  listOfProducts.innerHTML = " ";
  renderProducts(sortByName);
});

// Filter products based on max Price

const inputPrice = document.querySelector(".max-price");
inputPrice.addEventListener("input", function () {
  console.log(inputPrice.value);
  const sortByPrice = products.filter((enter) => {
    return enter.price <= inputPrice.value;
  });

  console.log(sortByPrice);
  listOfProducts.innerHTML = " ";
  renderProducts(sortByPrice);
});

//Sort the products on rating
const inputRating = document.querySelector(".input-rating");
inputRating.addEventListener("input", function () {
  const filterByRating = products.filter((enter) => {
    return enter.rating >= inputRating.value;
  });

  listOfProducts.innerHTML = " ";
  renderProducts(filterByRating);
});
