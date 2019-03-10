import React from "react";
import SketchLayout from "~components/sketch-layout";
import polarToCartesian from "~lib/polarToCartesian";

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
      this.points = new Array(7).fill().map(_ => new Point());
    }
    _clr() {
      return p.color(
        this._cf[0](p.frameCount / 1000),
        this._cf[1](p.frameCount / 1000),
        this._cf[2](p.frameCount / 1000)
      );
    }
    draw() {
      p.fill(this._clr());
      p.beginShape();
      p.vertex(this.points[0].location.x, this.points[0].location.y);
      this.points.forEach(({ location }, i) => {
        if (i === 0) return;
        p.quadraticVertex(p.width / 2, p.height / 2, location.x, location.y);
        this.points[i].move();
      });
      p.quadraticVertex(
        p.width / 2,
        p.height / 2,
        this.points[0].location.x,
        this.points[0].location.y
      );
      p.endShape(p.CLOSE);
    }
  }

  class Point {
    constructor() {
      this._angle = p.random(p.TWO_PI);
      this._dist = p.random(p.height / 3, p.height / 2);
      this._speed = p.random(-0.01, 0.01);
      this.location = this._getLocation();
    }

    _getLocation() {
      return polarToCartesian(
        p.width / 2,
        p.height / 2,
        this._angle,
        this._dist
      );
    }

    move() {
      this._angle += this._speed;
      this.location = this._getLocation();
    }
  }

  p.setup = function() {
    p.createCanvas(660, 840);
    shapes = new Array(5).fill().map(_ => new Shape());
    p.noStroke();
    p.blendMode(p.HARD_LIGHT);
  };

  p.draw = function() {
    p.background(0);
    shapes.forEach((shape, i) => shape.draw());
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="Reload page for a different variation." />
);
