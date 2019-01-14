/*---
description: Reload page for a different variation.
---*/

let angle = 0.0;
let angleIncrement;
let distance;
let variant;
let fun;

function setup() {
  pixelDensity(4);
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent("my-canvas");

  variant = floor(random(2, 10));
  fun = floor(random(3));

  angleIncrement = 0.03 / TWO_PI;
  distance = height / 6;

  background(255);
  stroke(`rgba(0, 0, 0, 0.5)`);
  strokeWeight(0.5);
  noFill();
}

function draw() {
  angle += angleIncrement;

  let xAxis = width / 2 + cos(angle) * (width / 4);
  let yAxis = height / 2 + cos(angle) * (width / 4);

  let x1 = xAxis + cos(angle) * distance;
  let y1 = yAxis + sin(angle * variant) * distance;
  let x3 = xAxis + cos(angle + HALF_PI) * distance;
  let y3 = yAxis + sin(angle * variant + HALF_PI) * distance;
  let x2 = xAxis + cos(angle + PI) * distance;
  let y2 = yAxis + sin(angle * variant + PI) * distance;

  switch (fun) {
    case 0:
      bezier(x1, y1, x2, y2, x3, y3, x1, y1);
      break;
    case 1:
      bezier(x2, y2, x1, y1, x3, y3, x2, y2);
      break;
    default:
      bezier(x3, y3, x1, y1, x2, y2, x3, y3);
      break;
  }

  if (angle > TWO_PI) {
    noLoop();
    drawingComplete = true;
  }
}
