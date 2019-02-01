/*---
description: Reload page for a different variation.
---*/

const SIZE = 300;

let sides;
let a = 0;
let aSpeed;
let canvasRotationDirection;
let quadraticVariant;
let rOpt;
let gOpt;
let bOpt;

const colorFunctions = [
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
  angle => abs(tan(-angle + PI)) * 240,
  () => 240,
  () => 15,
  () => 128
];

function setup() {
  pixelDensity(4);
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent("my-canvas");
  background(128);

  sides = floor(random(3, 7));
  aSpeed = random(0.01, 0.05);
  canvasRotationDirection = random([-1, 1]);
  quadraticVariant = random(1, 2);

  while ([...new Set([rOpt, gOpt, bOpt])].length < 3) {
    rOpt = random(colorFunctions);
    gOpt = random(colorFunctions);
    bOpt = random(colorFunctions);
  }

  strokeWeight(0.25);
  noFill();

  blendMode(HARD_LIGHT);
}

function draw() {
  translate(...Object.values(polarToCartesian(width / 2, height / 2, a, SIZE)));
  rotate((canvasRotationDirection * a) / sides);

  const { x, y } = polarToCartesian(0, 0, a, cos(a * sides) * SIZE);

  stroke(rOpt(a / sides), gOpt(a / sides), bOpt(a / sides));
  beginShape();
  vertex(...Object.values(polarToCartesian(0, 0, 0, SIZE * quadraticVariant)));
  for (let i = 1; i <= sides; i++) {
    quadraticVertex(
      x,
      y,
      ...Object.values(
        polarToCartesian(0, 0, (TWO_PI / sides) * i, SIZE * quadraticVariant)
      )
    );
  }
  endShape();

  a += aSpeed / TWO_PI;

  if (a > TWO_PI * sides) {
    noLoop();
    drawingComplete = true;
  }
}
