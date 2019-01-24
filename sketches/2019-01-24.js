/*---
description: Reload page for a different variation.
---*/

let fibers;
let speed1;
let speed2;
let r1 = 0;
let r2 = 0;
let r3 = 0;
let variant;
let prevPoint;

function setup() {
  pixelDensity(4);
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent("my-canvas");
  background(0);

  speed1 = random(0.02, 0.05) / TWO_PI;
  speed2 = random(4, 6) / TWO_PI;
  speed3 = random(0.1) / TWO_PI;
  rCanvas = random(2000, 5000) / TWO_PI;
  variant = floor(random(10, 20));
}

function draw() {
  translate(width / 2, height / 2);
  rotate(r3);

  const AXIS_X = polarToCartesianX(0, r1, width / 3);
  const AXIS_Y = polarToCartesianY(0, r1 * variant, height / 3);

  const x = polarToCartesianX(AXIS_X, r2 * variant, variant);
  const y = polarToCartesianY(AXIS_Y, r2, variant);

  if (prevPoint) {
    noStroke();
    fill(frameCount % 2 ? `rgba(0,0,0,0.5)` : `rgba(255,255,255,0.5)`);
    triangle(0, 0, x, y, prevPoint.x, prevPoint.y);
    stroke(255);
    line(x, y, prevPoint.x, prevPoint.y);
  }

  prevPoint = { x, y };

  r1 += speed1;
  r2 += speed2;
  r3 += speed3;
}

setTimeout(() => {
  drawingComplete = true;
}, 60000);
