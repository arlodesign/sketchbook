/*---
description: Reload page for a different variation.
---*/

let dark;
let scalar;
let x;
let y;
let x2;
let y2;
let rOpt;
let gOpt;
let bOpt;
let aOpt;

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
  angle => abs(tan(-angle + PI)) * 240
];

function setStroke(a) {
  stroke(rOpt(a), gOpt(a), bOpt(a), aOpt(a * scalar));
}

function setup() {
  pixelDensity(4);
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent("my-canvas");
  dark = random([0, 1]);
  background(dark ? 0 : 255);
  noFill();
  stroke(0);
  scalar = random([3, 5, 7, 9]);
  x = x2 = scalar;
  y = y2 = scalar;
  while ([...new Set([rOpt, gOpt, bOpt, aOpt])].length < 4) {
    rOpt = random(colorFunctions);
    gOpt = random(colorFunctions);
    bOpt = random(colorFunctions);
    aOpt = random(colorFunctions);
  }
  blendMode(dark ? LIGHTEST : DARKEST);
}

function draw() {
  translate(width / 2, height / 2);
  const moveX = random([-10, 10]);
  const moveY = random([-10, 10]);

  x = x2 + moveX;
  y = y2 + moveY;

  strokeWeight(7 * noise(moveX, moveY));
  setStroke(frameCount / 200);

  if (x > -width / 2 && y > -height / 2 && x < width / 2 && y < height / 2) {
    for (let i = 0; i < scalar; i++) {
      push();
      rotate((TWO_PI / scalar) * i);
      triangle(x, y, lerp(x, y2, 0.5), lerp(y, x2, 0.5), x2, y2);
      endShape();
      pop();
    }
  } else {
    noLoop();
    drawingComplete = true;
  }

  x2 = x;
  y2 = y;
}
