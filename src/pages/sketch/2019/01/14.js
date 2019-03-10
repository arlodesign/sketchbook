import React from "react";
import SketchLayout from "~components/sketch-layout";

const sketch = function(p) {
  let angle = 0;
  let angleIncrement;
  let distance;
  let variant;
  let fun;

  p.setup = function() {
    p.createCanvas(660, 840);
    variant = p.floor(p.random(2, 10));
    fun = p.floor(p.random(3));
    angleIncrement = 0.03 / p.TWO_PI;
    distance = p.height / 6;
    p.background(255);
    p.stroke(`rgba(0, 0, 0, 0.5)`);
    p.strokeWeight(0.5);
    p.noFill();
  };

  p.draw = function() {
    angle += angleIncrement;
    let xAxis = p.width / 2 + p.cos(angle) * (p.width / 4);
    let yAxis = p.height / 2 + p.cos(angle) * (p.width / 4);
    let x1 = xAxis + p.cos(angle) * distance;
    let y1 = yAxis + p.sin(angle * variant) * distance;
    let x3 = xAxis + p.cos(angle + p.HALF_PI) * distance;
    let y3 = yAxis + p.sin(angle * variant + p.HALF_PI) * distance;
    let x2 = xAxis + p.cos(angle + p.PI) * distance;
    let y2 = yAxis + p.sin(angle * variant + p.PI) * distance;
    switch (fun) {
      case 0:
        p.bezier(x1, y1, x2, y2, x3, y3, x1, y1);
        break;
      case 1:
        p.bezier(x2, y2, x1, y1, x3, y3, x2, y2);
        break;
      default:
        p.bezier(x3, y3, x1, y1, x2, y2, x3, y3);
        break;
    }
    if (angle > p.TWO_PI) {
      p.noLoop();
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="Reload page for a different variation." />
);
