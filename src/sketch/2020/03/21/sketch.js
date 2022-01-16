import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();
import { easeOutQuad as ease } from "util/easing";

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const DURATION = 60;
  const RATE = 30;
  const G = 25;
  const HUE = p.random();

  let attractors = [];
  let particles = [];
  let alpha = 0;

  class Particle {
    constructor(x, y, sat) {
      this.pos = p.createVector(x, y);
      this.vel = p5.Vector.random2D();
      this.acc = p.createVector();
      this.prev = null;
      this.sat = sat;
    }
    update() {
      this.pos.add(this.vel);
      this.vel.add(this.acc);
    }
    show() {
      p.stroke(HUE, this.sat, 0.5, alpha);
      if (this.prev) {
        let closestAttractorDist = 10000;
        let closestAttractor = null;
        attractors.forEach((attractor) => {
          const thisDist = p.dist(
            attractor.x,
            attractor.y,
            this.pos.x,
            this.pos.y
          );
          if (thisDist < closestAttractorDist) {
            closestAttractorDist = thisDist;
            closestAttractor = attractor;
          }
        });
        p.line(this.pos.x, this.pos.y, closestAttractor.x, closestAttractor.y);
        p.line(this.pos.x, this.pos.y, this.prev.x, this.prev.y);
      }
      this.prev = { x: this.pos.x, y: this.pos.y };
    }
    attracted(target) {
      const force = p5.Vector.sub(target, this.pos);
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
    p.background(1 - HUE, 0.2, 1);
    p.blendMode(p.HARD_LIGHT);
    p.createLoop(DURATION, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.1,
    });

    attractors = Array(10)
      .fill()
      .map((_) =>
        p.createVector(
          p.randomGaussian(p.width / 2, p.width / 5),
          p.randomGaussian(p.height / 2, p.width / 5)
        )
      );
    particles = Array(5)
      .fill()
      .map(
        (_) => new Particle(p.random(p.width), p.random(p.height), p.random())
      );
  };

  p.draw = function () {
    const { progress } = p.animLoop;
    const easedProgress = ease(progress);
    alpha = -2 * easedProgress * easedProgress + 2 * easedProgress;

    particles.forEach((particle) => {
      attractors.forEach((attractor) => {
        // p.point(attractor.x, attractor.y);
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
