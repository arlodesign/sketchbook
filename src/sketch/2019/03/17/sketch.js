import p5 from "p5";
import polarToCartesian from "util/polarToCartesian";

const sketch = function (p) {
  const GRID_SIZE = 60;
  let hue;

  let manualControl = false;

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.colorMode(p.HSB, 100);
    hue = p.random(0, 45);
    p.fill(hue, 100, 75);
    p.noStroke();
  };

  p.draw = function () {
    p.background(100 - hue, 100, 50);

    for (let gx = GRID_SIZE / 2; gx < p.width; gx += GRID_SIZE) {
      for (let gy = GRID_SIZE / 2; gy < p.height; gy += GRID_SIZE) {
        p.push();
        p.translate(gx, gy);

        let focus = manualControl
          ? p.createVector(p.mouseX, p.mouseY)
          : p.createVector(
              ...polarToCartesian(
                p.width / 2,
                p.height / 2,
                p.frameCount / 100,
                p.width * p.noise(p.frameCount / 1000),
                true
              )
            );

        focus.sub(p.createVector(gx, gy));
        focus.setMag(0.9 * p.min(GRID_SIZE, p.dist(0, 0, focus.x, focus.y)));

        p.beginShape();
        p.vertex(focus.x, focus.y);
        const handles = [
          p.createVector(focus.y, -focus.x).mult(0.333),
          p.createVector(-focus.y, focus.x).mult(0.333),
        ];
        p.quadraticVertex(handles[0].x, handles[0].y, 0, 0);
        p.quadraticVertex(handles[1].x, handles[1].y, focus.x, focus.y);
        p.endShape(p.CLOSE);
        p.pop();
      }
    }
  };

  p.mousePressed = function () {
    manualControl = !manualControl;
  };

  p.touchMoved = function () {
    if (
      p.mouseX >= 0 &&
      p.mouseY >= 0 &&
      p.mouseX <= p.width &&
      p.mouseY <= p.height
    ) {
      return false;
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
const description =
  "Learning vector math. Click or tap on the canvas to control the focal point. Refresh page for a different color variation.";
