/*---
description: Move pointer or finger over sketch.
---*/

const SIZE = 10;

function setup() {
  pixelDensity(4);
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent("my-canvas");
  noStroke();
}

function draw() {
  background("white");

  let stripes = [];

  for (let y = 0; y <= height; y += SIZE) {
    stripes.push({
      y,
      distFromMouse: abs(y - mouseY)
    });
  }

  const MAX_DIST = max(...stripes.map(s => s.distFromMouse));

  stripes.forEach(({ y, distFromMouse }, i) => {
    const MV = map(distFromMouse, 0, MAX_DIST, map(mouseY, 0, height, 7, 2), 0);
    stripes[i].ex = pow(MV, MV);
  });

  const EX_TOTAL = stripes.reduce((prev, { ex }) => prev + ex, 0);

  let bezierHandles = [0];
  let bhy = 0;
  stripes.forEach(({ ex }) => {
    const HP = ex / EX_TOTAL;
    bezierHandles.push(bhy + height * HP);
    bhy += height * HP;
  });

  let totalHeight = 0;
  stripes.forEach(({ y, ex }, i) => {
    const HP = ex / EX_TOTAL;
    const H = height * HP;
    const BH_TOP = bezierHandles[i];
    const BH_BOTTOM = bezierHandles[i + 1];
    fill(i % 2 ? 255 : 0);
    beginShape();
    vertex(0, y);
    quadraticVertex(mouseX, BH_TOP, width, y);
    vertex(width, y + SIZE);
    quadraticVertex(mouseX, BH_BOTTOM, 0, y + SIZE);
    endShape();
  });
}

function touchMoved() {
  if (mouseX >= 0 && mouseY >= 0 && mouseX <= width && mouseY <= height) {
    return false;
  }
}

setTimeout(() => {
  drawingComplete = true;
}, 1000);
