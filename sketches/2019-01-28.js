/*---
description: Reload page for a different variation.
---*/

const GRID = 30;
const POINT_COUNT = 10;

let points = [];

function drawAThing(x, y) {
  const { vector, color } = getFarthestPoint(x, y);
  stroke(color, color, color, 32);
  line(x, y, vector.x, vector.y);
}

function getFarthestPoint(x, y) {
  points.sort(
    (a, b) =>
      dist(x, y, a.vector.x, a.vector.y) - dist(x, y, b.vector.x, b.vector.y)
  );
  return points[POINT_COUNT - 1];
}

function setup() {
  pixelDensity(4);
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent("my-canvas");
  background(255);
  points = [...Array(POINT_COUNT).keys()].map(i => ({
    vector: createVector(
      randomGaussian(width / 2, (width / GRID) * 3),
      randomGaussian(height / 2, (height / GRID) * 3)
    ),
    color: [255, 255 * 0.666, 0][i % 3]
  }));
}

function draw() {
  const Y = floor(frameCount / (width / GRID));
  const X = floor(frameCount - (width / GRID) * Y);

  if (Y < height / GRID) {
    for (let xi = 0; xi < GRID; xi++) {
      for (let yi = 0; yi < GRID; yi++) {
        !(frameCount % floor(GRID / 13)) &&
          drawAThing(X + (width / GRID) * xi, Y + (height / GRID) * yi);
      }
    }
  } else {
    noLoop();
    drawingComplete = true;
  }
}
