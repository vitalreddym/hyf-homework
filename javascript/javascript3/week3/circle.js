// Paint a circle to a canvas element

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.beginPath();
ctx.arc(125, 100, 80, 0, 2 * Math.PI);
ctx.strokeStyle = '#ba1414';
ctx.fillStyle = '#328fa8';
ctx.lineWidth = 5;
ctx.stroke();
ctx.fill();



// Class creation
class Circle {
  constructor(x, y, r, startAngle, endAngle, fillColor) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.fillColor = fillColor;
  }
  draw() {
    const canvas = document.getElementById('myCanvas');
    const context = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context.beginPath();
    context.arc(this.x, this.y, this.r, this.startAngle, this.endAngle);
    context.fillStyle = this.fillColor;
    context.fill();
  }
}
const c1 = new Circle(150, 150, 80, 0, 2 * Math.PI, "pink");
c1.draw();
const c2 = new Circle (200, 300, 120, 0, 2 * Math.PI, "blue");
c2.draw();

// create a circle with random x, y, radius with a time interval

function drawCircle() {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  const randomX = Math.floor(Math.random() * window.innerWidth);
  const randomY = Math.floor(Math.random() * window.innerHeight);
  const randomR = Math.floor(Math.random() * window.innerWidth / 4);

  const randomCircle = new Circle(
    randomX,
    randomY,
    randomR,
    0,
    2 * Math.PI,
    randomColor
  );
  randomCircle.draw();
}

setInterval(() => {
  drawCircle();
}, 100);
