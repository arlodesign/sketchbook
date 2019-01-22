/*---
description: Reload page for a different variation.
---*/

let speed1;
let speed2;
let r1 = 0;
let r2 = 0;
let variant;
let prevPoint;

function setup() {
  pixelDensity(4);
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent("my-canvas");
  background(255);
  stroke(0, 0, 0, 64);

  speed1 = random(0.02, 0.05) / TWO_PI;
  speed2 = random(0.2, 0.3) / TWO_PI;
  variant = floor(random(2, 6));
}

function draw() {
  const AXIS_X = polarToCartesianX(width / 2, r1 * variant, 100);
  const AXIS_Y = polarToCartesianY(height / 2, sin(r1), 200);

  const X = polarToCartesianX(AXIS_X, r2, 100);
  const Y = polarToCartesianY(AXIS_Y, r2 * variant, 100);

  if (prevPoint) {
    line(X, Y, prevPoint.X, prevPoint.Y);
    line(width - X, height - Y, width - prevPoint.X, height - prevPoint.Y);
    line(X, height - Y, prevPoint.X, height - prevPoint.Y);
    line(width - X, Y, width - prevPoint.X, prevPoint.Y);
  }

  r1 += speed1;
  r2 += speed2;
  prevPoint = { X, Y };
}

setTimeout(() => {
  drawingComplete = true;
}, 60000);
