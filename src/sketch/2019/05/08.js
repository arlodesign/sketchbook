import p5 from "p5";
import lerpLine from "util/lerpLine";

const sketch = function (p) {
  const ITERATIONS = 3;
  const HUE = p.random(100 / ITERATIONS);
  const RAND = p.random(30, 50);

  let i = 1;
  let y = 0;

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.blendMode(p.OVERLAY);
    p.colorMode(p.HSB, 100);
    p.background(HUE * ITERATIONS, 10, 100 / ITERATIONS);
  };

  p.draw = function () {
    const NOISE =
      p.noise(p.frameCount * (i / 1000), y * (i / 1000)) * (i / 250);
    const DIST = p.map(
      p.noise(p.frameCount / (RAND * i), y / 500),
      0,
      1,
      0,
      p.width / (i / 2 + 0.5),
      true
    );

    p.strokeWeight(i + 1);
    p.stroke(HUE * i, (100 / ITERATIONS) * i, 75, 50);

    lerpLine(p, 0, y, p.width / 2 + DIST, y, NOISE);

    y += i;
    if (y > p.height) {
      i++;
      y = 0;
      i > ITERATIONS && p.noLoop();
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
