console.log("inside warmup file");

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

getDiameter() {
    return this.radius * 2;

}

getCircumference() {
    return Math.PI * this.radius * 2;

}
getArea() {
    return Math.PI * this.radius * this.radius;
}
}

const circle = new Circle(20);
console.log(circle.getDiameter());
console.log(circle.getCircumference());
console.log(circle.getArea());

const circles = new Circle(10);
console.log(circles.getDiameter());
console.log(circles.getCircumference());
console.log(circles.getArea());

