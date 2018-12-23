/*---
description: Reload page for a different variation.
---*/

const points = 2160;

let size;
let xFocus;
let yFocus;

function setup() {
  pixelDensity(4);
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent('my-canvas');
  background(255);
  strokeWeight(0.75);
  size = random(250, 350);
  xFocus = width / 2;
  yFocus = height / 2;
}

function draw() {
  let xEnd;
  let yEnd;
  let xHandle;
  let yHandle;

  xEnd = xFocus + (cos((frameCount % points) * (TWO_PI / points)) * size) / 2;
  yEnd = yFocus + (sin((frameCount % points) * (TWO_PI / points)) * size) / 2;
  xHandle = xFocus + cos((frameCount % points) * (TWO_PI / points)) * size;
  yHandle = yFocus + sin((frameCount % points) * (TWO_PI / points)) * size;

  const x = xFocus + cos(frameCount % points) * (size / 7);
  const y = yFocus + sin(frameCount % points) * (size / 7);

  const noiseVal = noise(frameCount) * size;
  const xStart = xFocus + cos((frameCount % points) + size) * (size + noiseVal);
  const yStart = yFocus + sin((frameCount % points) + size) * (size + noiseVal);

  const clr = `rgba(0, 0, 0, ${noise(x, y) / 2})`;

  stroke(clr);
  noFill();
  bezier(x, y, xStart, yStart, xHandle, yHandle, xEnd, yEnd);

  fill(clr);
  ellipse(xStart, yStart, 2);

  if (frameCount === points) {
    noLoop();
    drawingComplete = true;
  }
}
