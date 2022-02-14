// Logout text after 2.5 seconds after the script is loaded

function logOut() {
  console.log('Called after 2.5 seconds');
}
setTimeout(logOut, 2500);

// as an anonymous function

setTimeout(() => { console.log('Called after 2.5 seconds'); }, 2500);



// Create a function that takes 2 parameters

function logText(delay, stringToLog) {
  setTimeout(function () {
    console.log(stringToLog);
  }, delay * 2000);
}
logText(5, "Should be logged after 5 seconds");
logText(3, "Should be logged after 3 seconds");
logText(2, "Should be logged after 2 seconds");



// Create a button in html

let button = document.querySelector("#myButton");
button.addEventListener("click", (callback) => {
  logText(5, "Called after 5 seconds");
});



//  planetLogFunction

const x = function earthLogger() {
  console.log("Earth");
}
const y = function saturnLogger() {
  console.log("Saturn");
}
function planetLogFunction(stars) {
  stars();
}
planetLogFunction(x);
planetLogFunction(y);



// User log location

let p = document.querySelector("#show");
let button = document.querySelector("#myButton1");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    p.innerHTML = "Geolocation is not supported by this browser";
  }
}
function showPosition(position) {
  p.innerHTML = "This is the Latitude: " + position.coords.latitude +
    "<br>This is the Longitude: " + position.coords.longitude;
}
function showError(error) {
  p.innerHTML = "Location information is unavailable";
}



// Call the function with different delays and callback functions


function runAfterDelay(delay, callback) {
  setTimeout(function () {
    console.log("This will be delayed: " + delay + " seconds");
  }, delay * 4000);
}
runAfterDelay(4, function () {
  console.log("should be logged after 4 seconds");
});



// Check the double click on the page

let body = document.querySelector('body');
let timer;
body.addEventListener('click', event => {
  if (event.detail === 1) {
    timer = setTimeout(() => {
      console.log('click')
    }, 500)
  }
})
body.addEventListener('dblclick', () => {
  clearTimeout(timer)
  console.log('dblclick')
});



// Create a function that should log out a funny joke and vice versa

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
  if (shouldTellFunnyJoke) {
    logFunnyJoke();
  } else {
    logBadJoke();
  }
}

function logFunnyJoke() {
  console.log("Helvetica and Times New Roman walk into a bar. Get out of here! shouts the bartender. We don't serve your type");
}

function logBadJoke() {
  console.log("Did you hear the story about the claustrophobic astronauut. He just needed some space");
}

jokeCreator(false, logFunnyJoke, logBadJoke);
jokeCreator(true, logFunnyJoke, logBadJoke);



// Create an array with 3 items should be functions

const arrayFunctions = [
  function () { console.log("This is first function") },
  function () { console.log("This is the second function") },
  function () { console.log("This is the third function") },
];

for (let i = 0; i < arrayFunctions.length; i++) {
  arrayFunctions[i]();
}


// Create a function as a const and try creating a function normally. Call both functions


const doSomething = function () {
  console.log("This is not a function");
}
doSomething();

function createSomething() {
  console.log("Should be logical")
}
createSomething();



// Create an object that has a key whose value is a function

const circle = {
  radius: 10,
  area: function () {
    return Math.PI * this.radius * this.radius;
  }
};
console.log(circle.area());

