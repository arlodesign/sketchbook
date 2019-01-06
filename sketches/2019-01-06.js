/*---
description: Reload page for a different variation.
---*/

let angle = 0.0;
let angleIncrement;
let distance;
let variantA;
let variantB;
let size;

function setup() {
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent("my-canvas");

  angleIncrement = random(0.01, 0.03);
  distance = width / 3;
  variantA = random(2, 2.3);
  variantB = random(2.7, 3);
  size = random(width * 0.25, width * 0.333);

  background(255);
  noFill();
  strokeWeight(map(angleIncrement, 0.01, 0.03, 0.25, 0.4));
}

function draw() {
  angle += angleIncrement;

  const x = width / 2 + cos(angle * variantA) * distance;
  const y = height / 2 + sin(angle * variantB) * distance;
  const ellipseX = size * abs(cos(angle * variantB));
  const ellipseY = size * abs(sin(angle * variantA));

  ellipse(x, y, ellipseX, ellipseY);
  ellipse(width - x, height - y, ellipseX, ellipseY);

  if (angle > TWO_PI) {
    noLoop();
    drawingComplete = true;
  }
}
