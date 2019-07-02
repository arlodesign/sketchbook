import React from "react";
import SketchLayout from "~components/sketch-layout";

const sketch = function(p) {
  const HUE = p.random(70);
  const ITERATIONS = 23;

  let a = 0;
  let i = 1;
  let y = 0;

  p.setup = function() {
    p.createCanvas(660, 840);
    p.colorMode(p.HSB, 100);
    p.background(HUE, 80, 5);
    p.noStroke();
    p.blendMode(p.HARD_LIGHT);
    p.rectMode(p.CENTER);
  };

  p.draw = function() {
    const NOISE = p.noise(p.frameCount / (ITERATIONS * 100), y);

    p.push();
    p.fill(
      p.map(p.cos(p.frameCount / (ITERATIONS * 10)), -1, 1, HUE, HUE + 30),
      50,
      100,
      5
    );
    p.translate(p.width / 2, y);
    p.rotate(a);
    p.rect(
      p.map(p.sin(p.frameCount / ITERATIONS), -1, 1, -50, 50),
      0,
      p.width * NOISE,
      1
    );
    p.pop();
    y++;

    a -= p.TWO_PI / (p.height * ITERATIONS);
    if (y > p.height) {
      y = 0;
      i++;
      if (i > ITERATIONS) {
        p.noLoop();
      }
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
