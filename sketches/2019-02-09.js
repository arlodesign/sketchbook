/*---
description: Click or tap to toggle user control of the sketch.
---*/

let gridSize;
let manualControl = false;

function setup() {
  pixelDensity(4);
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent("my-canvas");
  gridSize = 60;
  noStroke();
  rectMode(CENTER);
  blendMode(SOFT_LIGHT);
}

function drawTheThings(clr, sizeFunction) {
  let x = gridSize + gridSize / 2;
  let y = gridSize + gridSize / 2;
  let alt = true;
  fill(clr);
  while (x < width - gridSize) {
    while (y < height - gridSize) {
      const size = sizeFunction(x, y);
      alt && rect(x, y, size, size);
      !alt && ellipse(x, y, size / 2);
      y += gridSize;
      alt = !alt;
    }
    x += gridSize;
    y = gridSize + gridSize / 2;
    alt = !alt;
  }
}

function draw() {
  background(127);

  let distX = manualControl
    ? mouseX
    : polarToCartesianX(width / 2, frameCount / 10, width / 2);
  let distY = manualControl
    ? mouseY
    : polarToCartesianY(height / 2, frameCount / 10, width / 2);

  drawTheThings(color(206, 86, 50), (x, y) =>
    map(
      dist(x, y, distX, distY),
      0,
      dist(0, 0, width, height),
      gridSize * 1.5,
      gridSize / 2
    )
  );
  drawTheThings(color(36, 156, 164), (x, y) =>
    map(
      dist(x, y, distX, distY),
      0,
      dist(0, 0, width, height),
      gridSize / 1.5,
      gridSize * 2
    )
  );

  drawTheThings(color(245, 230, 187), (x, y) =>
    map(
      dist(x, y, distX, distY),
      0,
      dist(0, 0, width, height),
      gridSize / 3.5,
      gridSize
    )
  );
}

function mouseClicked() {
  manualControl = !manualControl;
}

function touchMoved() {
  if (mouseX >= 0 && mouseY >= 0 && mouseX <= width && mouseY <= height) {
    return false;
  }
}

setTimeout(() => {
  drawingComplete = true;
}, 5000);
