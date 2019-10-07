import React from "react";
import SketchLayout from "~components/sketch-layout";
import "p5.createloop";
import polarToCartesian from "~lib/polarToCartesian";

const RENDER = process.env.DEV && true;
const DURATION = 180;

const sketch = function(p) {
  let th = 0;
  let phi = 0;
  const HUE = p.random(33);
  const HUES = [HUE, HUE + 33, HUE + 66];
  const SCALARS = Array(5)
    .fill()
    .map((_, i) => p.floor(p.random(i, i + 3)));

  p.setup = function() {
    p.createCanvas(660, 840);
    p.colorMode(p.HSL, 100);
    p.background(p.random(HUES), 100, 10);
    p.createLoop(DURATION, {
      noiseRadius: 0.5,
    });
  };

  p.draw = function() {
    const { theta, noise1D } = p.animLoop;
    const pointA = polarToCartesian(0, 0, theta * 2, p.height / 3, true);
    const pointB = polarToCartesian(
      0,
      0,
      -theta * SCALARS[0],
      (p.width / 2) * noise1D(SCALARS[0] / 100),
      true
    );
    const pointC = polarToCartesian(
      0,
      0,
      theta * SCALARS[1],
      (p.width / 2) * noise1D(SCALARS[1] / 100),
      true
    );
    const pointD = polarToCartesian(0, 0, -theta * 2, p.width / 3, true);
    p.translate(p.width / 2, p.height / 2);
    p.rotate(theta);
    p.stroke(
      HUES[p.floor(p.map(p.sin(theta * SCALARS[2]), -1, 1, 0, 3))],
      100,
      p.map(p.sin(theta * SCALARS[3]), -1, 1, 50, 100),
      p.map(p.cos(theta * SCALARS[4]), -1, 1, 10, 0)
    );
    p.noFill();
    p.beginShape();
    p.curveVertex(...pointA);
    p.curveVertex(...pointB);
    p.curveVertex(...pointC);
    p.curveVertex(...pointD);
    p.curveVertex(...pointA);
    p.curveVertex(...pointB);
    p.curveVertex(...pointC);
    p.endShape();

    if (p.frameCount === DURATION * 60) {
      p.noLoop();
      RENDER && alert("done");
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
