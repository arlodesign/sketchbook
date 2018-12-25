/*---
description: Move pointer or finger over sketch. Reload page for a different variation.
---*/

let weight;
let flip = false;

function setup() {
  pixelDensity(4);
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent('my-canvas');
  noFill();
  // noLoop();
  weight = random(2, 3);
}

function draw() {
  background(0);
  for (let x = -height; x <= width; x += weight + 1 + noise(x)) {
    const end = map(
      sin(x),
      -1, 1,
      width, dist(0, 0, width, height)
    );
    strokeWeight(weight);
    stroke(255);
    bezier(
      width - x, height + x,
      width - x, height + x,
      mouseX, mouseY,
      width - x - end, height + x - end
    );
  }
}

function touchMoved() {
  if (mouseX >= 0 && mouseY >= 0 && mouseX <= width && mouseY <= height) {
    return false
  };
}

setTimeout(() => {
  drawingComplete = true;
}, 1000);