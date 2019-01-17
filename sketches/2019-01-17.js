/*---
description: Reload page for a different variation. Click or tap sketch to toggle guides.
---*/

let circleCount = 3;
let circles = [];
let viewGuides = false;
let drawing;
let speeds = [...Array(50).keys()].map(i => (i + 1) / 50);
let speed;
let maxWidth = 0;

function guideColor(alpha) {
  return color(255, 0, 0, alpha);
}

function setup() {
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent("my-canvas");

  drawing = createGraphics(width, height);

  for (let i = 0; i < circleCount; i++) {
    const THIS_SPEED = random(speeds);
    const THIS_SIZE = (width / circleCount) * random(0.5, 1.5);
    speeds = speeds.filter(s => s !== THIS_SPEED);

    circles.push({
      r: HALF_PI * 3,
      speed: THIS_SPEED / TWO_PI,
      size: THIS_SIZE,
      direction: random([1, -1]),
      lastPoint: null
    });

    maxWidth += THIS_SIZE / 2;
  }

  maxWidth -= circles[0].size;
}

function draw() {
  background(255);
  frameRate(viewGuides ? 15 : 30);
  image(drawing, 0, 0);

  let axis = {
    x: width / 2,
    y: height / 2
  };

  circles.forEach((c, i) => {
    const X = i % 3 ? axis.x + cos(c.r) * (c.size / 2) : axis.x;
    const Y = i % 2 ? axis.y : axis.y + sin(c.r) * (c.size / 2);

    if (viewGuides) {
      const ALPHA = map(i, 0, circleCount - 1, 255 / 5, 255);
      noFill();
      stroke(255, 255, 255, ALPHA);
      strokeWeight(5);
      ellipse(axis.x, axis.y, i % 3 ? c.size : 1, i % 2 ? 1 : c.size);
      stroke(guideColor(ALPHA));
      strokeWeight(1);
      ellipse(axis.x, axis.y, i % 3 ? c.size : 1, i % 2 ? 1 : c.size);
      noStroke();
      fill(255, 255, 255, ALPHA);
      ellipse(X, Y, i === circleCount - 1 ? 12 : 6);
      fill(guideColor(ALPHA));
      ellipse(X, Y, i === circleCount - 1 ? 6 : 3);
    }

    if (i === circleCount - 1 && c.lastPoint) {
      if (X >= 0 && X <= width && Y >= 0 && Y <= height) {
        for (let l = 0; l < 1; l += 0.01) {
          drawing.line(X, Y, c.lastPoint.x, c.lastPoint.y);
        }
      }
    }

    axis = { x: X, y: Y };
    circles[i].lastPoint = axis;
    circles[i].r += c.speed * circles[i].direction;
  });
}

function mousePressed() {
  viewGuides = !viewGuides;
}

setTimeout(() => {
  drawingComplete = true;
}, 120000);
