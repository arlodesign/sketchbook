/*---
description: 
---*/

const SHAPES = 3;
const MAX_SCALE = 3;

function setup() {
  const myCanvas = createCanvas(660, 840, WEBGL);
  myCanvas.parent("my-canvas");
  fill(255);
  noStroke();
}

function draw() {
  background(0);
  directionalLight(
    255,
    255,
    255,
    cos(frameCount / 100),
    sin(frameCount / 200),
    sin(frameCount / 100) / 2
  );

  for (let i = 0; i < SHAPES; i++) {
    push();
    rotateZ(i * (TWO_PI / SHAPES) + frameCount / 300);
    rotateX(frameCount / 500);
    rotateY(frameCount / 1100);
    scale(map(sin(frameCount / 700), -1, 1, 1 / MAX_SCALE, MAX_SCALE));
    cone(width / (MAX_SCALE * 2), height, MAX_SCALE);
    pop();
  }
}

setTimeout(() => {
  drawingComplete = true;
}, 7000);
