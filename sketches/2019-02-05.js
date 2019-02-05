/*---
description: Be patient. Reload page for a different variation.
---*/

const GRID = 10;
const POINT_COUNT = 10;

let points = [];
let drawMod = GRID;
while (!isPrime(drawMod)) {
  drawMod--;
}

const colorFunctions = [
  angle => abs(sin(angle)) * 240,
  angle => abs(cos(angle)) * 240,
  angle => abs(tan(angle)) * 240,
  angle => abs(sin(angle + PI)) * 240,
  angle => abs(cos(angle + PI)) * 240,
  angle => abs(tan(angle + PI)) * 240,
  angle => abs(sin(-angle)) * 240,
  angle => abs(cos(-angle)) * 240,
  angle => abs(tan(-angle)) * 240,
  angle => abs(sin(-angle + PI)) * 240,
  angle => abs(cos(-angle + PI)) * 240,
  angle => abs(tan(-angle + PI)) * 240
];

function drawAThing(x, y) {
  const { vector, color } = getFarthestPoint(x, y);
  fill(color);
  noStroke();
  for (let i = 0; i < PI; i += 0.05) {
    ellipse(lerp(x, vector.x, sin(i)), lerp(y, vector.y, sin(i)), 3);
  }
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
  background(128);

  points = [...Array(POINT_COUNT).keys()].map(i => ({
    vector: createVector(
      polarToCartesianX(width / 2, noise(i) * TWO_PI, height),
      polarToCartesianY(height / 2, noise(i) * TWO_PI, height)
    ),
    color: color(
      random(colorFunctions)(i),
      random(colorFunctions)(i),
      random(colorFunctions)(i),
      32
    )
  }));
  blendMode(OVERLAY);
}

function draw() {
  const Y = floor(frameCount / (width / GRID));
  const X = floor(frameCount - (width / GRID) * Y);

  if (Y < height / GRID) {
    for (let xi = 0; xi < GRID; xi++) {
      for (let yi = 0; yi < GRID; yi++) {
        !(frameCount % drawMod) &&
          drawAThing(X + (width / GRID) * xi, Y + (height / GRID) * yi);
      }
    }
  } else {
    noLoop();
    drawingComplete = true;
  }
}
