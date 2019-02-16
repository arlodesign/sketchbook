/*---
description: 
---*/

const GRID_SIZE = 20;
const MAX_Z = 400;

function getColor(angle) {
  return color(abs(cos(angle)) * 100, abs(sin(-angle + PI)) * 100, 100);
}

function setup() {
  const myCanvas = createCanvas(660, 840, WEBGL);
  myCanvas.parent("my-canvas");
  stroke(255);
  noFill();
  noiseDetail(4, 0.5);
  rectMode(CENTER);
  camera(-width / 4, -height / 4, MAX_Z, -width / 4, -height / 4, 0, 0, 1, 0);
}

function draw() {
  background(0);

  let x = GRID_SIZE - width / 2;
  let y = GRID_SIZE - height / 2;
  let points = [];

  while (x < 0) {
    let col = [];
    while (y < 0) {
      const N = noise(
        x * (GRID_SIZE / 1000),
        y * (GRID_SIZE / 1000),
        frameCount / 100
      );
      col.push([x, y, map(N, 0, 1, -MAX_Z, MAX_Z)]);
      y += GRID_SIZE;
    }
    points.push(col);
    x += GRID_SIZE;
    y = GRID_SIZE - height / 2;
  }

  points.forEach(col => {
    col.forEach(p => {
      stroke(getColor(p[2] / 100));
      line(
        ...p,
        polarToCartesianX(-width / 4, frameCount / 100, GRID_SIZE * 10),
        polarToCartesianY(-height / 4, frameCount / 100, GRID_SIZE * 10),
        -MAX_Z
      );
      push();
      translate(...p);
      noStroke();
      fill(getColor(p[2] / 100));
      sphere(GRID_SIZE / 10);
      pop();
    });
  });

  drawingComplete = true;
}
