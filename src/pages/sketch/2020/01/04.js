import React from "react";
import SketchLayout from "~components/sketch-layout";
import "p5.createloop";
import { Coordinate } from "coordinate-systems";

const { spherical } = Coordinate;

const sketch = function(p) {
  const RENDER = p.getURLParams().render;
  const DURATION = 60;
  const RATE = 30;
  const BOX_COUNT = 5;
  const MAX_SCALE = 3;
  const GAP = 50;

  let tx;
  let maxDist;

  p.setup = function() {
    p.pixelDensity(1);
    p.frameRate(RATE);
    p.createCanvas(660, 840, p.WEBGL);
    p.noStroke();
    p.createLoop(DURATION, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.1,
    });

    tx = p.createGraphics(
      p.ceil((p.height / 2) * MAX_SCALE),
      p.ceil((p.height / 2) * MAX_SCALE)
    );
    tx.strokeWeight(GAP / 3);
    maxDist = p.dist(0, 0, tx.width, tx.height);
  };

  p.draw = function() {
    const { theta, noise, noise1D, progress } = p.animLoop;

    tx.background(255);
    for (let i = maxDist + progress * GAP * 10; i > 0; i -= GAP) {
      tx.circle(tx.width / 2, tx.height / 2, i);
    }
    p.background(255);
    p.texture(tx);

    p.camera(...spherical([p.width * 2, 0, 0]).cartesian(), 0, 0, 0, 0, 1, 0);

    // p.pointLight(
    //   255,
    //   255,
    //   255,
    //   ...spherical([p.width, theta, -theta * 2]).cartesian()
    // );
    // p.pointLight(
    //   255,
    //   255,
    //   255,
    //   ...spherical([p.width, -theta * 3, theta * 4]).cartesian()
    // );

    p.plane(p.width * 2, p.height * 2);

    for (let i = -p.floor(BOX_COUNT / 2); i < BOX_COUNT / 2; i++) {
      p.push();
      p.translate((p.width / BOX_COUNT) * i, 0, (p.width / BOX_COUNT) * i);
      p.rotateY(theta * (i % 2 ? -1 : 1));
      p.rotateX(p.map(noise1D(-i), -1, 1, 0, p.TWO_PI));
      p.rotateZ(p.map(noise1D(i), -1, 1, 0, p.TWO_PI));
      p.scale(p.map(noise(), -1, 1, MAX_SCALE / 2, MAX_SCALE));
      p.box(p.width / (BOX_COUNT / 2), p.height / 2, p.width / (BOX_COUNT / 2));
      p.pop();
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
