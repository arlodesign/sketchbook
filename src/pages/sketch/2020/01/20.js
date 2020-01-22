import React from "react";
import SketchLayout from "~components/sketch-layout";
import "p5.createloop";
import polarToCartesian from "~lib/polarToCartesian";
import lineIntersection from "~lib/lineIntersection";
import { easeInOutQuad } from "~lib/easing";

const sketch = function(p) {
  const DURATION = 360;
  const RATE = 60;
  const M = p.shuffle([1, 2, 3, 5, 7, 9, 11, 13, 17]);
  const OFFSET = p.shuffle([p.QUARTER_PI, p.HALF_PI, p.PI]);
  const HUE = p.random(p.TWO_PI);
  const SIDE_COUNT = p.random([4, 5, 6, 7, 8]);

  let sides = [];
  let r;
  let complete = 0;

  p.setup = function() {
    p.frameRate(RATE);
    p.createCanvas(660, 840);
    p.colorMode(p.HSB, p.TWO_PI);
    p.background(p.TWO_PI - HUE, p.QUARTER_PI, p.PI);
    p.createLoop(DURATION, {
      noiseRadius: 2,
    });
    p.blendMode(p.OVERLAY);

    r = p.width / 2 - p.width / 20;

    sides = Array(SIDE_COUNT)
      .fill()
      .map((_, i) => [
        polarToCartesian(
          p.width / 2,
          p.height / 2,
          (p.TWO_PI / SIDE_COUNT) * i,
          r,
          true
        ),
        polarToCartesian(
          p.width / 2,
          p.height / 2,
          (p.TWO_PI / SIDE_COUNT) * (i + 1),
          r,
          true
        ),
      ]);
  };

  p.draw = function() {
    const { theta, noise1D } = p.animLoop;

    const thetaA = theta * M[0];
    const thetaB = theta * M[1] + OFFSET[0];
    const thetaC = theta * M[2] + OFFSET[1];
    const thetaD = theta * M[3] + OFFSET[2];

    let a = { x: null, y: null };
    let b = { x: null, y: null };

    for (let i = 0; i < sides.length; i++) {
      a =
        a.x && a.y
          ? a
          : lineIntersection(
              p.width / 2,
              p.height / 2,
              ...polarToCartesian(
                p.width / 2,
                p.height / 2,
                thetaA,
                p.width / 2,
                true
              ),
              ...sides[i][0],
              ...sides[i][1]
            );

      b =
        b.x && b.y
          ? b
          : lineIntersection(
              p.width / 2,
              p.height / 2,
              ...polarToCartesian(
                p.width / 2,
                p.height / 2,
                thetaB,
                p.width / 2,
                true
              ),
              ...sides[i][0],
              ...sides[i][1]
            );
    }

    p.stroke(
      HUE,
      p.asin(p.sin(theta * M[4])) + p.PI / 2,
      p.acos(p.cos(theta * M[5])) + p.PI / 2,
      p.HALF_PI
    );
    p.noFill();
    p.bezier(
      a.x,
      a.y,
      ...polarToCartesian(
        p.width / 2,
        p.height / 2,
        thetaC,
        r * 0.8 * easeInOutQuad((noise1D(M[6]) + 1) / 2),
        true
      ),
      ...polarToCartesian(
        p.width / 2,
        p.height / 2,
        thetaD,
        r * 0.8 * easeInOutQuad((noise1D(M[7]) + 1) / 2),
        true
      ),
      b.x,
      b.y
    );

    const progress = p.floor((p.frameCount / (DURATION * RATE)) * 100);

    if (progress > complete) {
      complete = progress;
      console.info(`${complete}%`);
    }

    p.frameCount === DURATION * RATE && p.noLoop();
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
