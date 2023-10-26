class Circle {
  constructor(radius = 1.0, color = "red") {
    this.radius = radius;
    this.color = color;
  }

  getRadius() {
    return this.radius;
  }

  setRadius(radius) {
    this.radius = radius;
  }

  getColor() {
    return this.color;
  }

  setColor(color) {
    this.color = color;
  }

  toString() {
    return `Circle - Radius: ${this.radius}, Color: ${this.color}`;
  }

  getArea() {
    return Math.PI * this.radius ** 2;
  }

  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
}

const circle1 = new Circle();
console.log(circle1.toString()); 

const circle2 = new Circle(2.5, "blue");
console.log(circle2.toString()); 

circle2.setRadius(3.0);
console.log(`Updated Radius: ${circle2.getRadius()}`); 

console.log(`Area: ${circle2.getArea()}`); 
console.log(`Circumference: ${circle2.getCircumference()}`); 
