import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();
import { easeInQuad as ease } from "util/easing";

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const DURATION = 120;
  const RATE = 30;
  const NOISE_SCALE = 1200;
  const SPEED = 2;
  const HUE = p.random(1 / 3);
  const HUES = p.shuffle([HUE, HUE + 1 / 3, HUE + 2 / 3]);
  const PARTICLE_COUNT = 200;

  let particles = [];

  class Particle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.dir = p.createVector(0, 0);
      this.vel = p.createVector(0, 0);
      this.pos = p.createVector(x, y);
    }
    move() {
      this.prevPos = { x: this.pos.x, y: this.pos.y };

      const noiseVal = p.animLoop.noise2D(
        this.x / NOISE_SCALE,
        this.y / NOISE_SCALE,
        {
          radius: SPEED * (1 - p.animLoop.progress),
        }
      );
      this.dir.x = p.sin(p.animLoop.theta) * noiseVal;
      this.dir.y = p.cos(p.animLoop.theta) * noiseVal;
      this.vel = this.dir.copy();
      this.vel.mult(SPEED);
      this.pos.add(this.vel);
    }
    draw() {
      this.move();
      p.line(this.prevPos.x, this.prevPos.y, this.pos.x, this.pos.y);
    }
  }

  p.setup = function () {
    p.pixelDensity(2);
    p.frameRate(RATE);
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.colorMode(p.HSL, 1);
    p.background(p.random(HUES), 0.2, 0.8);
    p.createLoop(DURATION, {
      gif: RENDER ? { render: false, open: true } : false,
    });

    particles = Array(3)
      .fill()
      .map(() =>
        Array(PARTICLE_COUNT)
          .fill()
          .map(
            (_, i) =>
              new Particle(
                p.random(
                  (p.width / PARTICLE_COUNT) * i,
                  (p.width / PARTICLE_COUNT) * (i + 1)
                ),
                p.random(
                  (p.height / PARTICLE_COUNT) * i,
                  (p.height / PARTICLE_COUNT) * (i + 1)
                )
              )
          )
      );
  };

  p.draw = function () {
    const { progress } = p.animLoop;

    const alpha = ease(-2 * progress * progress + 2 * progress);

    particles.forEach((particleSet, i) => {
      p.strokeWeight((i + 1) / 2);
      p.stroke(HUES[i], 1, i / 3, alpha);
      particleSet.forEach((particle) => particle.draw());
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
