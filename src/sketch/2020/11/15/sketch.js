import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();
import polarToCartesian, {
  polarToCartesianEllipse,
} from "util/polarToCartesian";

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const RENDER_SIZE = 1080;
  const DURATION = RENDER ? 800 : 40;
  const RATE = RENDER ? 3 : 60;
  const POINTS = 999;
  const HUE = p.random();

  let particles = [];

  function getLoopedProgress() {
    return p.sin(2 * p.PI * p.animLoop.progress - p.PI / 2) / 2 + 0.5 || 0;
  }

  class Particle {
    constructor(a, d, c) {
      this.angle = a;
      this.distance = d;
      this.start = this.getPoint(a, d);
      this.color = p.color(c, 0.7, c);
    }
    getPoint(a, d) {
      return polarToCartesianEllipse(
        p.width / 2,
        p.height / 2,
        a || this.angle,
        d || this.distance,
        ((d || this.distance) / 2) * getLoopedProgress(),
        true
      );
    }
    draw() {
      const { theta, noise2D } = p.animLoop;
      const clr = this.color;
      clr.setAlpha(getLoopedProgress() / 6);
      p.stroke(clr);

      p.point(
        ...polarToCartesian(
          ...this.getPoint(),
          theta,
          noise2D(...this.start.map((v) => v / 300)) *
            getLoopedProgress() *
            p.width,
          true
        )
      );
    }
  }

  p.setup = function () {
    p.pixelDensity(1);
    p.frameRate(RATE);
    p.createCanvas(RENDER_SIZE, RENDER_SIZE);
    p.strokeWeight(0.5);
    p.noSmooth();
    p.blendMode(p.HARD_LIGHT);
    p.colorMode(p.HSL, 1);
    p.background(HUE, 1, 0.95);
    p.createLoop(DURATION, {
      noiseRadius: 0.4,
    });
    for (let i = 0; i < POINTS; i++) {
      const a = p.TWO_PI * (i / POINTS);
      particles.push(
        new Particle(
          a,
          p.map(p.noise(a / 500), 0, 1, p.width / 4, p.width / 2),
          (HUE + (i % 4) / 4) % 1
        )
      );
    }
  };

  p.draw = function () {
    const { progress } = p.animLoop;
    particles.forEach((pt) => pt.draw());

    if (RENDER && p.frameCount <= DURATION * RATE) {
      p.frameCount % 100 === 0 && console.info(`${p.ceil(progress * 100)}%`);
      p.save(
        `${String(p.frameCount).padStart(
          String(DURATION * RATE).length,
          "0"
        )}.png`
      );
    }
    if (p.frameCount === DURATION * RATE) {
      p.noLoop();
      p.save(`2020-11-15_${Date.now()}.png`);
    }
  };
};

new p5(sketch, "sketch");
