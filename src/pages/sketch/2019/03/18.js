import React from "react";
import p5 from "p5";
import SketchLayout from "~components/sketch-layout";
import polarToCartesian from "~lib/polarToCartesian";

const sketch = function(p) {
  const SIZE = 100;

  let particles = [];
  let restartedMovers = 0;

  class Particle {
    constructor(i) {
      this.i = i || this.i;
      this.stroke = this.i % 2 ? 255 : 0;
      this.location = p.createVector(
        ...polarToCartesian(
          p.width / 2,
          p.height / 2,
          p.random(p.TWO_PI),
          p.random(p.width / 4),
          true
        )
      );
      this.velocity = p.createVector(p.random(-1, 1), p.random(-1, 1));
      this.acceleration = p5.Vector.random2D();
    }
    draw() {
      this.acceleration = p.createVector(p.random(-1, 1), p.random(-1, 1));
      this.velocity.add(this.acceleration);

      p.strokeWeight(
        p.map(
          p.dist(p.width / 2, p.height / 2, this.location.x, this.location.y),
          0,
          p.dist(p.width / 2, p.height / 2, p.width / 2, 0),
          SIZE,
          SIZE / 10,
          true
        )
      );
      p.stroke(this.stroke);

      p.beginShape();
      p.vertex(this.location.x, this.location.y);
      this.location.add(this.velocity);
      p.vertex(this.location.x, this.location.y);
      p.endShape();
    }
    get onScreen() {
      const { x, y } = this.location;
      return x > 0 && x < p.width && y > 0 && y < p.height;
    }
  }

  p.setup = function() {
    p.createCanvas(660, 840);
    p.background(255);
    particles = Array.from({ length: 1000 }, (_, i) => new Particle(i));
  };

  p.draw = function() {
    particles.forEach(m => m.draw());
    particles
      .filter(m => !m.onScreen)
      .forEach(m => {
        m.constructor();
        restartedMovers++;
      });

    restartedMovers > 10000 && p.noLoop();
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
