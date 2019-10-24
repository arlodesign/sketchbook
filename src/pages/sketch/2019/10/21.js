import React from "react";
import SketchLayout from "~components/sketch-layout";

const sketch = function(p) {
  const H = p.random();

  let mx, my, w, h;

  p.setup = function() {
    p.createCanvas(660, 840);
    p.colorMode(p.HSL, 1);
    p.background(H, 0.95, 0.95);
    p.noStroke();

    w = p.floor(p.height / 21);
    h = p.floor(p.height / 51);
    mx = w * 2;
    my = p.floor(mx / h) * h;
  };

  p.draw = function() {
    const clr =
      p.frameCount % 3 ? p.color(H, 0.1, 0.1, 0.9) : p.color(H, 1, 0.5, 0.9);
    const x = p.floor(p.random(mx, p.width - mx) / w) * w;
    const y = p.floor(p.random(my, p.height - my) / h) * h;
    const xDist = p.floor(p.random(x + w, p.width - mx));
    const yDist = p.floor(p.random(y + h, p.height - my));
    const skip = p.random([[true, false], [false, true], [true, true]]);

    for (let xx = x; xx < xDist; xx += skip[0] ? w : w * 2) {
      for (let yy = y; yy < yDist; yy += skip[1] ? h * 2 : h * 3) {
        p.fill(clr);
        p.rect(xx, yy, w, h);
      }
    }

    if (p.frameCount === 10) {
      p.noLoop();
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
