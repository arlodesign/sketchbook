import p5 from "p5";
import "p5.createloop";

const RENDER = false;

const sketch = function (p) {
  const GRID = 30;
  const FRAMES = 600;
  const QTY = 3;
  const HUE = p.random(1 / QTY);
  const COLORS = Array.from({ length: QTY }, (_, i) => HUE + (1 / QTY) * i);

  p.setup = function () {
    if (RENDER) {
      p.pixelDensity(1);
      p.frameRate(30);
    }
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.createLoop(10, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 1,
    });
    p.colorMode(p.HSB, 1);
  };

  p.draw = function () {
    p.blendMode(p.BLEND);
    p.background(0);
    p.blendMode(p.HARD_LIGHT);

    for (let i = 0; i <= p.width; i += GRID) {
      COLORS.forEach((c) => {
        p.push();
        p.translate(i, 0);
        p.stroke(c, 0.5, 1);
        p.strokeWeight(p.map(p.cos(p.animLoop.theta), -1, 1, 1, GRID / 2));

        const x = p.map(
          p.cos(p.animLoop.theta),
          -1,
          1,
          0,
          p.animLoop.noise2D(i, c) * GRID * 3
        );
        p.line(x, 0, x, p.height);
        p.pop();
      });
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
