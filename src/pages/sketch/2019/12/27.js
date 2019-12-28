import React from "react";
import SketchLayout from "~components/sketch-layout";
import { withPrefix } from "gatsby";
import "p5.createloop";

const sketch = function(p) {
  const RENDER = p.getURLParams().render;
  const luma = (r, g, b) => r * 0.2126 + g * 0.7152 + b * 0.0722;
  let img;

  p.preload = function() {
    img = p.loadImage(withPrefix("/assets/susan.png"));
  };

  p.setup = function() {
    p.pixelDensity(1);
    p.frameRate(30);
    p.createCanvas(660, 840);
    p.createLoop(20, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 2,
    });
  };

  p.draw = function() {
    p.background(255);

    p.image(img, 0, 0, p.width, p.height);
    p.loadPixels();

    for (let y = 0; y < p.height; y++) {
      let step =
        p.floor(
          p.abs(p.animLoop.noise2D(1, y / 100) * p.sin(p.animLoop.theta)) *
            p.width
        ) + 1;

      for (let start = 0; start < p.width; start += step) {
        let row = [];
        for (let x = start; x < Math.min(start + step, p.width); x++) {
          row.push(p.get(x, y));
        }
        row
          .sort((a, b) => luma(...a) - luma(...b))
          .forEach((c, i) => {
            p.set(i + start, y, p.color(...c));
          });
      }
    }
    p.updatePixels();
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
