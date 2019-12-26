import React from "react";
import SketchLayout from "~components/sketch-layout";
import { withPrefix } from "gatsby";

const sketch = function(p) {
  let img;

  p.preload = function() {
    img = p.loadImage(withPrefix("/assets/santa.png"));
  };

  p.setup = function() {
    p.pixelDensity(1);

    p.createCanvas(660, 840);
    p.background(255);

    p.image(img, 0, 0, p.width, p.height);
  };

  p.draw = function() {
    if (p.frameCount < p.width) {
      let col = [];
      for (let y = 0; y < p.height; y++) {
        col.push(p.get(p.frameCount - 1, y));
      }
      col
        .sort((a, b) => p.hue(p.color(...a)) - p.hue(p.color(...b)))
        .forEach((c, i) => {
          p.set(p.frameCount - 1, i, p.color(...c));
        });
    } else if (p.frameCount >= p.width && p.frameCount < p.height + p.width) {
      let row = [];
      for (let x = 0; x < p.width; x++) {
        row.push(p.get(x, p.frameCount - 1 - p.width));
      }
      row
        .sort(
          (a, b) => p.saturation(p.color(...a)) - p.saturation(p.color(...b))
        )
        .forEach((c, i) => {
          p.set(i, p.frameCount - 1 - p.width, p.color(...c));
        });
    } else {
      p.noLoop();
    }
    p.updatePixels();
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
