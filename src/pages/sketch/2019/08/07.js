import React from "react";
import SketchLayout from "~components/sketch-layout";
import "p5.createloop";
import polarToCartesian from "~lib/polarToCartesian";

const RENDER = process.env.DEV && false;
const DURATION = 60;

const sketch = function(p) {
  const HUE = p.random(70);

  let margin;
  let color1;
  let color2;

  p.setup = function() {
    p.frameRate(30);
    RENDER && p.pixelDensity(1);

    p.colorMode(p.HSL, 100);
    p.createCanvas(660, 840);
    p.background(HUE, 20, 10);

    color1 = p.color(HUE, 50, 50, 10);
    color2 = p.color(HUE + 30, 100, 100, 10);

    p.createLoop(DURATION, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.31,
    });
  };

  p.draw = function() {
    const { noise1D, theta } = p.animLoop;

    p.strokeWeight(2);
    p.colorMode(p.HSB, 100);
    p.push();
    p.translate(p.width / 2, p.height / 2);
    p.noFill();
    p.stroke(p.lerpColor(color1, color2, p.map(p.sin(theta), -1, 1, 0, 1)));
    p.curve(
      ...polarToCartesian(0, 0, theta, p.height, true),
      (-p.width / 2) * noise1D(-p.width),
      (-p.height / 2) * noise1D(-p.height),
      (p.width / 2) * noise1D(p.width),
      (p.height / 2) * noise1D(p.height),
      ...polarToCartesian(0, 0, theta + p.PI, p.height, true)
    );
    p.pop();

    !RENDER && p.frameCount === DURATION * 30 && p.noLoop();
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
