import React from "react";
import SketchLayout from "~components/sketch-layout";
import "p5.createloop";
import { Coordinate } from "coordinate-systems";
import lerpLine from "~lib/lerpLine";

const { spherical } = Coordinate;

const sketch = function(p) {
  const DURATION = 240;
  const UPPER = 20;
  const LOWER = 40;

  const A = p.floor(p.random(UPPER, LOWER));

  let B = p.floor(p.random(UPPER / 2, LOWER / 2));
  while (B === A) {
    B = p.floor(p.random(UPPER, LOWER));
  }

  let C = p.floor(p.random(UPPER / 2, LOWER / 2));
  while (C === A || C === B) {
    C = p.floor(p.random(UPPER, LOWER));
  }

  p.setup = function() {
    p.frameRate(60);
    p.createCanvas(660, 840);
    p.createLoop(DURATION, { noiseRadius: 0.3 });
    p.background(255);
    p.blendMode(p.MULTIPLY);
  };

  p.draw = function() {
    const { theta, noise } = p.animLoop;

    p.translate(p.width / 2, p.height / 2);

    const p1 = spherical([
      p.width / 2 - p.width / 10,
      theta * A,
      p.asin(noise()) * B,
    ]).cartesian();
    const p2 = spherical([
      p.width / 2 - p.width / 10,
      theta * A + p.QUARTER_PI,
      p.asin(noise()) * B - p.QUARTER_PI / 4,
    ]).cartesian();

    const COLOR = p.color(["cyan", "magenta", "yellow"][p.frameCount % 3]);
    COLOR.setAlpha(p.map(p.sin(p1[2]), -1, 1, 32, 128));
    p.stroke(COLOR);
    lerpLine(
      p,
      p1[0],
      p1[1],
      p2[0],
      p2[1],
      p.map(p.cos(theta * C), -1, 1, 0.001, 0.01)
    );

    if (p.frameCount === DURATION * 60) {
      console.log("DONE");
      p.noLoop();
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
