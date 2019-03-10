import React from "react";
import SketchLayout from "~components/sketch-layout";

const sketch = function(p) {
  let shapes = [];

  class Shape {
    constructor() {
      const colorFunctions = [
        angle => p.max(15, p.abs(p.sin(angle)) * 240),
        angle => p.max(15, p.abs(p.sin(angle + p.PI)) * 240),
        angle => p.max(15, p.abs(p.cos(-angle)) * 240),
        angle => p.max(15, p.abs(p.cos(-angle + p.PI)) * 240),
      ];
      this._cf = [
        p.random(colorFunctions),
        p.random(colorFunctions),
        p.random(colorFunctions),
      ];
      this.points = new Array(10).fill().map(_ => new Point());
    }
    clr() {
      return p.color(
        this._cf[0](p.frameCount / 1000),
        this._cf[1](p.frameCount / 1000),
        this._cf[2](p.frameCount / 1000),
        128
      );
    }
    draw() {
      p.beginShape();
      this.points.forEach(({ location }, i) => {
        p.vertex(location.x, location.y);
        this.points[i].move();
      });
      p.endShape(p.CLOSE);
    }
  }

  class Point {
    constructor() {
      this.location = p.createVector(p.random(p.width), p.random(p.height));
      this._velocity = p.createVector(p.random(-1, 1), p.random(-1, 1));
    }

    move() {
      this.location.add(this._velocity);

      if (this.location.x > p.width || this.location.x < 0) {
        this._velocity.x = this._velocity.x * -1;
      }
      if (this.location.y > p.height || this.location.y < 0) {
        this._velocity.y = this._velocity.y * -1;
      }
    }
  }

  p.setup = function() {
    p.createCanvas(660, 840);
    shapes = new Array(3).fill().map(_ => new Shape());
  };

  p.draw = function() {
    p.background(0);
    shapes.forEach((shape, i) => {
      if (i !== 1) {
        p.noStroke();
        p.fill(shape.clr());
      } else {
        p.noFill();
        p.strokeWeight(4);
        p.stroke(shape.clr());
      }
      shape.draw();
    });
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="Reload page for a different variation." />
);
