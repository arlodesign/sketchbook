/*---
description: Reload page for a different variation. Click or tap sketch to toggle guides.
---*/

let guides = [];
let viewGuides = false;
let drawing;
let lastPoints;

function setup() {
  pixelDensity(4);
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent("my-canvas");

  drawing = createGraphics(width, height);
  drawing.background(255);
  drawing.noStroke();

  guides.push({
    r: 0,
    speed: random(1.5) / TWO_PI,
    direction: random([-1, 1])
  });
  guides.push({
    r: HALF_PI,
    speed: random(0.5) / TWO_PI,
    direction: -1
  });
  guides.push({
    r: 0,
    speed: random(1.5) / TWO_PI,
    direction: random([-1, 1])
  });
  guides.push({
    r: 0,
    speed: random(0.5, 1.5) / TWO_PI,
    direction: random([-1, 1])
  });
}

function draw() {
  frameRate(viewGuides ? 15 : 60);
  background(255);
  image(drawing, 0, 0);

  const X0 = polarToCartesianX(width / 2, guides[0].r, width / 2 - 100);
  const Y0 = 0;

  const X1 = width;
  const Y1 = height / 2 + sin(guides[1].r) * (height / 2);

  const X2 = polarToCartesianX(width / 2, guides[2].r, width / 2 - 100);
  const Y2 = height;

  const X3 = 0;
  const Y3 = height / 2 + sin(guides[3].r) * (height / 2);

  const leftHandleX = lerp(X3, X0, 0.5);
  const leftHandleY = lerp(Y3, Y0, 0.5);
  const rightHandleX = lerp(X1, X2, 0.5);
  const rightHandleY = lerp(Y1, Y2, 0.5);

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
    drawing.fill(frameCount % 2 ? 255 : 0);
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
  if (abs(guides[1].r) > PI + PI / 2) {
    drawingComplete = true;
  }
}

function mousePressed() {
  viewGuides = !viewGuides;
}
