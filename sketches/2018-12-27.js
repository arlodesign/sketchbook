/*---
description: Reload page for a different variation.
---*/

const MARGIN = 50;

let scalar;
let divisor;
let noDrawCount1 = 0;
let noDrawCount2 = 0;

function setup() {
  pixelDensity(4);
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent('my-canvas');
  background(0);
  scalar = random(10, 20);
  divisor = floor(random(3, 5));
}

function draw() {
  stroke(255);
  strokeWeight(divisor);
  const x = width / 2 + cos(frameCount / scalar) * frameCount / (noise(frameCount) * (scalar / divisor));
  const y = height / 2 + sin(frameCount / scalar) * frameCount / (noise(frameCount) * (scalar / divisor));
  if (x > MARGIN && y > MARGIN && x < width - MARGIN && y < height - MARGIN) {
    line(x, y, width / 2, height / 2);
  } else {
    noDrawCount1++;
  }

  stroke(0);
  strokeWeight(divisor / 3);
  const x2 = width / 2 + cos(frameCount / (scalar / (divisor - 1))) * frameCount / (noise(frameCount) * scalar);
  const y2 = height / 2 + sin(frameCount / (scalar / (divisor - 1))) * frameCount / (noise(frameCount) * scalar);
  if (x2 > MARGIN && y2 > MARGIN && x2 < width - MARGIN && y2 < height - MARGIN) {
    line(x2, y2, width / 2, height / 2);
  } else {
    noDrawCount2++;
  }

  if (noDrawCount1 > (frameCount / scalar) * 2 && noDrawCount2 > (frameCount / scalar) * 2) {
    for (let i = 0; i < scalar * 1000; i++) {
      stroke(i % divisor ? 0 : 255);
      point(
        constrain(random(0, width), MARGIN, width - MARGIN),
        constrain(random(0, height), MARGIN, height - MARGIN)
      );
    }
    noLoop();
    drawingComplete = true;
  }
}