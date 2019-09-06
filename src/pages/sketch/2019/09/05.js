import React from "react";
import { withPrefix } from "gatsby";
import SketchLayout from "~components/sketch-layout";
import "p5.createloop";

const RENDER = process.env.DEV && false;

const sketch = function(p) {
  let img;

  p.preload = function() {
    img = p.loadImage(withPrefix("/assets/susan.png"));
  };

  p.setup = function() {
    RENDER * p.pixelDensity(1);
    p.createCanvas(660, 840);

    p.createLoop(20, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.1,
    });
  };

  p.draw = function() {
    p.background(img);
    const { noise2D, theta } = p.animLoop;

    p.push();
    p.blendMode(p.MULTIPLY);
    for (let y = 0; y < p.height; y += p.height / 10) {
      p.image(
        img,
        0,
        y,
        p.width,
        p.height / 10,
        p.width * p.sin(theta) * noise2D(4, y),
        y,
        p.width,
        p.height / 10
      );
    }
    p.pop();

    for (let y = 0; y < p.height; y++) {
      p.push();
      const clr = p.color(["red", "green", "blue"][y % 3]);
      clr.setAlpha(128);
      p.stroke(clr);
      p.translate(p.width / 2, y);
      p.line(p.width * noise2D(2, y), 0, p.width * noise2D(3, y), 0);
      p.pop();
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
