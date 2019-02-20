/*---
description: 
---*/

const CF = [
  angle => abs(sin(angle)) * 240,
  angle => abs(cos(angle)) * 240,
  angle => abs(tan(angle)) * 240,
  angle => abs(sin(angle + PI)) * 240,
  angle => abs(cos(angle + PI)) * 240,
  angle => abs(tan(angle + PI)) * 240,
  angle => abs(sin(-angle)) * 240,
  angle => abs(cos(-angle)) * 240,
  angle => abs(tan(-angle)) * 240,
  angle => abs(sin(-angle + PI)) * 240,
  angle => abs(cos(-angle + PI)) * 240,
  angle => abs(tan(-angle + PI)) * 240
];
const Q = 3;

let distance = 0;
let angle = 0;
let size = 10;
let axis = {};
let r;
let g;
let b;
let a = 32;
let getColor = () => {};

function setup() {
  pixelDensity(4);
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent("my-canvas");
  background(0);
  axis = { x: width / 2, y: height / 2 };
  while ([...new Set([r, g, b])].length < 3) {
    r = random(CF);
    g = random(CF);
    b = random(CF);
  }
  getColor = angle => color(r(angle), g(angle), b(angle), a);
  blendMode(HARD_LIGHT);
}

function draw() {
  noFill();
  strokeWeight(map(noise(angle / 5, distance / 5) * size, 0, width, 1, Q));
  stroke(getColor(angle / (Q * 1.5)));

  beginShape();
  for (let i = 0; i < TWO_PI; i += TWO_PI / Q) {
    const thisAngle = angle + i;
    const { x, y } = polarToCartesian(
      axis.x,
      axis.y,
      thisAngle,
      noise(angle / 5, distance / 5) * size
    );
    vertex(x, y);
  }
  endShape(CLOSE);
  angle += 0.01;
  distance += 0.01;
  size += 0.05;
  a = size > width ? a - 0.1 : a;
  axis = polarToCartesian(width / 2, height / 2, angle / Q, distance * (Q / 2));

  if (a === 0) {
    noLoop();
    drawingComplete = true;
  }
}
