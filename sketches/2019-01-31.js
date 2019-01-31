/*---
description: Reload page for a different variation.
---*/

let r1 = 0;
let r2 = 0;
let r3 = 0;
let r1Speed;
let r2Speed;
let r3Speed;

function setup() {
  pixelDensity(4);
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent("my-canvas");
  background(255);

  r1Speed = (random(0.1, 0.2) / TWO_PI) * random([-1, 1]);
  r2Speed = (random(0.3, 0.5) / TWO_PI) * random([-1, 1]);
  r3Speed = random(0.02, 0.03) / TWO_PI;

  noFill();
  stroke(0, 0, 0, 128);
}

function draw() {
  translate(width / 2, height * sin(r3));
  const { x, y } = polarToCartesian(0, 0, r1, 200);
  const HANDLE = polarToCartesian(x, y, r2, sin(r3) * 500);

  if (height * sin(r3) < 0 && y < 0 && HANDLE.y < 0) {
    noLoop();
    drawingComplete = true;
    return;
  }

  beginShape();
  vertex(0, 0);
  quadraticVertex(HANDLE.x, HANDLE.y, x, y);
  endShape();

  r1 += r1Speed;
  r2 += r2Speed;
  r3 += r3Speed;
}
