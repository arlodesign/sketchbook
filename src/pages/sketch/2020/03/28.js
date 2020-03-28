import React from "react";
import SketchLayout from "~components/sketch-layout";
import "p5.createloop";
import { easeOutQuad as ease } from "~lib/easing";

const sketch = function(p) {
  let size = 0;
  let socialDistance = 0;
  let particles = [];
  let id = 0;
  let moved = 0;

  class Particle {
    constructor(x, y) {
      this.id = ++id;
      this.pos = p.createVector(x, y);
      this.dir = p.createVector(0, 0);
      this.acc = p.createVector();
      this.trails = [];
    }
    draw() {
      p.noStroke();
      p.fill(255, 0, 255, 32);
      this.trails.forEach(pos => p.ellipse(...pos, size));

      p.fill(this.id % 2 ? "pink" : "orange");
      p.ellipse(this.pos.x, this.pos.y, size);
    }
    closestParticles() {
      return particles
        .filter(({ id }) => id !== this.id)
        .filter(
          ({ pos }) =>
            p.dist(pos.x, pos.y, this.pos.x, this.pos.y) < socialDistance
        )
        .sort(
          ({ pos: aPos }, { pos: bPos }) =>
            p.dist(aPos.x, aPos.y, this.pos.x, this.pos.y) -
            p.dist(bPos.x, bPos.y, this.pos.x, this.pos.y)
        );
    }
    update() {
      const cps = this.closestParticles();
      this.trails.unshift([this.pos.x, this.pos.y]);
      this.trails = this.trails.slice(0, 5);

      cps.forEach(cp => {
        moved++;

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
      });
    }
  }

  function pushParticle() {
    particles.push(new Particle(p.mouseX, p.mouseY));
  }

  p.mousePressed = pushParticle;
  p.mouseDragged = pushParticle;

  p.setup = function() {
    p.pixelDensity(1);
    p.createCanvas(660, 840);
    p.noSmooth();
    particles.push(new Particle(p.width / 2, p.height / 2));
    size = p.width / 50;
    socialDistance += p.width / 10;
  };

  p.draw = function() {
    p.background(0);

    moved = 0;

    particles.forEach(particle => {
      particle.update();
      particle.draw();
    });
    if (moved === 0) {
      // remove off-canvas particles for performance
      particles = particles.filter(
        ({ pos }) =>
          pos.x > -size &&
          pos.x < p.width + size &&
          pos.y > -size &&
          pos.y < p.height + size
      );
    }
  };
};

export default ({ location }) => (
  <SketchLayout
    sketch={sketch}
    path={location.pathname}
    description="Click and drag to maintain social distancing."
  />
);
