import React from "react";
import SketchLayout from "~components/sketch-layout";
import "p5.createloop";
import polarToCartesian from "~lib/polarToCartesian";

const sketch = function(p) {
  const RENDER = p.getURLParams().render;
  const H = p.random(0.5);

  let flames = [];
  let h1;
  let h2;

  function flamePoint(a) {
    const { x, y } = polarToCartesian(
      p.width / 2,
      p.height * (2 / 3),
      a,
      p.width / 5
    );
    return {
      x: p.floor(x),
      y: p.floor(y),
    };
  }

  class Flame {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }

    draw() {
      const { noise1D, noise2D } = p.animLoop;
      const { x, y } = this;
      const d =
        p.map(noise2D(x, y), -1, 1, p.height / 10, p.height / 3) +
        (y - p.height * (2 / 3));
      const r = p.map(noise1D(x), -1, 1, 0.001, 1);

      for (let l = 0; l < 1; l += r) {
        const y1 = y - d * l;
        p.fill(p.lerpColor(h1, h2, l));
        p.noStroke();
        p.rect(x, y1, 1, -d * r);
      }

      p.stroke(255);
      p.point(x, y - d * (r + 1) + d * (noise1D(-y) / 3));
    }
  }

  p.setup = function() {
    p.createCanvas(660, 840);
    p.colorMode(p.HSL, 1);

    h1 = p.color(H, 1, 0.5, 1);
    h2 = p.color(H, 0, 1, 0);

    for (let a = 0; a < p.PI; a += 0.001) {
      const { x, y } = flamePoint(a);
      if (!flames.find(f => f.x === x)) {
        flames.push(new Flame(x, y));
      }
    }

    p.createLoop(20, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.5,
    });
  };

  p.draw = function() {
    p.background(H, 1, 0.1);

    flames.forEach(f => f.draw());

    p.noFill();
    p.stroke(h1);
    p.strokeWeight(2);
    p.arc(
      p.width / 2,
      p.height * (2 / 3),
      (p.width / 5) * 2 - 1,
      (p.width / 5) * 2 - 1,
      0,
      p.PI
    );
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
