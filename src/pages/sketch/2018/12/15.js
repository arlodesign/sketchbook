import React from "react";
import SketchLayout from "~components/sketch-layout";
import { withPrefix } from "gatsby";

const sketch = function(p) {
  const scalar = 36;
  let img;

  p.preload = function() {
    img = p.loadImage(withPrefix("/assets/rope.png"));
  };

  p.setup = function() {
    p.createCanvas(660, 840);
  };

  p.draw = function() {
    p.background(img);
    const offset = p.map(p.mouseX, 0, p.width, 0, scalar, true);
    const spin = p.map(p.mouseY, 0, p.height, 0, p.PI / scalar, true);
    p.translate(p.width / 2, p.height / 2);
    p.push();
    p.rotate(spin);
    p.tint(255, 128);
    p.image(
      img,
      -p.width / 2 - offset,
      -p.height / 2 - offset,
      p.width + offset * 2,
      p.height + offset * 2
    );
    p.pop();
    p.push();
    p.rotate(spin * 2);
    p.tint(255, 64);
    p.image(
      img,
      -p.width / 2 - offset * 2,
      -p.height / 2 - offset * 2,
      p.width + offset * 4,
      p.height + offset * 4
    );
    p.pop();
  };

  p.touchMoved = function() {
    if (
      p.mouseX >= 0 &&
      p.mouseY >= 0 &&
      p.mouseX <= p.width &&
      p.mouseY <= p.height
    ) {
      return false;
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="Move pointer or finger over sketch." />
);
