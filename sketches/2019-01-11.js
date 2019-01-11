/*---
description: Reload page for a different variation.
---*/

let angle = 0.0;
let angleIncrement;
let distance;
let variantA;
let variantB;

function setup() {
  pixelDensity(4);
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent("my-canvas");

  angleIncrement = 0.01 / TWO_PI;
  distance = height / 2;

  variantA = floor(random([1, 2, 3, 5]));
  variantB = floor(random([7, 11, 13, 17]));

  background(255);
  strokeWeight(0.25);
  noFill();
}

function draw() {
  angle += angleIncrement;

  let x1 = width / 2 + cos(angle * variantA) * distance;
  let y1 = height / 2 + sin(angle * variantB) * distance;
  let x2 = width / 2 + cos(angle * variantB + HALF_PI) * distance;
  let y2 = height / 2 + sin(angle * variantA + HALF_PI) * distance;
  let x3 = width / 2 + cos(angle * variantA + PI) * distance;
  let y3 = height / 2 + sin(angle * variantB + PI) * distance;
  let x4 = width / 2 + cos(angle * variantB + PI * 0.75) * distance;
  let y4 = height / 2 + sin(angle * variantA + PI * 0.75) * distance;

  bezier(x1, y1, x2, y2, x3, y3, x4, y4);

  if (angle > PI) {
    noLoop();
    drawingComplete = true;
  }
}
