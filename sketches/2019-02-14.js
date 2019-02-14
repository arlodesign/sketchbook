/*---
description: 
---*/

const GRID_SIZE = 10;

function getColor(angle) {
  return color(abs(sin(angle)) * 100, abs(tan(-angle + PI)) * 100, 100);
}

function setup() {
  pixelDensity(4);
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent("my-canvas");
  noStroke();
  colorMode(HSB, 100);
  noiseDetail(2, 0.5);
}

function draw() {
  background(255);
  let x = GRID_SIZE / 2;
  let y = GRID_SIZE / 2;
  while (x < width) {
    while (y < height) {
      const N = noise(
        x * (GRID_SIZE / 1000),
        y * (GRID_SIZE / 1000),
        frameCount / 100
      );
      fill(getColor(TWO_PI * N));
      ellipse(x, y, GRID_SIZE * N * 1.5, GRID_SIZE * N * 1.5);
      y += GRID_SIZE;
    }
    x += GRID_SIZE;
    y = GRID_SIZE / 2;
  }
}

setTimeout(() => {
  drawingComplete = true;
}, 1000);
