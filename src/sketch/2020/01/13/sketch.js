import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const DURATION = 49;
  const RATE = 30;
  const MULTIPLIERS = p.shuffle([1, 2, 3, 5, 7, 11]);
  const WEIGHT = 2;

  p.setup = function () {
    p.pixelDensity(1);
    p.frameRate(RATE);

    p.createCanvas(p.windowWidth, p.windowHeight);
    p.createLoop(DURATION, {
      gif: RENDER ? { render: false, open: true } : false,
    });
    p.strokeWeight(WEIGHT);
    p.noSmooth();
    p.strokeCap(p.SQUARE);
  };

  p.draw = function () {
    p.blendMode(p.BLEND);
    p.background(255);
    p.blendMode(p.MULTIPLY);

    for (let y = 0; y < p.height; y += WEIGHT * 2) {
      const a = p.map(
        y,
        0,
        p.height,
        p.animLoop.theta,
        p.animLoop.theta + p.TWO_PI
      );

      p.stroke("cyan");
      p.line(
        p.map(p.sin(a * MULTIPLIERS[0]), -1, 1, 0, p.width),
        y,
        p.map(p.cos(a * MULTIPLIERS[1]), -1, 1, 0, p.width),
        y
      );

      p.stroke("magenta");
      p.line(
        p.map(p.sin(a * MULTIPLIERS[2]), -1, 1, 0, p.width),
        y + WEIGHT / 2,
        p.map(p.cos(a * MULTIPLIERS[3]), -1, 1, 0, p.width),
        y + WEIGHT / 2
      );
      p.stroke("yellow");
      p.line(
        p.map(p.sin(a * MULTIPLIERS[4]), -1, 1, 0, p.width),
        y + WEIGHT,
        p.map(p.cos(a * MULTIPLIERS[5]), -1, 1, 0, p.width),
        y + WEIGHT
      );
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
