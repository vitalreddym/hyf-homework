console.log("Script loaded");

const products = getAvailableProducts();
// console.log(products);

let ul = document.querySelector("#productList");

function renderProducts(products) {
  for (let i = 0; i <= products.length; i++) {
    const productNames = products[i];
    const productTitle = document.createElement("h2");
    const productPrice = document.createElement("p");
    const productRating = document.createElement("p");
    productTitle.innerText = productNames.name;
    productPrice.innerText = "Price: "  + productNames.price;
    productRating.innerText = "Rating: " + productNames.rating;
   

    let list = document.createElement("li");
    list.appendChild(productTitle);
    list.appendChild(productPrice);
    list.appendChild(productRating);
    ul.appendChild(list);
}
}

renderProducts(products);