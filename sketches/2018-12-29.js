/*---
description: Click or tap to toggle user control of the sketch. Reload page for a different variation.
---*/

let circleSize;
let circles = [];
let gridGap;
let focusX;
let focuxY;
let distance = 0;
let direction = 1;
let userControl = false;

class Circle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  draw() {
    noFill();
    for (let i = 0; i < gridGap; i++) {
      stroke(`rgba(0, 0, 0, ${i / gridGap})`);
      ellipse(
        lerp(this.x, focusX, i / gridGap / 2),
        lerp(this.y, focusY, i / gridGap / 2),
        circleSize -
          i * gridGap +
          map(
            dist(this.x, this.y, focusX, focusY),
            0,
            dist(0, 0, width, height),
            circleSize * 2,
            -circleSize,
            true
          )
      );
    }
  }
}

function setup() {
  pixelDensity(4);
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent("my-canvas");
  circleSize = random(100, 250);
  gridGap = circleSize / 10;

  focusX = width / 2;
  focusY = height / 2;

  const CIRCLES_X = floor((width - gridGap) / (circleSize + gridGap));
  const CIRCLES_Y = floor((height - gridGap) / (circleSize + gridGap));
  const GRIDGAP_X = (width - CIRCLES_X * circleSize) / (CIRCLES_X + 1);
  const GRIDGAP_Y = (height - CIRCLES_Y * circleSize) / (CIRCLES_Y + 1);

  for (
    let x = -GRIDGAP_X - circleSize / 2;
    x <= width + circleSize;
    x += circleSize + GRIDGAP_X
  ) {
    for (
      let y = -GRIDGAP_Y - circleSize / 2;
      y <= height + circleSize;
      y += circleSize + GRIDGAP_Y
    ) {
      circles.push(new Circle(x, y));
    }
  }
}

function draw() {
  background(255);
  focusX = userControl
    ? mouseX
    : width / 2 + cos(frameCount / (gridGap * 2)) * distance;
  focusY = userControl
    ? mouseY
    : height / 2 + sin(frameCount / (gridGap * 2)) * distance;

  circles.forEach(circle => circle.draw());

  distance += direction;
  if (distance === width / 2) direction = -1;
  if (distance < circleSize) direction = 1;

  drawingComplete = true;
}

function mouseClicked() {
  userControl = !userControl;
}

function touchMoved() {
  if (mouseX >= 0 && mouseY >= 0 && mouseX <= width && mouseY <= height) {
    return false;
  }
}
