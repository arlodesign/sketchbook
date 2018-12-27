/*---
description: Move pointer or finger over sketch.
---*/

const size = 20;

let diagonal;

function getHypotenuse(a, b) {
  return Math.sqrt(a * a + b * b);
}

function getDistanceFromPointer(x, y) {
  const a = Math.abs(mouseX - x);
  const b = Math.abs(mouseY - y);
  return getHypotenuse(a, b);
}

function setup() {
  pixelDensity(4);
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent("my-canvas");
  diagonal = getHypotenuse(width, height);
  noStroke();
}

function draw() {
  background("white");
  for (let x = 0; x < width; x += size) {
    for (let y = 0; y < height; y += size) {
      const noiseVal = noise(x, y);
      const scaleVal = map(getDistanceFromPointer(x, y), 0, diagonal, 0.1, 1.1);
      push();
      translate(x + size / 2, y + size / 2);
      fill(`rgba(0, 0, 0, ${noiseVal})`);
      ellipse(0, 0, (size * noiseVal) / scaleVal);
      pop();
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
