import React from "react";
import SketchLayout from "~components/sketch-layout";

const sketch = function(p) {
  const DIAMETER_Y = 20;
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
    () => 240,
    () => 15,
    () => 128,
  ];
  let rOpt;
  let gOpt;
  let bOpt;
  let a = 0;
  let focus = {};
  let iterations = 1;

  p.setup = function() {
    p.createCanvas(660, 840);
    p.background(32);
    focus = p.createVector(0, -DIAMETER_Y * 2);
    while (Array.from(new Set([rOpt, gOpt, bOpt])).length < 3) {
      rOpt = p.random(colorFunctions);
      gOpt = p.random(colorFunctions);
      bOpt = p.random(colorFunctions);
    }
    p.noStroke();
  };

  p.draw = function() {
    p.fill(rOpt(a), gOpt(a), bOpt(a), 32);
    focus.x = p.map(
      p.noise((focus.y * iterations) / 50, (p.frameCount * iterations) / 5000),
      0,
      1,
      p.width * 0.25,
      p.width * 0.75
    );
    p.ellipse(
      focus.x,
      focus.y,
      p.map(
        p.noise(
          (focus.y * iterations) / 100,
          (p.frameCount * iterations) / 10000
        ),
        0,
        1,
        0,
        p.width
      ),
      DIAMETER_Y
    );
    focus.y += iterations;
    if (focus.y > p.height + DIAMETER_Y) {
      if (iterations > 3) {
        p.noLoop();
      }
      focus.y = -DIAMETER_Y * 2;
      a += p.HALF_PI / 2;
      iterations++;
      p.blendMode(iterations % 2 ? p.SCREEN : p.MULTIPLY);
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
