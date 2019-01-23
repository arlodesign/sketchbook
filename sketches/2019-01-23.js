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
let prevPoints = [];

function setup() {
  pixelDensity(4);
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent("my-canvas");
  background(255);

  fibers = floor(random(2, 7));
  speed1 = random(0.02, 0.05) / TWO_PI;
  speed2 = random(1, 2) / TWO_PI;
  speed3 = random(0.1) / TWO_PI;
  rCanvas = random(2000, 5000) / TWO_PI;
  variant = floor(random(4, 7));
}

function draw() {
  translate(width / 2, height / 2);
  rotate(r3);
  let x;
  let y;

  // stroke(frameCount % 2 ? 255 : 0);

  for (let i = 0; i < fibers; i++) {
    const AXIS_X = polarToCartesianX(0, r1, width / variant);
    const AXIS_Y = polarToCartesianY(0, r1 * variant, height / variant);

    x = polarToCartesianX(
      AXIS_X,
      r2 * variant + (TWO_PI / fibers) * i,
      variant
    );
    y = polarToCartesianY(AXIS_Y, r2 + (TWO_PI / fibers) * i, variant);

    if (prevPoints.length === fibers) {
      stroke(frameCount % fibers ? 0 : `rgba(255,255,255,0.8)`);
      line(x, y, prevPoints[i].x, prevPoints[i].y);
    }

    prevPoints[i] = { x, y };
  }

  r1 += speed1;
  r2 += speed2;
  r3 += speed3;
}

setTimeout(() => {
  drawingComplete = true;
}, 3 * 60 * 1000);
