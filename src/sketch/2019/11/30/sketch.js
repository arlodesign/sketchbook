import p5 from "p5";
import polarToCartesian from "util/polarToCartesian";
import "p5.createloop";

const sketch = function (p) {
  const RENDER = p.getURLParams().render;

  let maxR;

  p.setup = function () {
    p.pixelDensity(1);
    p.frameRate(30);

    p.createCanvas(p.windowWidth, p.windowHeight);

    maxR = p.dist(0, 0, p.width / 2, p.height / 2);
    p.noStroke();

    p.createLoop(40, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 1,
    });
  };

  p.draw = function () {
    const { theta, noise1D } = p.animLoop;

    p.background(255);
    p.push();
    p.translate(p.width / 2, p.height / 2);
    p.rotate(theta);
    p.scale(p.map(noise1D(0.1), -1, 1, 1, 4));

    p.fill(0);
    for (let a = 0; a < p.TWO_PI; a += p.QUARTER_PI / 6) {
      let offsetA = 0;
      let direction = 1;
      for (let r = p.width / 1000; r <= maxR; r += Math.pow(r, 1.001)) {
        let offsetB = offsetA + noise1D(0.05) * direction;

        p.quad(
          ...polarToCartesian(0, 0, a + offsetA, r, true),
          ...polarToCartesian(0, 0, a + offsetB, r + Math.pow(r, 1.001), true),
          ...polarToCartesian(
            0,
            0,
            a + offsetB + p.QUARTER_PI / 10,
            r + Math.pow(r, 1.001),
            true
          ),
          ...polarToCartesian(0, 0, a + offsetA + p.QUARTER_PI / 10, r, true)
        );
        offsetA = offsetB;
        direction = -direction;
      }
    }

    p.pop();
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
