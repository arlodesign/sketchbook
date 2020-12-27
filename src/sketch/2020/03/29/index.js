import p5 from "p5";
import "p5.createloop";
import { easeOutQuad as ease } from "util/easing";

const sketch = function (p) {
  let size = 0;
  let socialDistance = 0;
  let particles = [];
  let id = 0;

  class Particle {
    constructor(x, y) {
      this.id = ++id;
      this.pos = p.createVector(x, y);
      this.dir = p.createVector(
        p.random([0.01, -0.01]),
        p.random([0.01, -0.01])
      );
      this.acc = p.createVector();
      this.trails = [];
      this.color = p.color(["lightgreen", "darkgreen", "green"][this.id % 3]);
      this.color.setAlpha(128);
    }
    draw() {
      p.noStroke();
      p.fill(96, 32);
      this.trails.forEach((pos) => p.ellipse(...pos, size));

      p.fill(this.color);
      p.ellipse(this.pos.x, this.pos.y, size);

      // p.text(this.id, this.pos.x, this.pos.y);
    }
    repulsors() {
      let r = [
        new Particle(this.pos.x, 0),
        new Particle(this.pos.x, p.height),
        new Particle(0, this.pos.y),
        new Particle(p.width, this.pos.y),
      ].concat(particles);
      r = r
        .filter(({ id }) => id !== this.id)
        .filter(
          ({ pos }) =>
            p.dist(pos.x, pos.y, this.pos.x, this.pos.y) < socialDistance
        )
        .sort(
          ({ pos: aPos }, { pos: bPos }) =>
            p.dist(aPos.x, aPos.y, this.pos.x, this.pos.y) -
            p.dist(bPos.x, bPos.y, this.pos.x, this.pos.y)
        )[0];

      return r;
    }
    update() {
      const cp = this.repulsors();
      this.trails.unshift([this.pos.x, this.pos.y]);
      this.trails = this.trails.slice(0, 5);

      if (cp) {
        const direction = p5.Vector.sub(cp.pos, this.pos);
        direction.rotate(p.PI);
        direction.normalize();
        this.dir.add(direction);
        this.dir.normalize();
        this.pos.add(this.dir);

        const force = p5.Vector.mult(this.dir, this.pos);
        const dist = p.dist(cp.pos.x, cp.pos.y, this.pos.x, this.pos.y);
        const mag = ease((socialDistance - dist) / socialDistance);
        force.setMag(mag);
        this.acc.add(force);

        this.pos.add(this.acc);
      } else {
        this.dir = p.createVector(0, 0);
        this.acc = p.createVector();
      }
    }
  }

  function isOnCanvas() {
    return (
      p.mouseX >= 0 &&
      p.mouseY >= 0 &&
      p.mouseX <= p.width &&
      p.mouseY <= p.height
    );
  }

  function pushParticle() {
    isOnCanvas && particles.push(new Particle(p.mouseX, p.mouseY));
  }

  p.mousePressed = pushParticle;
  p.mouseDragged = pushParticle;
  p.touchMoved = function () {
    pushParticle();
    return !isOnCanvas;
  };

  p.setup = function () {
    p.pixelDensity(1);
    p.frameRate(30);

    p.createCanvas(p.windowWidth, p.windowHeight);
    p.noSmooth();
    particles.push(new Particle(p.width / 2, p.height / 2));
    size = p.width / 20;
    socialDistance += p.width / 8;
  };

  p.draw = function () {
    p.background(128);

    if (p.frameCount % 100 === 0) {
      particles.push(new Particle(p.width / 2, p.height / 2));
    }

    particles.forEach((particle) => {
      particle.update();
      particle.draw();
    });

    // remove off-canvas particles for performance
    particles = particles.filter(
      ({ pos }) =>
        pos.x > -(size * 2) &&
        pos.x < p.width + size * 2 &&
        pos.y > -(size * 2) &&
        pos.y < p.height + size * 2
    );

    p.fill(0);
    p.text(particles.length, 10, p.height - 10);
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
document.getElementById("description").innerHTML =
  "Click and drag to maintain social distancing.";
