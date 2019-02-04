/*---
description: 
---*/

const MARGIN = 100;
const GAP = 30;
const ITERATIONS = 15;

let y = MARGIN;
let length;
let colors = [];
let iteration = 0;

const colorFunctions = [
  angle => abs(sin(angle)) * 240,
  angle => abs(cos(angle)) * 240,
  angle => abs(tan(angle)) * 240,
  angle => abs(sin(-angle)) * 240,
  angle => abs(cos(-angle)) * 240,
  angle => abs(tan(-angle)) * 240,
  () => 240,
  () => 15,
  () => 128
];

function setup() {
  pixelDensity(4);
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent("my-canvas");
  background(127);
  length = width - MARGIN * 2;
  while ([...new Set(colors)].length < 3) {
    colors = [
      random(colorFunctions),
      random(colorFunctions),
      random(colorFunctions)
    ];
  }
  blendMode(OVERLAY);
  rectMode(CENTER);
  strokeWeight(2);
}

function draw() {
  translate(MARGIN, y);

  const P = floor(random(GAP));
  const S = length / P;
  const C = color(...colors.map(c => c(y * iteration)), 127);

  if (iteration % 2) {
    noFill();
    stroke(C);
  } else {
    noStroke();
    fill(C);
  }
  beginShape();
  vertex(0, 0);
  for (let i = 0; i < P; i++) {
    const X = lerp(S * i, S * (i + 1), noise(i, y));
    const Y = GAP * noise(y, i) * random([-1, 1]);
    quadraticVertex(X, Y, S * (i + 1), 0);
  }
  vertex(length, 0);
  endShape();

  y += GAP;

  if (y > height - MARGIN) {
    iteration++;
    y = MARGIN;
  }

  if (iteration === ITERATIONS) {
    noLoop();
    drawingComplete = true;
  }
}
