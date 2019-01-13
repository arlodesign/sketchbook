/*---
description: Reload page for a different variation.
---*/

let vectors = [];
let maxDist;
let gridSize;
let showDots = true;

function setup() {
  pixelDensity(1);
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent("my-canvas");

  gridSize = floor(random(25, 50));

  for (let x = 0; x <= gridSize; x++) {
    for (let y = 0; y <= gridSize; y++) {
      const xc = floor((width / gridSize) * x);
      const yc = floor((height / gridSize) * y);
      if (
        dist(xc, yc, width / 2, height / 2) < width / 2 - 100 &&
        random() < 0.5
      ) {
        vectors.push({
          vector: createVector(xc, yc),
          reached: false,
          reachedBy: 0
        });
      }
    }
  }

  vectors[0].reached = true;
  vectors[0].reachedBy = -1;

  maxDist = dist(0, 0, width, height);

  background(0);
  strokeWeight(2);
  fill(0);
}

function draw() {
  fill(255);
  ellipse(width / 2, height / 2, width / 2 + 100 + (width / gridSize) * 8);

  push();
  stroke(showDots ? "red" : 255);
  vectors
    .filter(v => !v.reached)
    .forEach(({ vector }) => point(vector.x, vector.y));
  pop();

  let shortestDist = maxDist;
  let reachedByIndex;
  let unreachedIndex;

  if (!drawingComplete) {
    vectors.forEach((uv, ui) => {
      if (!uv.reached) {
        vectors.forEach((rv, ri) => {
          if (rv.reached) {
            const thisDist = dist(
              uv.vector.x,
              uv.vector.y,
              rv.vector.x,
              rv.vector.y
            );
            if (thisDist < shortestDist) {
              shortestDist = thisDist;
              unreachedIndex = ui;
              reachedByIndex = ri;
            }
          }
        });
      }
    });
    vectors[unreachedIndex].reached = true;
    vectors[unreachedIndex].reachedBy = reachedByIndex;
  }

  vectors.forEach(({ vector, reached, reachedBy }, i) => {
    if (reached && reachedBy > -1) {
      const { x, y } = vectors[reachedBy].vector;
      stroke(0);
      strokeWeight(2);
      noFill();
      line(vector.x, vector.y, x, y);

      fill(0);
      strokeWeight(1);
      triangle(vector.x, vector.y, x, y, x, vector.y);

      if ((vector.x === x || vector.y === y) && i % 4 === 0) {
        ellipse(x, y, dist(x, y, vector.x, vector.y));
      }
    }
  });

  if (vectors.filter(v => v.reached).length === vectors.length) {
    noLoop();
    drawingComplete = true;
  }
}
