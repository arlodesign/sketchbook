import React from "react";
import SketchLayout from "~components/sketch-layout";
import polarToCartesian from "~lib/polarToCartesian";
import lerpLine from "~lib/lerpLine";

const sketch = function(p) {
  const HUE = p.random(0, 1 / 3);
  const ITERATIONS = 100;

  let a = 0;
  let i = 1;

  p.setup = function() {
    p.createCanvas(660, 840);
    p.colorMode(p.HSB, 1);
    p.background(HUE, 0.5, 0.9);
    p.noFill();
    p.strokeWeight(2);
    p.blendMode(p.OVERLAY);
    p.ellipseMode(p.CENTER);
  };

  p.draw = function() {
    const NOISE = p.noise(p.frameCount / (ITERATIONS * 100), a);

    let thisHue;

    if (NOISE < 1 / 3) {
      thisHue = HUE;
    } else if (NOISE > 2 / 3) {
      thisHue = HUE + 2 / 3;
    } else {
      thisHue = HUE + 1 / 3;
    }

    p.push();
    p.stroke(thisHue, i / ITERATIONS, 0.9, 0.2);
    p.translate(
      ...polarToCartesian(
        p.width / 2,
        p.height / 2,
        a,
        (p.width / 3) * (1 - NOISE),
        true
      )
    );
    p.rotate(a);
    p.bezier(
      0,
      0,
      (p.width * NOISE) / 2,
      -p.width / 10,
      (p.width * NOISE) / 2,
      p.width / 10,
      (p.width / 2) * NOISE,
      0
    );
    p.pop();

    console.log(i);

    a += p.TWO_PI / ITERATIONS + p.TWO_PI / ITERATIONS / ITERATIONS;
    if (a > p.TWO_PI * i) {
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
