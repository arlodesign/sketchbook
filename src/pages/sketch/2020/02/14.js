import React from "react";
import SketchLayout from "~components/sketch-layout";
import polarToCartesian from "~lib/polarToCartesian";
import "p5.createloop";

const sketch = function(p) {
  const RENDER = p.getURLParams().render;
  const RATE = 60;
  const H = p.random();
  const START = p.random(p.TWO_PI);
  const SCALE = 1000;
  const DURATION = SCALE / 2;

  let coord = [];

  p.setup = function() {
    p.frameRate(RATE);
    p.noSmooth();
    p.createCanvas(660, 840);
    p.background(64);
    p.colorMode(p.HSB, 1);
    p.noFill();
    p.createLoop(DURATION, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.5,
    });
  };

  p.draw = function() {
    const { progress, theta, noise1D } = p.animLoop;
    let bezierPoints = [];

    const startPoint = polarToCartesian(
      p.width / 2,
      p.height / 2,
      START + theta,
      p.width / 2 - p.width / 10,
      true
    );
    const endPoint = polarToCartesian(
      p.width / 2,
      p.height / 2,
      START + theta * 4,
      p.width / 2 - p.width / 10,
      true
    );

    bezierPoints.push(startPoint);
    bezierPoints.push(
      polarToCartesian(
        ...startPoint,
        theta * SCALE,
        p.width * noise1D(0.07),
        true
      )
    );
    bezierPoints.push(
      polarToCartesian(
        ...endPoint,
        -theta * SCALE,
        p.width * noise1D(0.08),
        true
      )
    );
    bezierPoints.push(endPoint);

    coord.push([
      p.bezierPoint(...bezierPoints.map(cp => cp[0]), progress),
      p.bezierPoint(...bezierPoints.map(cp => cp[1]), progress),
    ]);

    p.stroke(
      H,
      p.map(p.sin(theta * SCALE), -1, 1, 0, 1),
      p.map(p.cos(theta * SCALE), -1, 1, 1, 0)
    );

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
