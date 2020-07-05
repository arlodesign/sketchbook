import p5 from "p5";

const sketch = function (p) {
  let circleCount = 3;
  let circles = [];
  let viewGuides = false;
  let drawing;
  let speeds = new Array(50).fill().map((_, i) => (i + 1) / 50);
  let speed;
  let maxWidth = 0;

  function guideColor(alpha) {
    return p.color(255, 0, 0, alpha);
  }

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    drawing = p.createGraphics(p.width, p.height);
    for (let i = 0; i < circleCount; i++) {
      const THIS_SPEED = p.random(speeds);
      const THIS_SIZE = (p.width / circleCount) * p.random(0.5, 1.5);
      speeds = speeds.filter((s) => s !== THIS_SPEED);
      circles.push({
        r: p.HALF_PI * 3,
        speed: THIS_SPEED / p.TWO_PI,
        size: THIS_SIZE,
        direction: p.random([1, -1]),
        lastPoint: null,
      });
      maxWidth += THIS_SIZE / 2;
    }
    maxWidth -= circles[0].size;
  };

  p.draw = function () {
    p.background(255);
    p.frameRate(viewGuides ? 15 : 30);
    p.image(drawing, 0, 0);
    let axis = {
      x: p.width / 2,
      y: p.height / 2,
    };
    circles.forEach((c, i) => {
      const X = i % 3 ? axis.x + p.cos(c.r) * (c.size / 2) : axis.x;
      const Y = i % 2 ? axis.y : axis.y + p.sin(c.r) * (c.size / 2);
      if (viewGuides) {
        const ALPHA = p.map(i, 0, circleCount - 1, 255 / 5, 255);
        p.noFill();
        p.stroke(255, 255, 255, ALPHA);
        p.strokeWeight(5);
        p.ellipse(axis.x, axis.y, i % 3 ? c.size : 1, i % 2 ? 1 : c.size);
        p.stroke(guideColor(ALPHA));
        p.strokeWeight(1);
        p.ellipse(axis.x, axis.y, i % 3 ? c.size : 1, i % 2 ? 1 : c.size);
        p.noStroke();
        p.fill(255, 255, 255, ALPHA);
        p.ellipse(X, Y, i === circleCount - 1 ? 12 : 6);
        p.fill(guideColor(ALPHA));
        p.ellipse(X, Y, i === circleCount - 1 ? 6 : 3);
      }
      if (i === circleCount - 1 && c.lastPoint) {
        if (X >= 0 && X <= p.width && Y >= 0 && Y <= p.height) {
          for (let l = 0; l < 1; l += 0.01) {
            drawing.line(X, Y, c.lastPoint.x, c.lastPoint.y);
          }
        }
      }
      axis = {
        x: X,
        y: Y,
      };
      circles[i].lastPoint = axis;
      circles[i].r += c.speed * circles[i].direction;
    });
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
