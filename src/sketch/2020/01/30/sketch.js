import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();
import polarToCartesian from "util/polarToCartesian";

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const DURATION = 120;
  const RATE = 60;
  const MULTIPLIERS = [p.floor(p.random(1, 3)), p.floor(p.random(3, 7))];
  const HUE = p.random(0.2, 0.8);

  p.setup = function () {
    p.frameRate(RATE);
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(255);
    p.colorMode(p.HSL, 1);
    p.createLoop(DURATION, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.8,
    });
    p.rectMode(p.CENTER);
    p.noStroke();
    p.fill(1 - HUE, 1, 0.9);
    p.square(p.width / 2, p.height / 2, (p.width / 3) * 2);
    p.blendMode(p.OVERLAY);
  };

  p.draw = function () {
    const { theta, noise, noise1D } = p.animLoop;
    const { x, y } = polarToCartesian(
      0,
      0,
      theta * MULTIPLIERS[0],
      p.height * noise()
    );

    p.translate(p.width / 2, p.height / 2);
    p.stroke(
      p.map(noise(10), -1, 1, HUE - 0.2, HUE + 0.2),
      p.abs(noise1D(MULTIPLIERS[0] / 10)),
      p.abs(noise1D(MULTIPLIERS[1] / 10)),
      0.3
    );
    p.line(
      ...polarToCartesian(0, 0, theta * MULTIPLIERS[1], p.width / 4, true),
      p.constrain(x, -p.width / 3, p.width / 3),
      p.constrain(y, -p.width / 3, p.width / 3)
    );

    p.frameCount % 100 === 0 &&
      console.info(`${p.frameCount} / ${DURATION * RATE}`);
    !RENDER && p.frameCount === DURATION * RATE && p.noLoop();
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
