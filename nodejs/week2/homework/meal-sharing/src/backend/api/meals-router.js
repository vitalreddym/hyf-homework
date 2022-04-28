const express = require("express");
const router = express.Router();
const meals = require("../data/meals.json");

router.get("/", async (request, response) => {
  try {
    console.log(meals);
    console.log("in /api/meals");
    // to verify for empty object
  if (
    Object.keys(request.query).length === 0 &&
    request.query.constructor === Object
  ) {
    response.send(meals);
  } else if (request.query.maxPrice) {
    if (isNaN(Number(request.query.maxPrice))) {
      response.status(400).send("Invalid id");
    } else {
      response.send(
        meals.filter((meal) => {
          return meal.price < Number(request.query.maxPrice);
        })
      );
    }
  } else if (request.query.title) {
    response.send(
      meals.filter((meal) => meal.title.toLowerCase().includes(`${request.query.title.toLowerCase()}`))
    );
  } else if (request.query.createdAfter) {
    if (isNaN(Date.parse(request.query.createdAfter))) {
      response.status(400).send(" date not parsable");
    } else {
      response.send(
        meals.filter(
          (meal) =>
            Date.parse(meal.createdAt) >
            Date.parse(request.query.createdAfter)
        )
      );
    }
  } else if (request.query.limit) {
    if (isNaN(Number(request.query.limit))) {
      response.status(400).send("Invalid id");
    } else {
      const limit = Number(request.query.limit);
      const limitedMeals = [];
      for (let i = 0; i < limit; i++) {
        limitedMeals.push(meals[i]);
      }
      response.send(limitedMeals);
    }
  }
} catch (error) {
  throw error;
}
});

router.get("/:id", async (request, response) => {
  if (isNaN(Number(request.params.id))) {
    response.status(400).send("Invalid id");
  } else {
    response.send(
      meals.find((meal) => meal.id == parseInt(request.params.id))
    );
}
});

module.exports = router;