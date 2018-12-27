/*---
description: Move pointer or finger over sketch.
---*/

const gap = 20;

function setup() {
  pixelDensity(4);
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent("my-canvas");
  noFill();
}

function draw() {
  background("white");

  const mx = map(mouseX, 0, width, -width, width * 2, true);
  const my = map(mouseY, 0, height, -height, height * 2, true);

  for (let y = 0; y <= height; y += gap) {
    bezier(0, y, mx, my, width - mx, height - my, width, y);
  }

  for (let x = gap; x < width; x += gap) {
    bezier(x, 0, mx, my, width - mx, height - my, x, height);
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
