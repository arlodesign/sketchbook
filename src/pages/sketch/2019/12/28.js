import React from "react";
import SketchLayout from "~components/sketch-layout";
import { withPrefix } from "gatsby";
import "p5.createloop";

const sketch = function(p) {
  const RENDER = p.getURLParams().render;
  const compare = (r, g, b) => p.hue(p.color(r, g, b));
  let img;

  p.preload = function() {
    img = p.loadImage(withPrefix("/assets/leaves.png"));
  };

  p.setup = function() {
    p.pixelDensity(1);
    p.frameRate(30);
    p.createCanvas(660, 840);
    p.createLoop(40, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.1,
    });
  };

  p.draw = function() {
    p.background(255);

    p.image(img, 0, 0, p.width, p.height);
    p.loadPixels();

    for (let y = 0; y < p.height; y++) {
      const step =
        p.floor(p.abs(p.animLoop.noise2D(1, y / 100)) * (p.width / 5)) + 1;

      const offset = p.floor(
        p.animLoop.noise2D(2, y / 200, { noiseRadius: 10 }) * (p.width / 10)
      );

      for (let start = p.width / 2 - offset; start < p.width; start += step) {
        let row = [];
        for (let x = start; x < Math.min(start + step, p.width); x++) {
          row.push(p.get(x, y));
        }
        row
          .sort((a, b) => compare(...a) - compare(...b))
          .forEach((c, i) => {
            p.set(i + start, y, p.color(...c));
          });
      }
      for (let start = p.width / 2 - offset; start > 0; start -= step) {
        let row = [];
        for (let x = start; x > Math.max(start - step, 0); x--) {
          row.push(p.get(x, y));
        }
        row
          .sort((a, b) => compare(...a) - compare(...b))
          .forEach((c, i) => {
            p.set(start - i, y, p.color(...c));
          });
      }
    }
    p.updatePixels();
    p.frameCount < 1200 && console.log(p.frameCount + " / 1200");
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
