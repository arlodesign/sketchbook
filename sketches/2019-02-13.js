/*---
description: 
---*/

const GRID_SIZE = 10;

function setup() {
  pixelDensity(4);
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent("my-canvas");
  fill(0);
  noStroke();
  rectMode(CENTER);
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
      push();
      translate(x, y);
      rect(0, 0, GRID_SIZE * 2 * N, GRID_SIZE * 2 * N);
      pop();
      y += GRID_SIZE;
    }
    x += GRID_SIZE;
    y = GRID_SIZE / 2;
  }
}

setTimeout(() => {
  drawingComplete = true;
}, 1000);
