import p5 from "p5";
import "p5.createloop";

const RENDER = process.env.DEV && false;

const sketch = function (p) {
  const SIZE = 3;
  const HUE = p.random(80);

  let particles = [];

  class Particle {
    constructor(x) {
      this.startX = x;
      this.startY = p.height / 2;
      this.x = this.startX;
      this.y = this.startY;
      this.move();
    }

    move() {
      const { noise2D } = p.animLoop;
      this.prev = { x: this.x, y: this.y };
      this.x =
        this.startX +
        noise2D(this.startX / 100, this.startY / 200) * (p.height / 2);
      this.y =
        this.startY +
        noise2D(this.startY / 100, this.startX / 200) * (p.height / 2);
    }

    display() {
      p.stroke(
        p.map(this.x, 0, p.width, HUE, HUE + 20),
        100,
        p.map(p.sin(this.y / 20), -1, 1, 50, 100)
      );
      p.line(this.prev.x, this.prev.y, this.x, this.y);
    }
  }

  p.setup = function () {
    if (RENDER) {
      p.pixelDensity(1);
      p.frameRate(30);
    }

    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(0);
    p.colorMode(p.HSB, 100);
    p.strokeWeight(SIZE);
    p.createLoop(60, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.5,
    });

    for (let x = 0; x < p.width; x += p.width / 10) {
      particles.push(new Particle(x));
    }
  };

  p.draw = function () {
    particles.forEach((particle) => {
      particle.move();
      particle.display();
    });
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
