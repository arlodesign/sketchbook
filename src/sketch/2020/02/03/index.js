import p5 from "p5";
import "p5.createloop";

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const DURATION = 20;
  const RATE = 30;

  let margin;
  let h;

  p.setup = function () {
    p.pixelDensity(RENDER ? 2 : 1);
    p.frameRate(RATE);
    p.noSmooth();
    p.strokeCap(p.SQUARE);
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(255);
    p.createLoop(DURATION, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.3,
    });

    margin = p.floor(p.width / 30);
    h = p.height - margin * 2;
  };

  p.draw = function () {
    const { theta, noise2D } = p.animLoop;
    p.background(255);

    for (let x = margin; x <= p.width - margin; x++) {
      p.stroke((x % 3) * (255 / 3));

      const gap = p.map(p.sin(theta + x), -1, 1, h / 4, h);
      const y = p.map(
        noise2D(x / 100, (x % 3) + 1),
        -1,
        1,
        margin,
        margin + h - gap
      );

      p.line(x, margin, x, y);
      p.line(x, y + gap, x, p.height - margin);
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
