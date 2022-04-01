const express = require("express");
const app = express();

// import data here
const meals = require("./data/meals");
const reservations = require("./data/reservations");
const reviews = require("./data/reviews");
const port = 3000;

// this is where you will be adding your routes
app.get("/", async (request, response) => {
  response.send("Meal Sharing Web App");
});

const arrayOfMeals = meals.map((meal) => {
  meal.reviews = [];
  reviews.filter((review) => {
    if(meal.id === review.mealId) {
      meal.reviews.push(review);
    }
  });
  return meal;
});
// meals
app.get("/meals", async (request, response) => {
  response.send(arrayOfMeals);
});

// cheap-meals
app.get("/cheap-meals", async (request, response) => {
  const cheapMeals = arrayOfMeals.filter((meal) => meal.price < 50);
  response.send(cheapMeals);
});

// large-meals
app.get("/large-meals", async (request, response) => {
  const largeMeals = arrayOfMeals.filter((meal) => meal.maxNumberOfGuests > 5);
  response.send(largeMeals);
});

// random meal
app.get("/meal", async (request, response) => {
  const randomMeal = arrayOfMeals[Math.floor(Math.random() * arrayOfMeals.length)];
  response.send(randomMeal);
});

//reservations
app.get("/reservations", async (request, response) => {
  response.send(reservations);
});

// random reservation
app.get("/reservation", async (request, response) => {
  const randomReservation = reservations[Math.floor(Math.random() * reservations.length)];
  response.send(randomReservation);
});

module.exports = app;
