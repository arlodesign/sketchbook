import p5 from "p5";
import { polarToCartesianX } from "util/polarToCartesian";

const sketch = function (p) {
  let guides = [];
  let viewGuides = false;
  let drawing;
  let lastPoints;

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    drawing = p.createGraphics(p.width, p.height);
    drawing.background(255);
    drawing.noStroke();
    guides.push({
      r: 0,
      speed: p.random(1.5) / p.TWO_PI,
      direction: p.random([-1, 1]),
    });
    guides.push({
      r: p.HALF_PI,
      speed: p.random(0.5) / p.TWO_PI,
      direction: -1,
    });
    guides.push({
      r: 0,
      speed: p.random(1.5) / p.TWO_PI,
      direction: p.random([-1, 1]),
    });
    guides.push({
      r: 0,
      speed: p.random(0.5, 1.5) / p.TWO_PI,
      direction: p.random([-1, 1]),
    });
  };

  p.draw = function () {
    p.frameRate(viewGuides ? 15 : 60);
    p.background(255);
    p.image(drawing, 0, 0);
    const X0 = polarToCartesianX(p.width / 2, guides[0].r, p.width / 2 - 100);
    const Y0 = 0;
    const X1 = p.width;
    const Y1 = p.height / 2 + p.sin(guides[1].r) * (p.height / 2);
    const X2 = polarToCartesianX(p.width / 2, guides[2].r, p.width / 2 - 100);
    const Y2 = p.height;
    const X3 = 0;
    const Y3 = p.height / 2 + p.sin(guides[3].r) * (p.height / 2);
    const leftHandleX = p.lerp(X3, X0, 0.5);
    const leftHandleY = p.lerp(Y3, Y0, 0.5);
    const rightHandleX = p.lerp(X1, X2, 0.5);
    const rightHandleY = p.lerp(Y1, Y2, 0.5);
    if (viewGuides) {
      p.stroke("red");
      p.strokeWeight(1);
      p.line(X1, Y1, X2, Y2);
      p.line(X3, Y3, X0, Y0);
      p.strokeWeight(6);
      p.line(X1, Y1, X3, Y3);
      p.line(X1, Y1, rightHandleX, rightHandleY);
      p.line(X3, Y3, leftHandleX, leftHandleY);
      p.ellipse(rightHandleX, rightHandleY, 12);
      p.ellipse(leftHandleX, leftHandleY, 12);
    }
    for (let i = 0; i < guides.length; i++) {
      guides[i].r += guides[i].speed * guides[i].direction;
    }
    if (p.frameCount > 1) {
      drawing.fill(p.frameCount % 2 ? 255 : 0);
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
      leftHandleY,
    };
    if (p.abs(guides[1].r) > p.PI + p.PI / 2) {
    }
  };

  p.mousePressed = function () {
    viewGuides = !viewGuides;
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
const description =
  "Reload page for a different variation. Click or tap sketch to toggle guides.";
