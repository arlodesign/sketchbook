/*---
description: Reload page for a different variation.
---*/

let scalar;
let multiplier;
let multiplier2;
let x;
let y = 0;
let rectHeight;
let pass = 0;

function setup() {
  pixelDensity(4);
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent("my-canvas");
  fill("rgba(0, 0, 0, 0.4)");
  noStroke();
  background(255);
  scalar = floor(random(3, 7));
  multiplier = random();
  multiplier2 = random(1, 2);
  rectHeight = (height - scalar + 1) / scalar;
  x = -rectHeight;
}

function draw() {
  const RECT_WIDTH = scalar * map(noise(x, y), 0, 1, scalar, 1);
  const LEAN =
    scalar * map(noise(x, y), 0, 1, -scalar * multiplier, scalar * multiplier);
  quad(
    x + LEAN,
    y,
    x + RECT_WIDTH + LEAN,
    y,
    x + RECT_WIDTH - LEAN,
    y + rectHeight,
    x - LEAN,
    y + rectHeight
  );
  x += RECT_WIDTH + random(scalar * multiplier, scalar);
  if (x > width + rectHeight) {
    x = -rectHeight;
    y += rectHeight + 1;
  }
  if (y > height) {
    y = 0;
    multiplier *= multiplier2;
    pass++;
    if (pass === 4) {
      noLoop();
      drawingComplete = true;
    }
  }
}
