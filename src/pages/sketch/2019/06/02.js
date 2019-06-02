import React from "react";
import SketchLayout from "~components/sketch-layout";
import Link from "~components/link";
import polarToCartesian from "~lib/polarToCartesian";

const sketch = function(p) {
  let multiplier = 0.97;
  let particles = [];

  class Particle {
    constructor(x, y, hue) {
      this.x = x;
      this.y = y;

      this.velocity = p.createVector(p.random(-1, 1), p.random(-1, 1));
      this.position = p.createVector(this.x, this.y);
    }

    move() {
      this.prev = { x: this.position.x, y: this.position.y };
      this.velocity.add(
        p.createVector(
          p.map(
            p.noise(
              this.position.x / 300,
              this.position.y / 200,
              p.frameCount / 400
            ),
            0,
            1,
            -0.1,
            0.1
          ),
          p.map(
            p.noise(
              this.position.x / 200,
              this.position.y / 300,
              p.frameCount / 400
            ),
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
      const { x, y } = this.position;
      p.stroke(p.map(p.cos(p.frameCount / 500), -1, 1, 0, 255));
      p.strokeWeight(
        p.map(
          p.dist(x, y, p.width / 2, p.height / 2),
          0,
          p.dist(0, 0, p.width / 2, p.height / 2),
          5,
          10
        )
      );
      p.line(this.prev.x, this.prev.y, x, y);
    }
  }

  p.setup = function() {
    p.createCanvas(660, 840);
    for (let a = 0; a < p.TWO_PI; a += p.TWO_PI / 50) {
      particles.push(
        new Particle(
          ...polarToCartesian(p.width / 2, p.height / 2, a, 10, true)
        )
      );
    }
    p.background(0);
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
        Reload page for a different variation.
        <br />
        Inspired by{" "}
        <Link href="https://github.com/wangyasai">Yasai’s work</Link>.
      </>
    }
  />
);
