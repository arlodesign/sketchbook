import React from "react";
import SketchLayout from "~components/sketch-layout";
import polarToCartesian from "~lib/polarToCartesian";
import "p5.createloop";

const sketch = function(p) {
  const RENDER = p.getURLParams().render;
  const DURATION = 120;
  const RATE = 60;
  const H = p.random();

  let coord = [];

  p.setup = function() {
    p.frameRate(RATE);
    p.noSmooth();
    p.createCanvas(660, 840);
    p.background(0);
    p.colorMode(p.HSB, 1);
    p.noFill();
    p.createLoop(DURATION, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.1,
    });
  };

  p.draw = function() {
    const { progress, theta, noise1D } = p.animLoop;
    let bezierPoints = [];
    bezierPoints.push([p.width * 0.1, (p.height - p.width) / 2]);
    bezierPoints.push(
      polarToCartesian(
        p.width * 0.1,
        (p.height - p.width) / 2,
        theta * (400 + noise1D(0.05) * 100),
        p.width * noise1D(0.07),
        true
      )
    );
    bezierPoints.push(
      polarToCartesian(
        p.width * 0.9,
        (p.height - p.width) / 2 + p.width,
        -theta * (400 + noise1D(0.06) * 100),
        p.width * -noise1D(0.08),
        true
      )
    );
    bezierPoints.push([p.width * 0.9, (p.height - p.width) / 2 + p.width]);

    coord.push([
      p.bezierPoint(...bezierPoints.map(cp => cp[0]), progress),
      p.bezierPoint(...bezierPoints.map(cp => cp[1]), progress),
    ]);

    p.stroke(H, 1, 1);

    if (coord.length > 3) {
      p.curve(...coord.slice(-4).flat());
    }

    p.frameCount % 100 === 0 && console.info(`${p.floor(progress * 100)}%`);
    if (!RENDER && p.frameCount === DURATION * RATE) {
      console.info("100%");
      p.noLoop();
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
