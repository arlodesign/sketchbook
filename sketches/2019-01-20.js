/*---
description: Reload page for a different variation. Click or tap sketch to toggle guides.
---*/

function guideColor(alpha) {
  return color(255, 0, 0, alpha);
}

let speeds;
let guides = [];
let viewGuides = false;
let drawing;
let lastPoint;

function setup() {
  pixelDensity(4);
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent("my-canvas");

  drawing = createGraphics(width, height);
  drawing.background(255);
  drawing.stroke(0, 0, 0, 255 / 4);
  drawing.strokeWeight(0.5);
  drawing.noFill();

  speeds = [random(0.2, 0.3), random(0.2, 0.3), random(0.2, 0.3)];

  guides.push({
    r: HALF_PI,
    speed: speeds[0] / TWO_PI,
    direction: random([-1, 1])
  });
  guides.push({
    r: 0,
    speed: speeds[1] / TWO_PI,
    direction: -1
  });
  guides.push({
    r: PI * 1.5,
    speed: speeds[2] / TWO_PI,
    direction: random([-1, 1])
  });
  guides.push(Object.assign({}, guides[1]));
}

function draw() {
  background(255);
  image(drawing, 0, 0);

  const X0 = polarToCartesianX(width / 2, guides[0].r, width / 2 - 100);
  const Y0 = 0;

  const X1 = width;
  const Y1 = height / 2 + sin(guides[1].r) * (height / 2 - 100);

  const X2 = polarToCartesianX(width / 2, guides[2].r, width / 2 - 100);
  const Y2 = height;

  const X3 = 0;
  const Y3 = height / 2 + sin(guides[3].r) * (height / 2 - 100);

  if (viewGuides) {
    stroke(guideColor(64));
    strokeWeight(1);
    line(X0, Y0, X2, Y2);
    line(X1, Y1, X3, Y3);
  }

  for (let i = 0; i < guides.length; i++) {
    guides[i].r += guides[i].speed * guides[i].direction;
  }

  const { x, y } = lineIntersection(X0, Y0, X2, Y2, X1, Y1, X3, Y3);
  if (x && y && frameCount > 1) {
    for (let l = 0; l < 1; l += 0.01) {
      drawing.line(x, y, lastPoint.x, lastPoint.y);
    }
  }
  lastPoint = x && y ? { x, y } : lastPoint;
}

function mousePressed() {
  viewGuides = !viewGuides;
}

setTimeout(() => {
  drawingComplete = true;
}, 60000);
