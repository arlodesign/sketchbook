import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();
import polarToCartesian from "util/polarToCartesian";
import { easeInOutQuart } from "util/easing";

const sketch = function (p) {
  const DURATION = 240;
  const RATE = 60;
  const MULTIPLIERS = [p.floor(p.random(1, 3)), p.floor(p.random(3, 7))];
  const HUE = p.random(0.1, 0.9);

  p.setup = function () {
    p.frameRate(RATE);
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.colorMode(p.HSL, 1);
    p.background(1 - HUE, 1, 0.1);
    p.createLoop(DURATION, {
      noiseRadius: 0.8,
    });
    p.rectMode(p.CENTER);
    p.noStroke();
    p.fill(1 - HUE, 0.5, 0.9);
    p.square(p.width / 2, p.height / 2, (p.width / 3) * 2);
    p.fill(1 - HUE, 1, 0.9);
    p.square(p.width / 2, p.height / 2, (p.width / 5) * 2);
    p.blendMode(p.SOFT_LIGHT);
  };

  p.draw = function () {
    const { theta, noise, noise1D, progress } = p.animLoop;
    const { x, y } = polarToCartesian(
      0,
      0,
      theta * MULTIPLIERS[0],
      p.height * noise()
    );

    p.translate(p.width / 2, p.height / 2);
    p.stroke(
      HUE + noise(10) / 10,
      easeInOutQuart(p.abs(noise1D(MULTIPLIERS[0] / 10))),
      easeInOutQuart(p.abs(noise1D(MULTIPLIERS[1] / 10))),
      (-(2 * progress * progress) + 2 * progress) / 2
    );
    p.line(
      p.constrain(x, -p.width / 5, p.width / 5),
      p.constrain(y, -p.width / 5, p.width / 5),
      ...polarToCartesian(0, 0, theta * MULTIPLIERS[1], p.width / 3, true)
    );

    p.frameCount % 100 === 0 &&
      console.info(`${p.frameCount} / ${DURATION * RATE}`);
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
