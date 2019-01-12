/*---
description: Reload page for a different variation.
---*/

let vectors = [];
let gridSize;
let maxDist;
let showDots = true;

function setup() {
  pixelDensity(4);
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent("my-canvas");
  background(255);

  let gridSize = floor(random(25, 50));

  maxDist = dist(0, 0, width, height);

  for (let x = 0; x <= gridSize; x++) {
    for (let y = 0; y <= gridSize; y++) {
      if (random() < 0.2) {
        vectors.push({
          vector: createVector((width / gridSize) * x, (height / gridSize) * y),
          reached: false,
          reachedBy: 0
        });
      }
    }
  }

  vectors[0].reached = true;
  vectors[0].reachedBy = -1;
}

function draw() {
  push();
  stroke(showDots ? "red" : 255);
  strokeWeight(1);
  vectors
    .filter(v => !v.reached)
    .forEach(({ vector }) => point(vector.x, vector.y));
  pop();

  vectors.forEach(({ vector, reached, reachedBy }, i) => {
    if (reached && reachedBy > -1) {
      const { x, y } = vectors[reachedBy].vector;
      stroke(0);
      strokeWeight(2);
      noFill();
      line(vector.x, vector.y, x, y);

      fill(0);
      triangle(vector.x, vector.y, x, y, x, vector.y);

      if ((vector.x === x || vector.y === y) && i % 3 === 0) {
        ellipse(x, y, dist(x, y, vector.x, vector.y));
      }
    }
  });

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

  if (vectors.filter(v => v.reached).length === vectors.length) {
    noLoop();
    drawingComplete = true;
  }
}
