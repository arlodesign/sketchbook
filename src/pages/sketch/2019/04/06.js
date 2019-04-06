import React from "react";
import SketchLayout from "~components/sketch-layout";

const sketch = function(p) {
  class Particle {
    constructor(x) {
      this.location = [x, 0];
      this.noiseVal = p.random([p.random(0, 20), p.random(80, 100)]);
    }
    update() {
      this.location[1] = p.frameCount % p.height;
      this.location[0] += p.map(
        p.noise(this.noiseVal, this.location[1], p.frameCount),
        0,
        1,
        -1,
        1
      );
    }
    draw() {
      p.noStroke();
      p.fill(this.noiseVal, 75, 90, 10);
      p.rect(...this.location, 0.5, 100);
    }
  }

  let particles = [];

  p.setup = function() {
    p.createCanvas(660, 840);
    p.background(32);
    p.colorMode(p.HSB, 100);
    p.blendMode(p.DIFFERENCE);
    p.rectMode(p.CENTER);
    for (let x = -100; x < p.width + 100; x += 5) {
      particles.push(new Particle(x));
    }
  };

  p.draw = function() {
    particles.forEach(particle => {
      particle.draw();
      particle.update();
    });
    if (p.frameCount > p.height * 3) p.noLoop();
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
