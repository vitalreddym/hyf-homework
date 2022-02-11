
// The fastest presser in this realm - game

const body = document.querySelector("body");
let timeInput = document.querySelector(".time-input");
let gameStartButton = document.querySelector(".start-button");
let sSide = document.querySelector(".left-side");
let lSide = document.querySelector(".right-side");
let gameResult = document.querySelector(".game-result");
let restartButton = document.querySelector(".restart-button");
let sCounter = document.querySelector(".left-count");
let lCounter = document.querySelector(".right-count");

gameStartButton.addEventListener("click", function startGame() {
    let s = 0;
    let l = 0;

    if (timeInput.value === 0 || timeInput.value === " ") {
        gameResult.innerHTML = "Please start the game";
    } else {
        body.addEventListener("keydown", function keyStroke(press) {
            setTimeout(function () {
                timeInput.value = " ";
                body.removeEventListener("keydown", keyStroke);
            }, timeInput.value * 1000);

            if (press.key === "s") {
                s++;
                sCounter.innerHTML = s;
            } else if (press.key === "l") {
                l++;
                lCounter.innerHTML = l;
            }
            return s, l;
        });
    }

    setTimeout(function () {
        timeInput.value = "";
        body.removeEventListener("click", startGame);
        if (s > l && s != 0 && l != 0) {
            gameResult.innerHTML = "Game Result: S wins";
        } else if (l > s && s != 0 && l != 0) {
            gameResult.innerHTML = "Game Result: L wins";
        } else if (s == l && s != 0 && l != 0) {
            gameResult.innerHTML = "Both are equal, game is draw";
        } else if (s == 0 || l == 0) {
            gameResult.innerHTML = "Please start the game";
        }
    }, timeInput.value * 1000);
});

restartButton.addEventListener("click", () => {
    s = 0;
    l = 0;
    gameResult.innerHTML = " ";
    sCounter.innerHTML = " ";
    lCounter.innerHTML = " ";
});