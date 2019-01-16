/*---
description: Reload page for a different variation. Click or tap sketch to toggle guides.
---*/

let circleCount;
let circles = [];
let viewGuides = false;
let drawing;
let speeds = [...Array(30).keys()].map(i => (i + 1) / 30);
let speed;

function guideColor(alpha) {
  return color(255, 0, 0, alpha);
}

function setup() {
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent("my-canvas");

  circleCount = ceil(random(5)) + 1;
  drawing = createImage(width, height);

  for (let i = 0; i < circleCount; i++) {
    thisSpeed = random(speeds);
    speeds = speeds.filter(s => s !== thisSpeed);

    circles.push({
      r: HALF_PI * 3,
      speed: thisSpeed / TWO_PI,
      size: (width / circleCount) * random(0.5, 1),
      direction: random([1, -1]),
      lastPoint: null
    });
  }
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
    const X = axis.x + cos(c.r) * (c.size / 2);
    const Y = axis.y + sin(c.r) * (c.size / 2);

    if (viewGuides) {
      const ALPHA = map(i, 0, circleCount - 1, 255 / 5, 255);
      noFill();
      stroke(255, 255, 255, ALPHA);
      strokeWeight(5);
      ellipse(axis.x, axis.y, c.size);
      stroke(guideColor(ALPHA));
      strokeWeight(1);
      ellipse(axis.x, axis.y, c.size);
      noStroke();
      fill(255, 255, 255, ALPHA);
      ellipse(X, Y, i === circleCount - 1 ? 12 : 6);
      fill(guideColor(ALPHA));
      ellipse(X, Y, i === circleCount - 1 ? 6 : 3);
    }

    if (i === circleCount - 1 && c.lastPoint) {
      if (X >= 0 && X <= width && Y >= 0 && Y <= height) {
        for (let l = 0; l < 1; l += 0.01) {
          drawing.set(
            floor(lerp(X, c.lastPoint.x, l)),
            floor(lerp(Y, c.lastPoint.y, l)),
            color(0)
          );
        }
        drawing.updatePixels();
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
}, 60000);
