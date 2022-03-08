class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    // part 3
    convertToCurrency(currency) {
        switch (currency) {
            case "pounds":
                return "£" + this.price * 0.11;

            case "dollars":
                return this.price * 0.15 + "USD";

            case "INR":
                return this.price * 11.24 + " INR ";

            case "euros":
                return this.price * 0.13 + " EUR";

            default:
                return this.price + " DKK";
        }
    }
}

class ShoppingCart {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        // Implement functionality here
        this.products.push(product);
    }

    removeProduct(product) {
        // Implement functionality here
        for (let i = 0; i < this.products.length; i++) {
            if (product === this.products[i]) {
                this.products.splice(i, 1);
            }
        }
    }

    searchProduct(productName) {
        // Implement functionality here
        let sProduct = [];
        this.products.forEach((product) => {
            if (product.name.toLowerCase() === productName.toLowerCase()) {
                sProduct = product;
            }
        });
        return sProduct;
    }

    getTotal() {
        // Implement functionality here
        const totalPrice = this.products.reduce((sum, product) => {
            return (sum += product.price);
        }, 0);
        return totalPrice;

    }

    renderProducts() {
        // Implement functionality here
        const productsList = document.getElementById("productsList")
        this.products.forEach((product) => {
            const productItems = document.createElement("li");
            productItems.innerHTML = `<h2>${product.name}</h2> <span>${product.price}</span>`;
            productsList.appendChild(productItems);
        });
    }

    getUser(user) {
        // Implement functionality here
        return new Promise((resolve, reject) => {
            fetch(`https://jsonplaceholder.typicode.com/users/${user}`)
                .then((response) => response.json())
                .then((data) => resolve(data));
        });
    }
    showcart() {
        console.log(this.products);
    }
}


const shoppingCart = new ShoppingCart();
const flatscreen = new Product("flatscreen", 5000);
const dishWasher = new Product("dishWasher", 3000);
const coffeeMachine = new Product("coffeeMachine", 1000);
const iphone = new Product("iphone", 8000);
const macbook = new Product("macbook", 12000);
// addProduct
shoppingCart.addProduct(flatscreen);
shoppingCart.addProduct(dishWasher);
shoppingCart.addProduct(coffeeMachine);
shoppingCart.addProduct(iphone);
shoppingCart.addProduct(macbook);
shoppingCart.showcart();
// removeProduct
shoppingCart.removeProduct(dishWasher);
shoppingCart.showcart();
// getTotal
console.log("The total price for the products is " + shoppingCart.getTotal() + " dkk");
// searchProduct
console.log(shoppingCart.searchProduct("coffeeMachine"));
// renderProducts
shoppingCart.renderProducts();
//getUser
shoppingCart.getUser(2).then((result) => console.log(result));
const plant = new Product("plant", 50);
console.log(plant.convertToCurrency("dollars"));
console.log(plant.convertToCurrency("pounds"));
console.log(plant.convertToCurrency("euros"));
console.log(plant.convertToCurrency("INR"));


// part 2

shoppingCart.getUser(2).then((result) => {
    console.log(result);
    document.getElementById("userInfo").innerHTML = `
    <strong>Rendered products based on the user:${result.name}</strong>
    `;
    shoppingCart.renderProducts();
    document.getElementById("total").innerText = `Total Price of the products:
    ${shoppingCart.getTotal()} dkk`;
});

