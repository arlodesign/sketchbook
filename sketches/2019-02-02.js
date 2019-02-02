/*---
description: Reload page for a different variation. Click or tap sketch to toggle guides.
---*/

let guides = [];
let viewGuides = false;
let drawing;
let dark;
let lastPoints;
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

function setFill(a) {
  drawing.fill(rOpt(a), gOpt(a), bOpt(a), aOpt(a * 3));
}

function setup() {
  pixelDensity(4);
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent("my-canvas");

  dark = random([0, 1]);
  drawing = createGraphics(width, height);
  drawing.background(dark ? 0 : 255);
  drawing.stroke(dark ? 255 : 0);
  drawing.strokeWeight(100);
  drawing.line(width * 0.25, 150, width * 0.25, height - 150);
  drawing.line(width * 0.5, 150, width * 0.5, height - 150);
  drawing.line(width * 0.75, 150, width * 0.75, height - 150);
  drawing.blendMode(dark ? DARKEST : LIGHTEST);
  drawing.noStroke();

  while ([...new Set([rOpt, gOpt, bOpt, aOpt])].length < 4) {
    rOpt = random(colorFunctions);
    gOpt = random(colorFunctions);
    bOpt = random(colorFunctions);
    aOpt = random(colorFunctions);
  }

  for (let i = 0; i < 4; i++) {
    guides.push({
      r: HALF_PI * i,
      speed: random(0.01, (2 - i / 2) * 0.1) / TWO_PI,
      direction: random([-1, 1])
    });
  }
  guides.sort((a, b) => a.r - b.r);
}

function draw() {
  background(255);
  image(drawing, 0, 0);

  const X0 = polarToCartesianX(width / 2, guides[0].r, width / 2);
  const Y0 = 0;

  const X1 = width;
  const Y1 = height / 2 + sin(guides[1].r) * (height / 2);

  const X2 = polarToCartesianX(width / 2, guides[2].r, width / 2);
  const Y2 = height;

  const X3 = 0;
  const Y3 = height / 2 + sin(guides[3].r) * (height / 2);

  const leftHandleX = lerp(X3, X0, 0.2);
  const leftHandleY = lerp(Y3, Y0, 0.2);
  const rightHandleX = lerp(X1, X2, 0.2);
  const rightHandleY = lerp(Y1, Y2, 0.2);

  if (viewGuides) {
    stroke("red");
    strokeWeight(1);
    line(X1, Y1, X2, Y2);
    line(X3, Y3, X0, Y0);
    strokeWeight(6);
    line(X1, Y1, X3, Y3);
    line(X1, Y1, rightHandleX, rightHandleY);
    line(X3, Y3, leftHandleX, leftHandleY);
    ellipse(rightHandleX, rightHandleY, 12);
    ellipse(leftHandleX, leftHandleY, 12);
  }

  for (let i = 0; i < guides.length; i++) {
    guides[i].r += guides[i].speed * guides[i].direction;
  }

  if (frameCount > 1) {
    setFill(guides[0].r);
    drawing.beginShape();
    drawing.vertex(X1, Y1);
    drawing.bezierVertex(
      rightHandleX,
      rightHandleY,
      leftHandleX,
      leftHandleY,
      X3,
      Y3
    );
    drawing.vertex(lastPoints.X3, lastPoints.Y3);
    drawing.bezierVertex(
      lastPoints.leftHandleX,
      lastPoints.leftHandleY,
      lastPoints.rightHandleX,
      lastPoints.rightHandleY,
      lastPoints.X1,
      lastPoints.Y1
    );
    drawing.endShape();
  }
  lastPoints = {
    X0,
    Y0,
    X1,
    Y1,
    X2,
    Y2,
    X3,
    Y3,
    rightHandleX,
    rightHandleY,
    leftHandleX,
    leftHandleY
  };
  if (abs(guides[1].r) > TWO_PI * 3 && abs(guides[3].r) > TWO_PI * 3) {
    noLoop();
    drawingComplete = true;
  }
}

function mousePressed() {
  viewGuides = !viewGuides;
  if (drawingComplete) redraw();
}
