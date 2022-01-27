//  Generate spirit animal name

let spiritAnimals = [
    "Rabbit",
    "Crow",
    "Cat",
    "Deer",
    "Frog",
    "Fish",
    "Eagle",
    "Butterfly",
    "Wolf",
    "Bear",
];

let adjectives = [
    "The Cute",
    "The Hot",
    "The Fast",
    "The Colourful",
    "The Red",
    "The Western",
    "The Fancy",
    "The Aggressive",
    "The Clever",
    "The Adorable",
];

const body = document.querySelector("body");
const input = document.querySelector("#userInput");
const button = document.querySelector("#myButton");
const outputPara = document.createElement("p");

button.addEventListener("click", function () {
    let randomNumber = adjectives[Math.floor(Math.random() * adjectives.length)] + " " + spiritAnimals[Math.floor(Math.random() * spiritAnimals.length)];
    const user = document.querySelector("#userInput").value;
    if (user === "" || user === "null") {
        alert("Enter your name to generate your spirit animal");
    } else {
        outputPara.innerText = "Your spirit animal is: " + user + " - " + randomNumber;
        body.appendChild(outputPara);
    }

});
