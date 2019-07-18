import React from "react";
import SketchLayout from "~components/sketch-layout";

const sketch = function(p) {
  const HUE = p.random(70);
  const ITERATIONS = 30;

  let a = 0;
  let i = 1;
  let y = 0;

  p.setup = function() {
    p.createCanvas(660, 840);
    p.colorMode(p.HSL, 100);
    p.background(HUE, 5, 80);
    p.noFill();
    p.blendMode(p.MULTIPLY);
    p.ellipseMode(p.CENTER);
  };

  p.draw = function() {
    const NOISE = p.noise(p.frameCount / (ITERATIONS * 100), y);

    p.push();
    p.stroke(
      p.map(p.cos(p.frameCount / (ITERATIONS * 10)), -1, 1, HUE, HUE + 30),
      100,
      50,
      10
    );
    p.translate(p.width / 2, y);
    p.rotate(a);
    p.arc(
      p.map(p.sin(p.frameCount / ITERATIONS), -1, 1, -p.width / 2, p.width / 2),
      0,
      p.width * NOISE,
      50,
      p.frameCount / ITERATIONS,
      p.frameCount / ITERATIONS + p.HALF_PI
    );
    p.pop();
    y++;

    console.log(i);

    a -= p.TWO_PI / (p.height * ITERATIONS);
    if (y > p.height) {
      y = 0;
      i++;
      if (i > ITERATIONS) {
        p.noLoop();
        console.log("done");
      }
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
