import React from "react";
import SketchLayout from "~components/sketch-layout";
import { withPrefix } from "gatsby";
import polarToCartesian from "~lib/polarToCartesian";

const sketch = function(p) {
  const SHAPES_COUNT = 3;
  const POINTS_PER_SHAPE = 4;
  let img;
  let axis;
  let shapes = [];

  class Shape {
    constructor() {
      const colorFunctions = [
        angle => p.abs(p.sin(angle)) * 240,
        angle => p.abs(p.cos(angle)) * 240,
        angle => p.abs(p.tan(angle)) * 240,
        angle => p.abs(p.sin(angle + p.PI)) * 240,
        angle => p.abs(p.cos(angle + p.PI)) * 240,
        angle => p.abs(p.tan(angle + p.PI)) * 240,
        angle => p.abs(p.sin(-angle)) * 240,
        angle => p.abs(p.cos(-angle)) * 240,
        angle => p.abs(p.tan(-angle)) * 240,
        angle => p.abs(p.sin(-angle + p.PI)) * 240,
        angle => p.abs(p.cos(-angle + p.PI)) * 240,
        angle => p.abs(p.tan(-angle + p.PI)) * 240,
      ];
      this.cf = [];
      while (Array.from(new Set(this._cf)).length < 3) {
        this._cf = [
          p.random(colorFunctions),
          p.random(colorFunctions),
          p.random(colorFunctions),
        ];
      }
      this.points = Array(POINTS_PER_SHAPE)
        .fill()
        .map(_ => new Point());
    }
    _clr() {
      return p.color(
        this._cf[0](p.frameCount),
        this._cf[1](p.frameCount),
        this._cf[2](p.frameCount)
      );
    }
    draw() {
      p.blendMode(p.frameCount % 3 ? p.DIFFERENCE : p.ADD);
      p.noStroke();
      p.fill(this._clr());
      p.beginShape();
      p.vertex(this.points[0].location.x, this.points[0].location.y);
      this.points.forEach(({ location }, i) => {
        if (i === 0) return;
        p.vertex(location.x, location.y);
        this.points[i].move();
      });
      p.vertex(this.points[0].location.x, this.points[0].location.y);
      p.endShape(p.CLOSE);
    }
  }

  class Point {
    constructor() {
      this._angle = p.random(p.TWO_PI);
      this._dist = p.random(200, 350);
      this._speed = p.random([-0.05, 0.05]);
      this.location = this._getLocation();
    }

    _getLocation() {
      return polarToCartesian(axis.x, axis.y, this._angle, this._dist);
    }

    move() {
      this._angle += this._speed;
      this.location = this._getLocation();
    }
  }

  p.preload = function() {
    img = p.loadImage(withPrefix("/assets/susan.png"));
  };

  p.setup = function() {
    p.createCanvas(660, 840);
    p.background(255);
    axis = p.createVector(p.width / 2, 350);
    shapes = [...Array(SHAPES_COUNT).keys()].map(_ => new Shape());
    setTimeout(() => {
      p.noLoop();
    }, 20000);
  };

  p.draw = function() {
    shapes.forEach((shape, i) => shape.draw());
    p.blendMode(p.DARKEST);
    p.image(img, 0, 0, p.width, p.height);
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="Reload page for a different variation." />
);
