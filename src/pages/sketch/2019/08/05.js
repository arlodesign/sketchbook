import React from "react";
import SketchLayout from "~components/sketch-layout";
import "p5.createloop";
import lerpLine from "~lib/lerpLine";

const RENDER = process.env.DEV && false;
const DURATION = 60;

const sketch = function(p) {
  const HUE = p.random(100);

  let margin;
  let color1;
  let color2;

  p.setup = function() {
    p.frameRate(30);

    if (RENDER) {
      p.pixelDensity(1);
    }

    p.createCanvas(660, 840);
    p.colorMode(p.HSL, 100);
    p.background(HUE, 50, 90);
    p.noFill();
    p.strokeWeight(2);

    margin = p.width / 20;
    color1 = p.color(HUE, 100, 20, 80);
    color2 = p.color(100 - HUE, 50, 50, 80);

    p.createLoop(DURATION, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.3,
    });
  };

  p.draw = function() {
    const { noise1D, theta } = p.animLoop;
    p.push();
    p.translate(p.width / 2, p.height / 2);
    p.stroke(p.lerpColor(color1, color2, p.map(p.sin(theta), -1, 1, 0, 1)));
    lerpLine(
      p,
      (-p.width / 2 + margin) * noise1D(-p.width / 2 + margin),
      (-p.height / 2 + margin) * noise1D(-p.height / 2 + margin),
      (p.width / 2 - margin) * noise1D(p.width / 2 - margin),
      (p.height / 2 - margin) * noise1D(p.height / 2 - margin),
      p.map(noise1D(p.cos(theta)), -1, 1, 0.00000000001, 0.1)
    );
    p.pop();

    !RENDER && p.frameCount === DURATION * 30 && p.noLoop();
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
