import p5 from "p5";
import "p5.createloop";
import polarToCartesian from "util/polarToCartesian";
import lerpLine from "util/lerpLine";

const DURATION = 120;
const LINES = 3;

const sketch = function (p) {
  p.setup = function () {
    p.frameRate(60);

    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(0);
    p.colorMode(p.HSB, 2);
    p.blendMode(p.HARD_LIGHT);

    p.createLoop(DURATION, {
      noiseRadius: 0.5,
    });
  };

  p.draw = function () {
    const { noise1D, theta } = p.animLoop;
    const axis = polarToCartesian(
      p.width / 2,
      p.height / 2,
      theta,
      noise1D(0.01) * (p.width / 2),
      true
    );

    for (let a = 0; a < p.TWO_PI; a += p.TWO_PI / LINES) {
      p.stroke(noise1D(0.05) + 1, p.map(noise1D(a / 300), -1, 1, 1, 2), 2, 0.5);
      lerpLine(
        p,
        ...axis,
        ...polarToCartesian(
          ...axis,
          theta * 6 + a,
          noise1D(a / 100) * p.width,
          true
        ),
        p.map(noise1D(a / 400), -1, 1, 0.01, 0.1)
      );
    }
    p.frameCount === DURATION * 60 && p.noLoop();
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
