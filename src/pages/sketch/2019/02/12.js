import React from "react";
import SketchLayout from "~components/sketch-layout";

const sketch = function(p) {
  let things;

  class Thing {
    constructor() {
      this.pA = p.createVector(p.random(p.width), p.random(p.height));
      this.vA = p.createVector(p.random(), p.random());
      this.aA = p.createVector(p.random(0.1), p.random(0.1));
      this.pB = p.createVector(p.random(p.width), p.random(p.height));
      this.vB = p.createVector(p.random(), p.random());
      this.aB = p.createVector(p.random(0.1), p.random(0.1));
    }
    draw() {
      p.beginShape();
      p.vertex(this.pA.x, this.pA.y);
      p.quadraticVertex(0, p.height, this.pB.x, this.pB.y);
      p.endShape();

      this.vA.add(this.aA);
      this.vB.add(this.aB);

      this.pA.add(this.vA);
      this.pB.add(this.vB);

      if (this.pA.x < 0) {
        this.pA.x = 0;
        this.vA.x *= -1;
      }
      if (this.pA.x > p.width) {
        this.pA.x = p.width;
        this.vA.x *= -1;
      }
      if (this.pA.y < 0) {
        this.pA.y = 0;
        this.vA.y *= -1;
      }
      if (this.pA.y > p.height) {
        this.pA.y = p.height;
        this.vA.y *= -1;
      }
      if (this.pB.x < 0) {
        this.pB.x = 0;
        this.vB.x *= -1;
      }
      if (this.pB.x > p.width) {
        this.pB.x = p.width;
        this.vB.x *= -1;
      }
      if (this.pB.y < 0) {
        this.pB.y = 0;
        this.vB.y *= -1;
      }
      if (this.pB.y > p.height) {
        this.pB.y = p.height;
        this.vB.y *= -1;
      }
    }
  }

  p.setup = function() {
    p.createCanvas(660, 840);
    things = new Array(5).fill().map(_ => new Thing());
    p.background(0);
    p.noFill();
    p.stroke(255, 20);
    p.strokeWeight(0.25);
    setTimeout(() => {
      p.noLoop();
    }, 15000);
  };

  p.draw = function() {
    things.forEach(t => t.draw());
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} />
);
