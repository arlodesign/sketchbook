/*---
description: Reload page for a different variation.
---*/

let colorAlt;
let weightAlt;
let frameCountDiv;
let dist;
let distIncrement;

function setup() {
  pixelDensity(4);
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent("my-canvas");
  while (
    colorAlt === weightAlt ||
    colorAlt % weightAlt === 0 ||
    weightAlt % colorAlt === 0
  ) {
    colorAlt = floor(random(5, 10));
    weightAlt = floor(random(5, 10));
  }
  frameCountDiv = -random(20, 30);
  dist = height / 3;
  distIncrement = -frameCountDiv / 100;
  background("white");
  noFill();
}

function draw() {
  stroke(frameCount % colorAlt ? `rgba(0, 0, 0, 0.3)` : 255);
  strokeWeight(frameCount % weightAlt ? colorAlt * 2 : weightAlt * 2);

  const x = width / 2 + sin(frameCount / frameCountDiv) * dist;
  const y = height / 2 + cos(frameCount / frameCountDiv) * dist;

  bezier(
    width / 2,
    height / 2,
    lerp(width / 2, x, distIncrement),
    height / 2 + cos(frameCount / frameCountDiv + HALF_PI) * dist,
    width / 2 + sin(frameCount / frameCountDiv + HALF_PI) * dist,
    lerp(height / 2, y, distIncrement),
    x,
    y
  );
  bezier(
    width / 2,
    height / 2,
    lerp(width / 2, width - x, distIncrement),
    height / 2 + cos(frameCount / frameCountDiv - HALF_PI) * dist,
    width / 2 + sin(frameCount / frameCountDiv - HALF_PI) * dist,
    lerp(height / 2, height - y, distIncrement),
    width - x,
    height - y
  );
  dist -= distIncrement;
  if (dist <= 0) {
    noLoop();
    drawingComplete = true;
  }
}
