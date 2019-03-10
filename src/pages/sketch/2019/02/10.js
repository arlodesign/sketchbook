import React from "react";
import SketchLayout from "~components/sketch-layout";

const sketch = function(p) {
  let x = 0;
  let y = 0;

  function getColor(angle) {
    return [
      p.max(15, p.abs(p.sin(angle)) * 240),
      p.max(15, p.abs(p.cos(-angle + p.PI)) * 240),
      p.max(15, p.abs(p.tan(angle + p.PI)) * 240),
    ];
  }

  p.setup = function() {
    p.createCanvas(660, 840);
    p.background(127);
    p.noFill();
    p.strokeWeight(2);
  };

  p.draw = function() {
    if (p.random() < 0.2) {
      p.stroke(
        ...getColor(
          p.map(
            p.noise(p.dist(x, y, p.width / 2, p.height / 2)),
            0,
            1,
            0,
            p.TWO_PI
          )
        )
      );
      p.blendMode(p.frameCount % 3 ? p.SOFT_LIGHT : p.HARD_LIGHT);
      p.beginShape();
      p.vertex(x, y);
      p.bezierVertex(
        p.width / 2,
        p.height,
        p.width / 2,
        p.height,
        p.width - x,
        y
      );
      p.bezierVertex(
        0,
        p.height / 2,
        0,
        p.height / 2,
        p.width - x,
        p.height - y
      );
      p.bezierVertex(p.width / 2, 0, p.width / 2, 0, x, p.height - y);
      p.bezierVertex(p.width, p.height / 2, p.width, p.height / 2, x, y);
      p.endShape(p.CLOSE);
    }
    y += 2;
    if (y > p.height / 2) {
      y = 0;
      x += 2;
    }
    if (x > p.width / 2) {
      p.noLoop();
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} />
);
