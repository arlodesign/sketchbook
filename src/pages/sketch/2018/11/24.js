import React from "react";
import SketchLayout from "~components/sketch-layout";

const sketch = function(p) {
  let index = 0;

  p.setup = function() {
    p.createCanvas(660, 840);
    p.background("white");
  };

  p.draw = function() {
    p.rectMode(p.CENTER);
    p.strokeWeight(3);
    for (let index = 0; index < 60; index++) {
      p.translate(index, index / 2);
      p.rotate(p.PI / index);
      p.rect(index + 200, index + 10, p.width / 3, p.height / 3);
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} />
);
