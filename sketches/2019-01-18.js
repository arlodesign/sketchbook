/*---
description: Reload page for a different variation. Click or tap sketch to toggle guides.
---*/

let circleCount = 3;
let circles = [];
let viewGuides = false;
let drawing;
let speeds = [...Array(10).keys()].map(i => (i + 1) / 10);
let lastPoint;

function guideColor(alpha) {
  return color(255, 0, 0, alpha);
}

// http://jeffreythompson.org/collision-detection/line-line.php
function lineIntersection(x1, y1, x2, y2, x3, y3, x4, y4) {
  const uA =
    ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) /
    ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1));
  const uB =
    ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) /
    ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1));

  if (uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1) {
    return { x: floor(x1 + uA * (x2 - x1)), y: floor(y1 + uA * (y2 - y1)) };
  }
  return { x: null, y: null };
}

function setup() {
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent("my-canvas");

  drawing = createGraphics(width, height);

  for (let i = 0; i < circleCount; i++) {
    const THIS_SPEED = random(speeds);
    const THIS_SIZE = (width / 6) * random(0.1, 1);
    speeds = speeds.filter(s => s !== THIS_SPEED);

    circles.push({
      r: HALF_PI * i,
      speed: THIS_SPEED / TWO_PI,
      size: THIS_SIZE,
      direction: random([1, -1])
    });
  }

  noFill();
}

function draw() {
  background(255);
  frameRate(viewGuides ? 15 : 30);
  image(drawing, 0, 0);

  const X0_AXIS =
    width / 2 + cos(circles[0].r) * (width / 2 - circles[1].size * 2);
  const Y0_AXIS = circles[0].size / 2;
  const X0 = X0_AXIS + cos(circles[0].r) * (circles[0].size / 2);
  const Y0 = Y0_AXIS + sin(circles[0].r) * (circles[0].size / 2);

  const X1_AXIS = width - circles[1].size / 2;
  const Y1_AXIS =
    height / 2 +
    cos(circles[1].r) * (height / 2 - (circles[0].size + circles[2].size));

  const X1 = X1_AXIS + cos(circles[1].r) * (circles[1].size / 2);
  const Y1 = Y1_AXIS + sin(circles[1].r) * (circles[1].size / 2);

  const X2_AXIS =
    width / 2 + cos(circles[2].r) * (width / 2 - circles[1].size * 2);
  const Y2_AXIS = height - circles[2].size / 2;

  const X2 = X2_AXIS + cos(circles[2].r) * (circles[2].size / 2);
  const Y2 = Y2_AXIS + sin(circles[2].r) * (circles[2].size / 2);

  const X3_AXIS = circles[1].size / 2;
  const Y3_AXIS =
    height / 2 +
    cos(circles[1].r) * (height / 2 - (circles[0].size + circles[2].size));

  const X3 = X3_AXIS + cos(circles[1].r + HALF_PI) * (circles[1].size / 2);
  const Y3 = Y3_AXIS + sin(circles[1].r + HALF_PI) * (circles[1].size / 2);

  if (viewGuides) {
    stroke(guideColor(128));
    strokeWeight(1);
    ellipse(X0_AXIS, Y0_AXIS, circles[0].size);
    ellipse(X1_AXIS, Y1_AXIS, circles[1].size);
    ellipse(X2_AXIS, Y2_AXIS, circles[2].size);
    ellipse(X3_AXIS, Y3_AXIS, circles[1].size);
    line(X0, Y0, X2, Y2);
    line(X1, Y1, X3, Y3);
  }

  for (let i = 0; i < circles.length; i++) {
    circles[i].r += circles[i].speed * circles[i].direction;
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
