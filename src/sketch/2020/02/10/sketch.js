import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();
import polarToCartesian, {
  polarToCartesianEllipse,
} from "util/polarToCartesian";
import { easeInQuart as ease, easeOutQuad } from "util/easing";
import lerpLine from "util/lerpLine";

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const DURATION = 360;
  const RATE = 60;
  const SIZE = 50;
  const HUE = p.random(p.random(0.7), p.random(0.3, 1));
  const M = p.shuffle([p.floor(p.random(20, 50)), p.floor(p.random(50, 90))]);

  p.setup = function () {
    p.frameRate(RATE);
    p.noSmooth();
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.colorMode(p.HSB, 1);
    p.background(HUE + 0.5 > 1 ? HUE - 0.5 : HUE + 0.5, 0.5, 0.1);
    p.noStroke();
    p.blendMode(p.OVERLAY);
    p.createLoop(DURATION, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.2,
    });
  };

  p.draw = function () {
    const { progress, theta, noise, noise1D, noise2D } = p.animLoop;

    p.stroke(HUE + noise1D(HUE) * 0.3, easeOutQuad(p.abs(noise())), 1, 0.1);

    let bezierPoints = [];
    bezierPoints.push([0, (p.height - p.width) / 2]);
    bezierPoints.push(
      polarToCartesian(0, (p.height - p.width) / 2, theta * M[0], p.width, true)
    );
    bezierPoints.push(
      polarToCartesian(
        p.width,
        (p.height - p.width) / 2 + p.width,
        -theta * M[1],
        p.width,
        true
      )
    );
    bezierPoints.push([p.width, (p.height - p.width) / 2 + p.width]);

    const x = p.bezierPoint(...bezierPoints.map((cp) => cp[0]), progress);
    const y = p.bezierPoint(...bezierPoints.map((cp) => cp[1]), progress);

    for (let a = 0; a < 1; a += 0.005) {
      const center = polarToCartesian(
        x,
        y,
        theta * DURATION,
        SIZE * 10 * ease(p.abs(noise2D(x, y, { noiseRadius: 10 }))),
        true
      );

      lerpLine(
        p,
        ...center,
        ...polarToCartesianEllipse(
          ...center,
          p.TWO_PI * a,
          (SIZE * (noise1D(x) + 1)) / 2,
          (SIZE * (noise1D(y) + 1)) / 2,
          true
        ),
        p.random(0.05, 0.1),
        false
      );
    }

    p.frameCount % 100 === 0 && console.info(`${p.floor(progress * 100)}%`);
    if (!RENDER && p.frameCount === DURATION * RATE) {
      console.info("100%");
      p.noLoop();
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
