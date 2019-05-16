import React from "react";
import SketchLayout from "~components/sketch-layout";
import Link from "~components/link";

const sketch = function(p) {
  const SIZE = 2;
  const HUE = p.random(80);

  let multiplier = 0.95;
  let particles = [];

  class Particle {
    constructor(x, hue) {
      this.x = x;
      this.y = p.height * 0.6666;

      this.velocity = p.createVector(p.random(-1, 1), p.random(-1, 1));
      this.position = p.createVector(this.x, this.y);
    }

    move() {
      this.prev = { x: this.position.x, y: this.position.y };
      this.velocity.add(
        p.createVector(
          p.map(
            p.noise(this.position.x / 300, this.position.y / 200),
            0,
            1,
            -0.1,
            0.1
          ),
          p.map(
            p.noise(this.position.x / 200, this.position.y / 300),
            0,
            1,
            -0.1,
            0.1
          )
        )
      );
      this.velocity.mult(multiplier, multiplier);
      this.position.add(this.velocity);
    }

    display() {
      p.stroke(
        p.map(this.position.x, 0, p.width, HUE, HUE + 20),
        100,
        p.map(p.sin(this.position.x / 20), -1, 1, 50, 100)
      );
      p.line(this.prev.x, this.prev.y, this.position.x, this.position.y);
    }
  }
  p.setup = function() {
    p.createCanvas(660, 840);
    for (let x = 0; x < p.width; x += SIZE * 4) {
      particles.push(new Particle(x));
    }
    p.background(0);
    p.colorMode(p.HSB, 100);
    p.strokeWeight(SIZE);
  };

  p.draw = function() {
    particles.forEach(particle => {
      particle.move();
      particle.display();
    });
  };
};

export default ({ location }) => (
  <SketchLayout
    sketch={sketch}
    path={location.pathname}
    description={
      <>
        Reload page for a different variation. Exploring some of{" "}
        <Link href="https://github.com/wangyasai">Yasai’s work</Link>.
      </>
    }
  />
);
