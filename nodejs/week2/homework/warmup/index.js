const express = require("express");
const app = express();
const router = express.Router();

app.use("/numbers", router);

router.get("/add", (req, res) => {
    const firstNumber = req.query.first;
    const secondNumber = req.query.second;
    res.send(`The sum is ${Number(firstNumber) + Number (secondNumber)}`);
});

router.get("/multiply/:firstNumber/:secondNumber", (req, res) => {
    res.send(`Multiplication is ${Number(req.params.firstNumber) * Number(req.params.secondNumber)}`);
});

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));