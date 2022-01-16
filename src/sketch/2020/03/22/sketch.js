import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();
import { easeOutQuad as ease } from "util/easing";
import polarToCartesian from "util/polarToCartesian";

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const DURATION = 60;
  const RATE = 30;
  const G = 25;
  const HUE = p.random();

  let attractors = [];
  let particles = [];
  let alpha = 0;

  class Attractor {
    constructor(dir) {
      this.x = p.randomGaussian(p.width / 2, p.width / 20);
      this.y = p.randomGaussian(p.height / 2, p.width / 20);
      this.dir = dir;
      this.start = p.random(p.TWO_PI);
    }
    get pos() {
      return p.createVector(
        ...polarToCartesian(
          this.x,
          this.y,
          p.animLoop.theta * this.dir + this.start,
          p.width / 3,
          true
        )
      );
    }
  }

  class Particle {
    constructor(x, y, sat) {
      this.pos = p.createVector(
        p.randomGaussian(p.width / 2, p.width / 3),
        p.randomGaussian(p.height / 2, p.width / 3)
      );
      this.vel = p5.Vector.random2D();
      this.acc = p.createVector();
      this.prev = null;
      this.sat = p.random();
    }
    update() {
      this.pos.add(this.vel);
      this.vel.add(this.acc);
    }
    show() {
      if (this.prev) {
        let closestAttractorDist = 100000;
        let closestAttractor = null;
        attractors.forEach((attractor) => {
          const thisDist = p.dist(
            attractor.pos.x,
            attractor.pos.y,
            this.pos.x,
            this.pos.y
          );
          if (thisDist < closestAttractorDist) {
            closestAttractorDist = thisDist;
            closestAttractor = attractor;
          }
        });
        p.stroke(
          HUE,
          this.sat,
          p.map(closestAttractorDist, 0, p.width / 2, 1, 0, true),
          alpha
        );
        p.line(
          this.pos.x,
          this.pos.y,
          closestAttractor.pos.x,
          closestAttractor.pos.y
        );
        p.line(this.pos.x, this.pos.y, this.prev.x, this.prev.y);
      }
      this.prev = { x: this.pos.x, y: this.pos.y };
    }
    attracted(target) {
      let force = p5.Vector.sub(target.pos, this.pos);
      force.mult(target.dir);
      let dsquared = force.magSq();
      dsquared = p.min(dsquared, G * 20);
      const strength = G / dsquared;
      force.setMag(strength);
      this.acc = force;
    }
  }

  p.setup = function () {
    p.pixelDensity(RENDER ? 1 : 2);
    p.frameRate(RATE);
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.colorMode(p.HSB, 1);
    p.background(1 - HUE, 0.2, 0.2);
    p.blendMode(p.HARD_LIGHT);
    p.createLoop(DURATION, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.1,
    });

    attractors = Array(3)
      .fill()
      .map((_, i) => new Attractor(i % 2 ? -1 : 1));
    particles = Array(10)
      .fill()
      .map((_) => new Particle());
  };

  p.draw = function () {
    const { progress } = p.animLoop;
    const easedProgress = ease(progress);
    alpha = -1 * easedProgress * easedProgress + easedProgress;

    particles.forEach((particle) => {
      attractors.forEach((attractor) => {
        particle.attracted(attractor);
      });
      particle.update();
      particle.show();
    });

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
