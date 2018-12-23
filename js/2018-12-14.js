/*---
description: Reload page for a different variation.
---*/

let scalar;
let x;
let y;
let x2;
let y2;

function setup() {
  pixelDensity(4);
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent('my-canvas');
  background('white');
  noFill();
  stroke(0);
  scalar = random(10, 20);
  x = x2 = width / 2;
  y = y2 = height / 2;
}

function draw() {
  const moveX = random([-scalar, scalar]);
  const moveY = random([-scalar, scalar]);

  strokeWeight(scalar * noise(x, y));
  x = x2 + moveX;
  y = y2 + moveY;

  if (x > 0 && y > 0 && x < width && y < height) {
    line(x2, y2, x, y);
    line(width - x2, height - y2, width - x, height - y);
  } else {
    noLoop();
    drawingComplete = true;
  }

  x2 = x;
  y2 = y;
}
