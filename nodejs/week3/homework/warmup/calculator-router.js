const express = require("express");
const router = express.Router();

// Getting data through query parameters using GET
router.get("/add", async(request, response) => {
    const parameters = request.query;
    try {
        let urlValues = Object.values(parameters);
        const addition = urlValues
            .map((str) => Number(str))
            .reduce(function(num1, num2) {
                return num1 + num2;
            });
        response.send({ result: addition });
    } catch (error) {
        throw error;
    }
});

router.get("/multiply", async(request, response) => {
    const parameters = request.query;
    try {
        let urlValues = Object.values(parameters);
        const multiplication = urlValues
            .map((str) => Number(str))
            .reduce(function(num1, num2) {
                return num1 * num2;
            });
        response.send({ result: multiplication });
    } catch (error) {
        throw error;
    }
});

router.get("/divide", async(request, response) => {
    const parameters = request.query;
    try {
        let urlValues = Object.values(parameters);
        const division = urlValues
            .map((str) => Number(str))
            .reduce(function(num1, num2) {
                return num1 / num2;
            });
        response.send({ result: division });
    } catch (error) {
        throw error;
    }
});

router.get("/subtract", async(request, response) => {
    const parameters = request.query;
    try {
        let urlValues = Object.values(parameters);
        const subtraction = urlValues
            .map((str) => Number(str))
            .reduce(function(num1, num2) {
                return num1 - num2;
            });
        response.send({ result: subtraction });
    } catch (error) {
        throw error;
    }
});

// Getting data through the request body using POST

router.post("/add", async(request, response) => {
    const numbers = request.body;
    try {
        let addition = Object.values(numbers).reduce(function(num1, num2) {
            return num1 + num2;
        });
        response.send({ result: addition });
    } catch (error) {
        throw error;
    }
});

router.post("/multiply", async(request, response) => {
    const numbers = request.body;
    try {
        let multiplication = Object.values(numbers).reduce(function(num1, num2) {
            return num1 * num2;
        });
        response.send({ result: multiplication });
    } catch (error) {
        throw error;
    }
});

router.post("/subtract", async(request, response) => {
    const numbers = request.body;
    try {
        let subtraction = Object.values(numbers).reduce(function(num1, num2) {
            return num1 - num2;
        });
        response.send({ result: subtraction });
    } catch (error) {
        throw error;
    }
});

router.post("/divide", async(request, response) => {
    const numbers = request.body;
    try {
        let division = Object.values(numbers).reduce(function(num1, num2) {
            return num1 / num2;
        });
        response.send({ result: division });
    } catch (error) {
        throw error;
    }
});
module.exports = router; 