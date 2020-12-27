import p5 from "p5";

const sketch = function (p) {
  let points = [];
  let max;

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.colorMode(p.HSB, 100);
    max = p.dist(0, 0, p.width, p.height);
  };

  p.draw = function () {
    p.background(0);

    if (points.length) {
      points.forEach((pt, i) => {
        if (i > 0) {
          const { x, y } = points[i - 1];
          p.stroke((i / points.length) * 100, 100, 100);
          p.strokeWeight(p.map(p.dist(x, y, pt.x, pt.y), 0, max, 10, 100));
          p.line(x, y, pt.x, pt.y);
        }
      });

      const now = +new Date();
      points = points.filter(({ time }) => now - time < 5000);
    }
  };

  function addPoint() {
    if (
      p.mouseX >= 0 &&
      p.mouseY >= 0 &&
      p.mouseX <= p.width &&
      p.mouseY <= p.height
    ) {
      points.push({ x: p.mouseX, y: p.mouseY, time: +new Date() });
    }
  }

  p.mouseMoved = addPoint;

  p.touchMoved = function () {
    addPoint();
    return false;
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
const description =
  "My son requested I draw the “love” in cursive and in rainbow colors. Drag your mouse or finger across the canvas.";
