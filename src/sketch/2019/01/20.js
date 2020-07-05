import p5 from "p5";
import { polarToCartesianX } from "util/polarToCartesian";
import lineIntersection from "util/lineIntersection";

const sketch = function (p) {
  let speeds;
  let guides = [];
  let viewGuides = false;
  let drawing;
  let lastPoint;

  function guideColor(alpha) {
    return p.color(255, 0, 0, alpha);
  }

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    drawing = p.createGraphics(p.width, p.height);
    drawing.background(255);
    drawing.stroke(0, 0, 0, 255 / 4);
    drawing.strokeWeight(0.5);
    drawing.noFill();
    speeds = [p.random(0.2, 0.3), p.random(0.2, 0.3), p.random(0.2, 0.3)];
    guides.push({
      r: p.HALF_PI,
      speed: speeds[0] / p.TWO_PI,
      direction: p.random([-1, 1]),
    });
    guides.push({
      r: 0,
      speed: speeds[1] / p.TWO_PI,
      direction: -1,
    });
    guides.push({
      r: p.PI * 1.5,
      speed: speeds[2] / p.TWO_PI,
      direction: p.random([-1, 1]),
    });
    guides.push(Object.assign({}, guides[1]));
  };

  p.draw = function () {
    p.background(255);
    p.image(drawing, 0, 0);
    const X0 = polarToCartesianX(p.width / 2, guides[0].r, p.width / 2 - 100);
    const Y0 = 0;
    const X1 = p.width;
    const Y1 = p.height / 2 + p.sin(guides[1].r) * (p.height / 2 - 100);
    const X2 = polarToCartesianX(p.width / 2, guides[2].r, p.width / 2 - 100);
    const Y2 = p.height;
    const X3 = 0;
    const Y3 = p.height / 2 + p.sin(guides[3].r) * (p.height / 2 - 100);
    if (viewGuides) {
      p.stroke(guideColor(64));
      p.strokeWeight(1);
      p.line(X0, Y0, X2, Y2);
      p.line(X1, Y1, X3, Y3);
    }
    for (let i = 0; i < guides.length; i++) {
      guides[i].r += guides[i].speed * guides[i].direction;
    }
    const { x, y } = lineIntersection(X0, Y0, X2, Y2, X1, Y1, X3, Y3);
    if (x && y && p.frameCount > 1) {
      for (let l = 0; l < 1; l += 0.01) {
        drawing.line(x, y, lastPoint.x, lastPoint.y);
      }
    }
    lastPoint =
      x && y
        ? {
            x,
            y,
          }
        : lastPoint;
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
