import p5 from "p5";
import "p5.createloop";
import polarToCartesian from "util/polarToCartesian";

const RENDER = process.env.DEV && true;
const DURATION = 60;

const sketch = function (p) {
  const SIZE = 3;
  const HUE = p.random(100);

  let frameRate;
  let particles = [];
  let startRadius;

  class Particle {
    constructor(x, y) {
      this.startX = x;
      this.startY = y;
      this.x = this.startX;
      this.y = this.startY;
      this.move();
    }

    move() {
      const { theta, noise2D } = p.animLoop;
      this.prev = { x: this.x, y: this.y };

      const noiseX =
        noise2D(this.startX / 100, this.startY / 200) * (p.height / 2);
      const noiseY =
        noise2D(this.startY / 100, this.startX / 200) * (p.height / 2);

      this.x = this.startX + p.map(p.cos(theta), -1, 1, 0, noiseX);
      this.y = this.startY + p.map(p.sin(theta), -1, 1, 0, noiseY);
    }

    display() {
      p.stroke(
        HUE,
        100,
        p.map(
          p.dist(this.startX, this.startY, this.x, this.y),
          0,
          startRadius,
          100,
          0,
          true
        ),
        p.map(
          p.dist(this.startX, this.startY, this.x, this.y),
          0,
          startRadius,
          50,
          0,
          true
        )
      );
      p.line(this.x, this.y, this.prev.x, this.prev.y);
    }
  }

  p.setup = function () {
    p.frameRate(60);

    p.createCanvas(p.windowWidth, p.windowHeight);
    p.colorMode(p.HSL, 100);
    p.background(HUE, 100, 5);
    p.strokeWeight(SIZE);

    p.createLoop(DURATION, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 1.5,
    });

    startRadius = p.width / 5;

    for (let a = 0; a < p.TWO_PI; a += p.TWO_PI / 100) {
      particles.push(
        new Particle(
          ...polarToCartesian(p.width / 2, p.height / 2, a, startRadius, true)
        )
      );
    }
  };

  p.draw = function () {
    particles.forEach((particle) => {
      particle.move();
      particle.display();
    });
    p.frameCount === DURATION * 60 && !RENDER && p.noLoop();
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
