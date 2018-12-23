/*---
description: Reload page for a different variation.
---*/

let maxRotation;
let size;
let scalar;
let xFocus;
let yFocus;
let angle = 0;

function setup() {
  pixelDensity(4);
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent('my-canvas');
  background(0);
  noFill();
  maxRotation = 60 * PI;
  size = random(250, 300);
  scalar = random(10, 15) / maxRotation;
  xFocus = width / 2;
  yFocus = height / 2;
}

function draw() {
  let xEnd;
  let yEnd;
  let xHandle;
  let yHandle;
  switch (frameCount % 3) {
    case 0:
      xEnd = xFocus + (cos((7 * PI) / 6) * size) / 2;
      yEnd = yFocus + (sin((7 * PI) / 6) * size) / 2;
      xHandle = xFocus + cos((7 * PI) / 6) * size * 2;
      yHandle = yFocus + sin((7 * PI) / 6) * size * 2;
      break;
    case 1:
      xEnd = xFocus + (cos((11 * PI) / 6) * size) / 2;
      yEnd = yFocus + (sin((11 * PI) / 6) * size) / 2;
      xHandle = xFocus + cos((11 * PI) / 6) * size * 2;
      yHandle = yFocus + sin((11 * PI) / 6) * size * 2;
      break;
    case 2:
      xEnd = xFocus + (cos(HALF_PI) * size) / 2;
      yEnd = yFocus + (sin(HALF_PI) * size) / 2;
      xHandle = xFocus + cos(HALF_PI) * size * 2;
      yHandle = yFocus + sin(HALF_PI) * size * 2;
      break;
  }

  const noiseVal = noise(frameCount) * (size / 20);
  const xStart = xFocus + cos(angle) * (size - noiseVal);
  const yStart = yFocus + sin(angle) * (size - noiseVal);

  stroke(frameCount % 5 ? 255 : 0);
  strokeWeight(frameCount % 5 ? 1 : 2);

  bezier(xStart, yStart, xFocus, yFocus, xHandle, yHandle, xEnd, yEnd);

  angle += scalar;
  if (angle > maxRotation) {
    noLoop();
    drawingComplete = true;
  }
}
