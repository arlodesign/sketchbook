import React from "react";
import SketchLayout from "~components/sketch-layout";
import polarToCartesian from "~lib/polarToCartesian";

const sketch = function(p) {
  const HUE = p.random(80);
  const V_QTY = 10;

  let vertices = [];

  class Vertex {
    constructor() {
      this.angle = p.random(p.TWO_PI);
      this.distance = p.random(p.height * (2 / 3));
      this.speed = p.random([-1, 1]) * p.random(0.0001, 0.001);
    }
    get() {
      return polarToCartesian(
        p.width / 2,
        p.height / 2,
        this.angle,
        this.distance,
        true
      );
    }
    update() {
      this.angle += this.speed;
      if (this.angle < 0) {
        this.angle = p.TWO_PI + this.angle;
      }
      if (this.angle > p.TWO_PI) {
        this.angle = this.angle - p.TWO_PI;
      }
      this.distance = this.distance > 0 ? this.distance - 0.03 : 0;
    }
  }

  p.setup = function() {
    p.createCanvas(660, 840);
    p.noStroke();
    p.colorMode(p.HSL, 100);
    p.background(HUE, 100, 0);

    vertices = Array.from(Array(V_QTY), () => new Vertex());
  };

  p.draw = function() {
    const vs = vertices.filter(({ distance }) => distance > 0);
    const clr = p.color(
      p.map(p.cos(p.frameCount / 1000), -1, 1, HUE, HUE + 20),
      p.map(p.sin(p.frameCount / 50), -1, 1, 80, 100),
      p.map(p.cos(p.frameCount / 500), -1, 1, 0, 100),
      80
    );

    if (vs.length === 1) {
      p.noLoop();
      return;
    }

    if (vs.length === 2) {
      p.noFill();
      p.stroke(clr);
      p.line(...vs[0].get(), ...vs[1].get());
      vs[0].update();
      vs[1].update();
    } else {
      p.noStroke();
      p.fill(clr);
      p.beginShape();
      vs.sort((a, b) => a.angle - b.angle).forEach(v => {
        p.vertex(...v.get());
        v.update();
      });
      p.endShape(p.CLOSE);
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
