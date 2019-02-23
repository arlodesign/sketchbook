/*---
description: Reload page for a different variation.
---*/

let pointsA = [];
let pointsB = [];
let hueA;
let hueB;
let alpha = 10;
let fadeOut = false;

function getPoints(x, y) {
  return [...Array(10).keys()].map(_ => ({
    position: createVector(randomGaussian(x, 100), randomGaussian(y, 100)),
    velocity: createVector(randomGaussian(0, 0.1), randomGaussian(0, 0.1)),
    acceleration: createVector(
      randomGaussian(0.001, 0.01),
      randomGaussian(0.001, 0.01)
    )
  }));
}

function setup() {
  pixelDensity(4);
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent("my-canvas");
  background(64);

  colorMode(HSB, 100);
  noFill();
  blendMode(HARD_LIGHT);

  pointsA = getPoints(width * 0.1, height * 0.1);
  pointsB = getPoints(width * 0.2, height * 0.2);
  hueA = random(0, 49);
  hueB = random(50, 100);

  setTimeout(() => {
    fadeOut = true;
  }, 25000);
}

function drawPoints(points) {
  beginShape();
  points.forEach(p => {
    vertex(p.position.x, p.position.y);
    p.position.add(p.velocity.add(p.acceleration));
  });
  endShape(CLOSE);
}

function draw() {
  if (frameCount % 2) {
    stroke(hueA * sin(frameCount / 200), 50, 100, alpha);
    drawPoints(pointsA);
    stroke(hueB * cos(frameCount / 200), 50, 100, alpha);
    drawPoints(pointsB);
  } else {
    stroke(hueB * cos(frameCount / 200), 50, 100, alpha);
    drawPoints(pointsB);
    stroke(hueA * sin(frameCount / 200), 50, 100, alpha);
    drawPoints(pointsA);
  }

  alpha = fadeOut ? alpha - 0.01 : alpha;

  if (alpha < 0) {
    noLoop();
  }
}
