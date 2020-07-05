import p5 from "p5";

const sketch = function (p) {
  const P_COUNT = 500;
  const P_SIZE = 30;

  let colors = [];
  let particles = [];

  class Particle {
    constructor() {
      this.vector = p.createVector(
        p.randomGaussian(p.width * 0.666, P_SIZE),
        p.randomGaussian(p.height * 0.666, P_SIZE)
      );
      this.velocity = p.createVector(p.random(-1, 1), p.random(-1, 1));
      this.onCanvas = true;
    }
    draw() {
      const { x, y } = this.vector;
      const size = p.map(
        p.dist(x, y, p.width * 0.666, p.height * 0.666),
        0,
        p.dist(0, 0, p.width * 0.666, p.height * 0.666),
        1,
        P_SIZE
      );

      if (this.onCanvas) {
        p.ellipse(x, y, size);
        this.vector.add(this.velocity);
        this.velocity.add(
          p.map(p.noise(p.frameCount / 100, x / 10, y / 10), 0, 1, -0.05, 0.05),
          p.map(p.noise(p.frameCount / 100, y / 10, x / 10), 0, 1, -0.05, 0.05)
        );
      }
      if (
        (x < -P_SIZE || x > p.width + P_SIZE) &&
        (y < -P_SIZE || y > p.height + P_SIZE)
      ) {
        this.onCanvas = false;
      }
    }
  }

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.colorMode(p.HSB, 100);
    colors = [
      p.color(p.random(0, 50), 50, 25),
      p.color(p.random(50, 100), 50, 75),
    ];
    p.background(colors[1]);
    particles = Array.from({ length: P_COUNT }, () => new Particle());
    p.noStroke();
  };

  p.draw = function () {
    p.fill(
      p.lerpColor(...colors, p.map(p.sin(p.frameCount / 100), -1, 1, 0, 1))
    );
    particles.forEach((p) => p.draw());
    if (particles.filter((p) => !p.onCanvas).length > P_COUNT / 2) {
      p.noLoop();
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
document.getElementById("description").innerHTML =
  "Refresh page for a different color variatio n";
