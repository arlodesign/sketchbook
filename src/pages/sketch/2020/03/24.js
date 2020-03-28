import React from "react";
import SketchLayout from "~components/sketch-layout";
import "p5.createloop";
import { easeOutQuint as ease } from "~lib/easing";
import lerpLine from "~lib/lerpLine";

const sketch = function(p) {
  const RENDER = p.getURLParams().render;
  const DURATION = 60;
  const RATE = 60;
  const G = 100;
  const HUE = p.random(0.2, 0.8);

  let attractors = [];
  let particles = [];
  let alpha = 0;

  class Attractor {
    constructor(dir) {
      this.x = p.randomGaussian(p.width / 2, p.width / 10);
      this.y = p.constrain(
        p.random(p.height / 2, p.height / 3),
        p.height * 0.333,
        p.height * 0.666
      );
      this.dir = dir;
      this.start = p.random(p.TWO_PI);
    }
    get pos() {
      return p.createVector(this.x, this.y);
    }
  }

  class Particle {
    constructor(sat) {
      this.pos = p.createVector(
        p.randomGaussian(p.width / 2, p.width / 3),
        p.randomGaussian(p.height / 2, p.width / 3)
      );
      this.vel = p5.Vector.random2D();
      this.acc = p.createVector();
      this.prev = null;
      this.sat = sat;
    }
    update() {
      this.pos.add(this.vel);
      this.vel.add(this.acc);
    }
    show() {
      if (this.prev) {
        let closestAttractorDist = 1000000;
        let closestAttractor = null;
        attractors.forEach(attractor => {
          const thisDist = p.dist(
            attractor.pos.x,
            attractor.pos.y,
            this.pos.x,
            this.pos.y
          );
          if (thisDist < closestAttractorDist) {
            closestAttractorDist = thisDist;
            closestAttractor = attractor;
          }
        });
        p.stroke(
          HUE + p.animLoop.noise1D(this.sat) * 0.2,
          this.sat,
          p.map(closestAttractorDist, 0, p.width / 2, 1, 0, true),
          alpha
        );
        lerpLine(
          p,
          this.pos.x,
          this.pos.y,
          closestAttractor.pos.x,
          closestAttractor.pos.y,
          (p.animLoop.noise() + 1) / 4,
          false,
          false
        );
        p.line(this.pos.x, this.pos.y, this.prev.x, this.prev.y);
      }
      this.prev = { x: this.pos.x, y: this.pos.y };
    }
    attracted(target) {
      let force = p5.Vector.sub(target.pos, this.pos);
      force.mult(target.dir);
      let dsquared = force.magSq();
      dsquared = p.min(dsquared, G * 20);
      const strength = G / dsquared;
      force.setMag(strength);
      this.acc = force;
    }
  }

  p.setup = function() {
    p.pixelDensity(RENDER ? 1 : 2);
    p.frameRate(RATE);
    p.createCanvas(660, 840);
    p.colorMode(p.HSB, 1);
    p.background(1 - HUE, 0.2, 0.8);
    p.blendMode(p.OVERLAY);
    p.createLoop(DURATION, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.1,
    });
    p.strokeWeight(2);

    attractors = Array(10)
      .fill()
      .map((_, i) => new Attractor(i % 4 ? 1 : -1));
    particles = Array(3)
      .fill()
      .map((_, i) => new Particle((i + 1) / 3));
  };

  p.draw = function() {
    const { progress } = p.animLoop;
    const easedProgress = ease(progress);
    alpha = -4 * easedProgress * easedProgress + 4 * easedProgress;

    particles.forEach(particle => {
      attractors.forEach(attractor => {
        particle.attracted(attractor);
      });
      particle.update();
      particle.show();
    });

    p.frameCount % 100 === 0 && console.info(`${p.floor(progress * 100)}%`);
    if (!RENDER && p.frameCount === DURATION * RATE) {
      console.info("100%");
      p.noLoop();
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
