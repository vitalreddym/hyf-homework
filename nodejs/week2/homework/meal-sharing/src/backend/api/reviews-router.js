const express = require("express");
const router = express.Router();
const reviews = require("../data/reviews.json");

router.get("/", async (request, response) => {
  response.send(reviews);
});


router.get("/:id", async (request, response) => {
  if (isNaN(Number(request.params.id))) {
    response.status(400).send("Invalid id");
  } else {
    response.send(
      reviews.find((review) => review.id == parseInt(request.params.id))
    );
  }
});
module.exports = router;