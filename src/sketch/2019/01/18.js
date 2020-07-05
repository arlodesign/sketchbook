import p5 from "p5";

const sketch = function (p) {
  let circleCount = 3;
  let circles = [];
  let viewGuides = false;
  let drawing;
  let speeds = new Array(10).fill().map((_, i) => (i + 1) / 10);
  let lastPoint;

  function guideColor(alpha) {
    return p.color(255, 0, 0, alpha);
  }

  function lineIntersection(x1, y1, x2, y2, x3, y3, x4, y4) {
    const uA =
      ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) /
      ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1));
    const uB =
      ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) /
      ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1));
    if (uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1) {
      return {
        x: p.floor(x1 + uA * (x2 - x1)),
        y: p.floor(y1 + uA * (y2 - y1)),
      };
    }
    return {
      x: null,
      y: null,
    };
  }

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    drawing = p.createGraphics(p.width, p.height);
    for (let i = 0; i < circleCount; i++) {
      const THIS_SPEED = p.random(speeds);
      const THIS_SIZE = (p.width / 6) * p.random(0.1, 1);
      speeds = speeds.filter((s) => s !== THIS_SPEED);
      circles.push({
        r: p.HALF_PI * i,
        speed: THIS_SPEED / p.TWO_PI,
        size: THIS_SIZE,
        direction: p.random([1, -1]),
      });
    }
    p.noFill();
  };

  p.draw = function () {
    p.background(255);
    p.frameRate(viewGuides ? 15 : 30);
    p.image(drawing, 0, 0);
    const X0_AXIS =
      p.width / 2 + p.cos(circles[0].r) * (p.width / 2 - circles[1].size * 2);
    const Y0_AXIS = circles[0].size / 2;
    const X0 = X0_AXIS + p.cos(circles[0].r) * (circles[0].size / 2);
    const Y0 = Y0_AXIS + p.sin(circles[0].r) * (circles[0].size / 2);
    const X1_AXIS = p.width - circles[1].size / 2;
    const Y1_AXIS =
      p.height / 2 +
      p.cos(circles[1].r) *
        (p.height / 2 - (circles[0].size + circles[2].size));
    const X1 = X1_AXIS + p.cos(circles[1].r) * (circles[1].size / 2);
    const Y1 = Y1_AXIS + p.sin(circles[1].r) * (circles[1].size / 2);
    const X2_AXIS =
      p.width / 2 + p.cos(circles[2].r) * (p.width / 2 - circles[1].size * 2);
    const Y2_AXIS = p.height - circles[2].size / 2;
    const X2 = X2_AXIS + p.cos(circles[2].r) * (circles[2].size / 2);
    const Y2 = Y2_AXIS + p.sin(circles[2].r) * (circles[2].size / 2);
    const X3_AXIS = circles[1].size / 2;
    const Y3_AXIS =
      p.height / 2 +
      p.cos(circles[1].r) *
        (p.height / 2 - (circles[0].size + circles[2].size));
    const X3 =
      X3_AXIS + p.cos(circles[1].r + p.HALF_PI) * (circles[1].size / 2);
    const Y3 =
      Y3_AXIS + p.sin(circles[1].r + p.HALF_PI) * (circles[1].size / 2);
    if (viewGuides) {
      p.stroke(guideColor(128));
      p.strokeWeight(1);
      p.ellipse(X0_AXIS, Y0_AXIS, circles[0].size);
      p.ellipse(X1_AXIS, Y1_AXIS, circles[1].size);
      p.ellipse(X2_AXIS, Y2_AXIS, circles[2].size);
      p.ellipse(X3_AXIS, Y3_AXIS, circles[1].size);
      p.line(X0, Y0, X2, Y2);
      p.line(X1, Y1, X3, Y3);
    }
    for (let i = 0; i < circles.length; i++) {
      circles[i].r += circles[i].speed * circles[i].direction;
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
  "Reload page for a different variation. Click or tap sketch to toggle       guides .";
