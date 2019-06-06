import React from "react";
import SketchLayout from "~components/sketch-layout";
import Link from "~components/link";
import polarToCartesian from "~lib/polarToCartesian";

const sketch = function(p) {
  const HUE = p.random(20, 80);

  let alpha = 30;
  let multiplier = 0.98;
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
  }

  p.setup = function() {
    p.createCanvas(660, 840);
    for (let a = 0; a < p.TWO_PI; a += p.TWO_PI / 50) {
      particles.push(
        new Particle(
          ...polarToCartesian(p.width, p.height * 0.666, a, 100, true)
        )
      );
    }
    p.colorMode(p.HSB, 100);

    p.background(HUE, 80, 20);
    p.noFill();
    p.blendMode(p.HARD_LIGHT);
  };

  p.draw = function() {
    p.stroke(
      p.map(p.cos(p.frameCount / 50), -1, 1, HUE - 20, HUE + 20),
      80,
      p.map(p.sin(p.frameCount / 200), -1, 1, 20, 100),
      alpha
    );

    p.beginShape();
    particles.forEach(particle => {
      particle.move();
      p.curveVertex(particle.position.x, particle.position.y);
    });
    p.endShape(p.CLOSE);

    alpha -= 0.01;
    console.log(alpha);
    alpha <= 0 && p.noLoop();
  };
};

export default ({ location }) => (
  <SketchLayout
    sketch={sketch}
    path={location.pathname}
    description="Reload page for a different variation."
  />
);
