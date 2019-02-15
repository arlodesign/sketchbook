/*---
description: 
---*/

const GRID_SIZE = 5;
const MAX_Z = 400;

function setup() {
  const myCanvas = createCanvas(660, 840, WEBGL);
  myCanvas.parent("my-canvas");
  stroke(255);
  strokeWeight(0.5);
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
        frameCount / 250
      );
      col.push([x, y, map(N, 0, 1, -MAX_Z, MAX_Z)]);
      y += GRID_SIZE;
    }
    points.push(col);
    x += GRID_SIZE;
    y = GRID_SIZE - height / 2;
  }

  points.forEach(col => {
    beginShape();
    col.forEach(p => vertex(...p));
    endShape();
  });
  for (let i = 0; i < points[0].length; i++) {
    beginShape();
    for (let j = 0; j < points.length; j++) {
      vertex(...points[j][i]);
    }
    endShape();
  }

  drawingComplete = true;
}
