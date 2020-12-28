import p5 from "p5";
import polarToCartesian from "util/polarToCartesian";
import { easeInOutQuad as ease } from "util/easing";
import "p5.createloop";

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const HUE = p.random();

  let maxR;

  p.setup = function () {
    if (RENDER) {
      p.pixelDensity(1);
      p.frameRate(30);
    }

    p.createCanvas(p.windowWidth, p.windowHeight);
    p.noStroke();
    p.createLoop(40, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 2,
    });
    p.colorMode(p.HSB, 1);

    maxR = p.dist(0, 0, p.width / 2, p.height / 2);
  };

  p.draw = function () {
    const { theta, noise1D } = p.animLoop;

    p.push();
    p.translate(p.width / 2, p.height / 2);
    p.rotate(theta * 2);
    p.scale(p.map(noise1D(0.1), -1, 1, 1, 2));

    for (let a = 0; a < p.TWO_PI; a += p.QUARTER_PI / 30) {
      let offsetA = 0;
      let direction = 1;
      for (let r = 0; r < maxR; r += 50) {
        let offsetB =
          offsetA +
          ease((noise1D(offsetA + 1) + 1) / 2) * (p.QUARTER_PI / 2) * direction;
        p.fill(
          p.lerpColor(
            p.color(HUE, 1, 1),
            p.color(HUE + 0.5 > 1 ? HUE + 0.5 - 1 : HUE + 0.5, 0.75, 0.25),
            ease(p.abs(p.sin(a * 5)))
          )
        );
        p.quad(
          ...polarToCartesian(0, 0, a + offsetA, r, true),
          ...polarToCartesian(0, 0, a + offsetB, r + 50, true),
          ...polarToCartesian(
            0,
            0,
            a + offsetB + p.QUARTER_PI / 30,
            r + 50,
            true
          ),
          ...polarToCartesian(0, 0, a + offsetA + p.QUARTER_PI / 30, r, true)
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
