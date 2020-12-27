import p5 from "p5";

const sketch = function (p) {
  const SIZE = 30;

  class Particle {
    constructor() {
      this.color = p.color(p.random(33, 66), 50, 75);
      this.location = p.createVector(p.random(p.width), p.random(p.height));
      this.prevLocations = [];
      this.velocity = p5.Vector.random2D();
    }
    update() {
      let mouse = p.createVector(p.mouseX, p.mouseY);
      mouse.sub(this.location);
      mouse.setMag(0.1);
      this.velocity.add(mouse.add(p5.Vector.random2D()));
      this.prevLocations.push([this.location.x, this.location.y]);
      if (this.prevLocations.length > SIZE / 2) {
        this.prevLocations = this.prevLocations.slice(1, SIZE);
      }
      this.location.add(this.velocity);
      this.velocity.limit(5);
    }
    draw() {
      p.beginShape();
      this.prevLocations.forEach((prev, i) => {
        p.fill(
          p.lerpColor(
            p.color(0, 0),
            this.color,
            (1 / this.prevLocations.length) * i
          )
        );
        p.ellipse(...prev, SIZE);
      });
      p.endShape();
      p.fill(this.color);
      p.ellipse(this.location.x, this.location.y, SIZE);
    }
  }

  let particles = [];

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.colorMode(p.HSB, 100);
    particles = Array.from({ length: SIZE }, () => new Particle());
    p.noStroke();
  };

  p.draw = function () {
    p.background(0);
    particles.forEach((particle) => {
      particle.update();
      particle.draw();
    });
  };

  p.touchMoved = function () {
    if (
      p.mouseX >= 0 &&
      p.mouseY >= 0 &&
      p.mouseX <= p.width &&
      p.mouseY <= p.height
    ) {
      return false;
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
const description =
  "More experimentations with vector math. The particles are attracted to a mouse pointer or taps on the canvas.";
