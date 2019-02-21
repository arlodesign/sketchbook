/*---
description: Reload page for a different variation.
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

let r1 = 0;
let r2 = 0;
let r3 = 0;
let r1Speed;
let r2Speed;
let r3Speed;
let r;
let g;
let b;
let getColor = () => {};

function setup() {
  pixelDensity(4);
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent("my-canvas");
  background(0);

  r1Speed = (random(0.05, 0.1) / TWO_PI) * random([-1, 1]);
  r2Speed = (random(0.15, 0.25) / TWO_PI) * random([-1, 1]);
  r3Speed = random(0.01, 0.015) / TWO_PI;

  while ([...new Set([r, g, b])].length < 3) {
    r = random(CF);
    g = random(CF);
    b = random(CF);
  }
  getColor = angle => color(r(angle), g(angle), b(angle), 8);

  noStroke();
  blendMode(HARD_LIGHT);
}

function draw() {
  translate(width / 2, height * sin(r3));
  const { x, y } = polarToCartesian(0, 0, r1, 200);
  const HANDLE = polarToCartesian(x, y, r2, sin(r3) * 500);

  if (height * sin(r3) < 0 && y < 0 && HANDLE.y < 0) {
    noLoop();
    drawingComplete = true;
    return;
  }

  fill(getColor(r3 * 2));
  beginShape();
  vertex(0, 0);
  quadraticVertex(HANDLE.x, HANDLE.y, x, y);
  endShape(CLOSE);

  r1 += r1Speed;
  r2 += r2Speed;
  r3 += r3Speed;
}
