const express = require("express");
const router = express.Router();
const reservations = require("../data/reservations.json");

router.get("/", async (request, response) => {
  response.send(reservations);
});

router.get("/:id", async (request, response) => {
  response.send(
    reservations.find(
      (reservation) => reservation.id === parseInt(request.params.id)
    )
  );
});

module.exports = router;
