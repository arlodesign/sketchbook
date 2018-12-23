/*---
description: Reload page for a different variation.
---*/

let angle = 0;
let scalar = 0;
let speed;
let max;

function setup() {
  pixelDensity(4);
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent('my-canvas');
  background('white');
  noFill();
  strokeWeight(2);
  speed = random(10, 20);
  max =
    Math.sqrt(Math.pow(width * (2 / 3), 2) + Math.pow(height * (2 / 3), 2)) * 2;
}

function draw() {
  const x1 = width / 3 + cos(angle) * random(scalar - 100, scalar + 100);
  const y1 = height / 3 + sin(angle) * random(scalar - 100, scalar + 100);
  const x2 = width / 3 + sin(angle) * random(scalar - 100, scalar + 100);
  const y2 = height / 3 + cos(angle) * random(scalar - 100, scalar + 100);

  triangle(width / 3, height / 3, x1, y1, x2, y2);

  push();
  // stroke(255);
  strokeWeight(1);
  ellipse(width / 3, height / 3, scalar);
  pop();

  if (scalar > max) {
    noLoop();
    drawingComplete = true;
  }

  angle += speed;
  scalar += speed;
}
