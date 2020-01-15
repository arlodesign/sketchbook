import React from "react";
import SketchLayout from "~components/sketch-layout";
import "p5.createloop";
import { easeInOutQuart } from "~lib/easing";
import polarToCartesian from "~lib/polarToCartesian";

const sketch = function(p) {
  const RENDER = p.getURLParams().render;
  const DURATION = 20;
  const RATE = 30;
  const GRID = 15;

  p.setup = function() {
    p.pixelDensity(RENDER ? 2 : 1);
    p.frameRate(RATE);
    p.createCanvas(660, 840, p.WEBGL);
    p.noStroke();
    p.createLoop(DURATION, {
      gif: RENDER ? { render: false, open: true } : false,
    });
  };

  p.draw = function() {
    const { theta } = p.animLoop;
    p.background(0);
    p.specularMaterial(255);
    p.pointLight(
      255,
      255,
      255,
      ...polarToCartesian(0, 0, theta, p.width / 2, true),
      p.width * 2
    );

    for (let x = -p.width / 2; x <= p.width / 2; x += GRID) {
      for (let y = -p.height / 2; y <= p.height / 2; y += GRID) {
        p.push();
        p.translate(x, y, 0);
        p.rotateX(theta + p.dist(x, y, 0, 0));
        p.scale(
          easeInOutQuart(
            p.abs(p.cos(theta + p.dist(x, y, p.width / 2, p.height / 2)))
          )
        );
        p.box(GRID);
        p.pop();
      }
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
