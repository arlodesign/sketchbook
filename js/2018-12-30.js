/*---
description: Be patient. Reload page for a different variation.
---*/

let maxSize;
let minSize;
let circles = [];
let increment = 1;
let noDrawCount = 0;
let noDrawLimit = 1500;

class Circle {
  constructor(distance = 0) {
    this.distance = distance;
    this.angle = frameCount / increment;
    this.r = constrain(noise(this.angle) * maxSize, minSize, maxSize);
    this._setXY();
  }
  _setXY() {
    this.x = width / 2 + cos(this.angle) * this.distance;
    this.y = height / 2 + sin(this.angle) * this.distance;
  }
  setDistance(distance) {
    this.distance = distance;
    this._setXY();
  }
  increaseDistance() {
    this.distance += 1;
    this._setXY();
  }
  isOnCanvas() {
    return (
      this.x > this.r &&
      this.x < width - this.r &&
      this.y > this.r &&
      this.y < height - this.r
    );
  }
  draw() {
    ellipse(this.x, this.y, this.r * 2);
  }
}

function setup() {
  pixelDensity(4);
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent("my-canvas");
  maxSize = random(width / 4, width / 3);
  minSize = 5;
  circles.push(new Circle());
  fill(0);
  stroke(0);
  circles[0].r = maxSize;
  circles[0].draw();
}

function draw() {
  background(255);

  if (maxSize === minSize && noDrawCount === noDrawLimit) {
    noLoop();
  }

  circles.forEach(c => c.draw());

  if (noDrawCount < noDrawLimit) {
    push();
    noStroke();
    fill(255);
    rect(0, 0, 80, 30);
    fill(0);
    text(`${noDrawCount}/${noDrawLimit}`, 10, 20);
    pop();
  }

  const newCircle = new Circle();
  newCircle.setDistance(circles[0].r + newCircle.r);

  if (noDrawCount < noDrawLimit) {
    push();
    stroke("red");
    strokeWeight(1);
    line(
      width / 2,
      height / 2,
      width / 2 + cos(newCircle.angle) * height,
      height / 2 + sin(newCircle.angle) * height
    );
    pop();
  }

  while (
    circles.some(
      c => dist(newCircle.x, newCircle.y, c.x, c.y) < newCircle.r + c.r
    )
  ) {
    newCircle.increaseDistance();
  }
  if (newCircle.isOnCanvas()) {
    circles.push(newCircle);
    if (maxSize > minSize) increment += 5;
    noDrawCount = 0;
  } else {
    maxSize = max(maxSize - 0.1, minSize);
    increment = maxSize > minSize ? max(1, increment - 1) : increment;
    noDrawCount++;
  }
}

// UNCOMMENT FOR INTERACTIVE SKETCHES
// function touchMoved() {
//   if (mouseX >= 0 && mouseY >= 0 && mouseX <= width && mouseY <= height) {
//     return false
//   };
// }

// If you want to capture a screenshot of the drawing at a different time,
// set drawingComplete = true when it makes sense.
setTimeout(() => {
  drawingComplete = true;
}, 1000);
