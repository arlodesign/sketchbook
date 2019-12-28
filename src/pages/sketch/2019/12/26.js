import React from "react";
import SketchLayout from "~components/sketch-layout";
import { withPrefix } from "gatsby";

const sketch = function(p) {
  const luma = (r, g, b) => r * 0.2126 + g * 0.7152 + b * 0.0722;
  const addRGB = (r, g, b) => r + g + b;
  const saturation = (r, g, b) => p.saturation(p.color(r, g, b));
  const brightness = (r, g, b) => p.brightness(p.color(r, g, b));
  const lightness = (r, g, b) => p.lightness(p.color(r, g, b));
  const red = (r, g, b) => r;
  const green = (r, g, b) => g;
  const blue = (r, g, b) => b;

  const comparison = p.random([
    luma,
    addRGB,
    saturation,
    brightness,
    lightness,
    red,
    green,
    blue,
  ]);
  let img;

  p.preload = function() {
    img = p.loadImage(withPrefix("/assets/brimley.png"));
  };

  p.setup = function() {
    p.createCanvas(660, 840);
    p.background(255);
    p.image(img, 0, 0, p.width, p.height);
  };

  p.draw = function() {
    p.loadPixels();

    let step = p.floor(
      p.noise(0.02, ((p.frameCount - 1) % p.width) / 100) * (p.height / 2)
    );

    for (let start = 0; start < p.height; start += step) {
      let col = [];
      for (let y = start; y < Math.min(start + step, p.height); y++) {
        col.push(p.get((p.frameCount - 1) % p.width, y));
      }
      col
        .sort((a, b) => comparison(...a) - comparison(...b))
        .forEach((c, i) => {
          p.set((p.frameCount - 1) % p.width, i + start, p.color(...c));
        });
    }

    p.updatePixels();

    if (p.frameCount > p.height) {
      p.noLoop();
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
