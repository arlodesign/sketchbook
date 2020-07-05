import p5 from "p5";
import { polarToCartesianX } from "util/polarToCartesian";

const sketch = function (p) {
  let guides = [];
  let viewGuides = false;
  let drawing;
  let dark;
  let lastPoints;
  let rOpt;
  let gOpt;
  let bOpt;
  let aOpt;
  let drawingComplete = false;
  const colorFunctions = [
    (angle) => p.abs(p.sin(angle)) * 240,
    (angle) => p.abs(p.cos(angle)) * 240,
    (angle) => p.abs(p.tan(angle)) * 240,
    (angle) => p.abs(p.sin(angle + p.PI)) * 240,
    (angle) => p.abs(p.cos(angle + p.PI)) * 240,
    (angle) => p.abs(p.tan(angle + p.PI)) * 240,
    (angle) => p.abs(p.sin(-angle)) * 240,
    (angle) => p.abs(p.cos(-angle)) * 240,
    (angle) => p.abs(p.tan(-angle)) * 240,
    (angle) => p.abs(p.sin(-angle + p.PI)) * 240,
    (angle) => p.abs(p.cos(-angle + p.PI)) * 240,
    (angle) => p.abs(p.tan(-angle + p.PI)) * 240,
  ];

  function setFill(a) {
    drawing.fill(rOpt(a), gOpt(a), bOpt(a), aOpt(a * 3));
  }

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    dark = p.random([0, 1]);
    drawing = p.createGraphics(p.width, p.height);
    drawing.background(dark ? 0 : 255);
    drawing.stroke(dark ? 255 : 0);
    drawing.strokeWeight(100);
    drawing.line(p.width * 0.25, 150, p.width * 0.25, p.height - 150);
    drawing.line(p.width * 0.5, 150, p.width * 0.5, p.height - 150);
    drawing.line(p.width * 0.75, 150, p.width * 0.75, p.height - 150);
    drawing.blendMode(dark ? p.DARKEST : p.LIGHTEST);
    drawing.noStroke();
    while (Array.from(new Set([rOpt, gOpt, bOpt, aOpt])).length < 4) {
      rOpt = p.random(colorFunctions);
      gOpt = p.random(colorFunctions);
      bOpt = p.random(colorFunctions);
      aOpt = p.random(colorFunctions);
    }
    for (let i = 0; i < 4; i++) {
      guides.push({
        r: p.HALF_PI * i,
        speed: p.random(0.01, (2 - i / 2) * 0.1) / p.TWO_PI,
        direction: p.random([-1, 1]),
      });
    }
    guides.sort((a, b) => a.r - b.r);
  };

  p.draw = function () {
    p.background(255);
    p.image(drawing, 0, 0);
    const X0 = polarToCartesianX(p.width / 2, guides[0].r, p.width / 2);
    const Y0 = 0;
    const X1 = p.width;
    const Y1 = p.height / 2 + p.sin(guides[1].r) * (p.height / 2);
    const X2 = polarToCartesianX(p.width / 2, guides[2].r, p.width / 2);
    const Y2 = p.height;
    const X3 = 0;
    const Y3 = p.height / 2 + p.sin(guides[3].r) * (p.height / 2);
    const leftHandleX = p.lerp(X3, X0, 0.2);
    const leftHandleY = p.lerp(Y3, Y0, 0.2);
    const rightHandleX = p.lerp(X1, X2, 0.2);
    const rightHandleY = p.lerp(Y1, Y2, 0.2);
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
      leftHandleY,
    };
    if (
      p.abs(guides[1].r) > p.TWO_PI * 3 &&
      p.abs(guides[3].r) > p.TWO_PI * 3
    ) {
      p.noLoop();
      drawingComplete = true;
    }
  };

  p.mousePressed = function () {
    viewGuides = !viewGuides;
    if (drawingComplete) p.redraw();
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
const description =
  "Reload page for a different variation. Click or tap sketch to toggle guides.";
