/*---
description: Reload page for a different variation.
---*/

let speed;
let alpha;

function setup() {
  pixelDensity(4);
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent("my-canvas");

  speed = random([2, 3, 5, 8, 10]);
  alpha = random(0.3, 0.8);

  background(255);
  noFill();
  stroke(`rgba(0, 0, 0, ${alpha})`);
  strokeWeight(2);
}

function draw() {
  const x = (frameCount % (width / speed)) * speed;
  const y = (frameCount % (height / speed)) * speed;

  for (let i = 0; i < 1; i += alpha * 0.1) {
    const pointX = lerp(width / 2, x, i);
    const pointY = lerp(height / 2, y, i);
    const dist = speed * map(noise(pointX, pointY), 0, 1, 1 - alpha, 1 + alpha);

    line(pointX + dist, pointY - dist, pointX - dist, pointY + dist);
  }

  if (x === 0 && y === 0 && frameCount > 0) {
    for (let i = 0; i < speed * 1000; i++) {
      stroke(
        i % speed ? `rgba(0, 0, 0, ${alpha})` : `rgba(255, 255, 255, ${alpha})`
      );
      point(
        randomGaussian(width / 2, width / 4),
        randomGaussian(height / 2, height / 4)
      );
    }

    noLoop();
    drawingComplete = true;
  }
}
