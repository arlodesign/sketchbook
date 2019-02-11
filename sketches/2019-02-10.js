/*---
description: 
---*/

let x = 0;
let y = 0;

function getColor(angle) {
  return [
    max(15, abs(sin(angle)) * 240),
    max(15, abs(cos(-angle + PI)) * 240),
    max(15, abs(tan(angle + PI)) * 240)
  ];
}

function setup() {
  pixelDensity(4);
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent("my-canvas");
  background(127);
  noFill();
  strokeWeight(2);
}

function draw() {
  if (random() < 0.2) {
    stroke(
      ...getColor(
        map(noise(dist(x, y, width / 2, height / 2)), 0, 1, 0, TWO_PI)
      )
    );
    blendMode(frameCount % 3 ? SOFT_LIGHT : HARD_LIGHT);

    beginShape();
    vertex(x, y);
    bezierVertex(width / 2, height, width / 2, height, width - x, y);
    bezierVertex(0, height / 2, 0, height / 2, width - x, height - y);
    bezierVertex(width / 2, 0, width / 2, 0, x, height - y);
    bezierVertex(width, height / 2, width, height / 2, x, y);
    endShape(CLOSE);
  }
  y += 2;
  if (y > height / 2) {
    y = 0;
    x += 2;
  }
  if (x > width / 2) {
    noLoop();
    drawingComplete = true;
  }
}
