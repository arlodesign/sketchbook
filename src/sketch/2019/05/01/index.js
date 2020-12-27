import p5 from "p5";
import lerpLine from "util/lerpLine";

const sketch = function (p) {
  const MARGIN = 100;

  let y = MARGIN;

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.stroke(0);
    p.background(255);
  };

  p.draw = function () {
    lerpLine(
      p,
      MARGIN,
      y,
      p.width - MARGIN,
      y,
      p.noise(p.frameCount, y) / (4 * y)
    );
    y++;
    y > p.height - MARGIN && p.noLoop();
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
