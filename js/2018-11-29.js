/*---
description: Move pointer or finger over sketch.
---*/

// Draws an equilaterial triangle from a center point that fits within a circle
// of a given radius.
// https://www.quora.com/What-is-the-area-of-an-equilateral-triangle-inside-a-circle-with-radius-of-10-cm/answer/Robert-Nichols-34
function equilateralTriangle(x, y, radius) {
  triangle(
    x,
    y - radius,
    x - (Math.sqrt(3) / 2) * radius,
    y + radius / 2,
    x + (Math.sqrt(3) / 2) * radius,
    y + radius / 2
  );
}

const tri = 20;
let rotation = 0;
let rotationIncrement;

function setup() {
  pixelDensity(4);
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent('my-canvas');
  noFill();
  angleMode(DEGREES);
}

function draw() {
  background('white');
  rotation = map(mouseX, 0, width, 0, 60);
  rotationIncrement = map(
    mouseY,
    0,
    height,
    0,
    60 / (Math.floor(width / tri) * Math.floor(height / tri))
  );
  for (let h = 0; h < Math.ceil(height / (tri / 2)) + 2; h += 2) {
    for (let w = 0; w < Math.ceil(width / (tri / 2)) + 2; w += 2) {
      const x = w * (tri / 2);
      const y = h * (tri / 2);
      push();
      translate(x, y);
      rotate(rotation);
      equilateralTriangle(0, 0, tri);
      pop();
      rotation += rotationIncrement;
    }
  }
}

function touchMoved() {
  if (mouseX >= 0 && mouseY >= 0 && mouseX <= width && mouseY <= height) {
    return false;
  }
}

setTimeout(() => {
  drawingComplete = true;
}, 1000);
