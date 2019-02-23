/*---
description: Be patient. Sometimes this one starts drawing off canvas.
---*/

const SPEED = 0.4;
const ALPHA = 10;

let axis;
let distance;
let hueA;
let hueB;

function setup() {
  pixelDensity(4);
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent("my-canvas");
  noFill();
  background(240);
  colorMode(HSB, 100);
  blendMode(HARD_LIGHT);
  distance = dist(0, 0, width, height) * 3;
  hueA = random(0, 49);
  hueB = random(50, 100);
  axis = [-width / 3, -height / 3];
}

function drawShapes(nfn) {
  beginShape();
  for (let r = 0; r < TWO_PI; r += SPEED / 3) {
    const { x, y } = polarToCartesian(
      ...axis,
      r * noise(distance / 1000, nfn(r + frameCount / 1000)),
      distance * noise(r / 1000, nfn(r + frameCount / 500))
    );
    vertex(x, y);
  }
  endShape();
}

function draw() {
  alternate(
    () => {
      stroke(hueA, map(tan(frameCount / 300), -1, 1, 66, 33), 66, alpha);
      drawShapes(cos);
    },
    () => {
      stroke(hueB, map(tan(frameCount / 300), -1, 1, 33, 66), 66, alpha);
      drawShapes(sin);
    }
  );
  distance -= SPEED;

  if (distance < dist(0, 0, ...axis)) {
    noLoop();
  }
}
