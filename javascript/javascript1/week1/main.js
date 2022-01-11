// Age-ify (A future age calculator)
let yearOfBirth = 1978;
let yearFuture = 2045;
let age = yearFuture - yearOfBirth;
console.log ('You will be ' + age + ' years old in ' + yearFuture + ' ');

//Goodboy-Oldboy (A dog age calculator)
let dogYearOfBirth = 2010;
let dogYearFuture = 2025;
let dogYear = 7;
// assume that 1 dog year equals to 5 human years
let shouldShowResultInDogYears = false;
if(shouldShowResultInDogYears === true) {
let ageOfDog = (dogYearFuture - dogYearOfBirth) * dogYear;   
console.log ("Your dog will be " + ageOfDog + " dog years old in " + dogYearFuture + " " );
}
else {
let ageOfDog = dogYearFuture - dogYearOfBirth;
console.log ("Your dog will be " + ageOfDog + "  human years old in " + dogYearFuture + " " );   
}

// Housey pricey ( A house price estimator)
let friendName = ["Peter","Julia"],
width = [8, 5],
height = [10, 8],
depth = [10, 11],
gardenSizeInM2 = [100, 70],
cost= [2500000, 1000000],
volumeInM3 = [0, 0],
housePrice = [0, 0];
for (let i=0; i<friendName.length; i++) {
    volumeInM3[i] = width[i] * height[i] * depth[i];
    housePrice[i] = volumeInM3[i] * 2.5 * 1000 + gardenSizeInM2[i] * 300;
    if(housePrice[i] < cost[i]) {
        console.log("Dear " + friendName[i] + " you are paying too much.")
    }
    else {
        console.log("Dear " + friendName[i] + " you are lucky to have the house for this price.")
    }
}

// Ez namey ( Startup name generator)

let firstWords = ["Awesome", "Creative", "Amazing", "Innovative", "Sharp", "Master", "Great", "Interesting", "Spectacular", "Talent"];
let secondWords = ["Stars", "World", "People", "Mindsets", "Brains", "Minds", "Talents", "Features", "Wisdom", "Hunt"];
let startupName = [];
for (let i=0; i<firstWords.length; i++) {
    startupName.push(firstWords[Math.floor(Math.random() * 10)] + " " + secondWords[Math.floor(Math.random() * 10)]);
    console.log("The startup: " + startupName[i] + " contains " + startupName[i].length + " characters.");
} 

