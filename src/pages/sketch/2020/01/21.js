import React from "react";
import SketchLayout from "~components/sketch-layout";
import "p5.createloop";
import polarToCartesian from "~lib/polarToCartesian";
import lineIntersection from "~lib/lineIntersection";

const sketch = function(p) {
  const DURATION = 60;
  const RATE = 60;
  const M = p.shuffle([1, 2, 3, 5, 7, 9, 11, 13, 17]);
  const OFFSET = p.shuffle([p.QUARTER_PI, p.HALF_PI, p.PI]);
  const HUE = p.random(p.TWO_PI);
  const SIDE_COUNT = 4 * p.floor(p.random(1, 5));

  let sides = [];
  let r;
  let complete = 0;
  let focus;
  let cnvs;

  p.setup = function() {
    p.frameRate(RATE);
    p.createCanvas(660, 840);
    p.colorMode(p.HSB, p.TWO_PI);
    p.createLoop(DURATION, {
      noiseRadius: 2,
    });

    r = p.width / 2 - p.width / 20;

    sides.push([
      polarToCartesian(p.width / 2, p.height / 2, 0, r, true),
      polarToCartesian(
        p.width / 2,
        p.height / 2,
        p.TWO_PI / SIDE_COUNT,
        r,
        true
      ),
    ]);
    sides.push([
      polarToCartesian(
        p.width / 2,
        p.height / 2,
        p.TWO_PI / SIDE_COUNT,
        r,
        true
      ),
      [p.width / 2, p.height / 2],
    ]);
    sides.push([
      polarToCartesian(p.width / 2, p.height / 2, 0, r, true),
      [p.width / 2, p.height / 2],
    ]);

    focus = polarToCartesian(
      p.width / 2,
      p.height / 2,
      p.TWO_PI / SIDE_COUNT / 2,
      r / 2,
      true
    );

    cnvs = p.createGraphics(p.width, p.height);
    cnvs.blendMode(p.OVERLAY);
    cnvs.colorMode(p.HSB, p.TWO_PI);
  };

  p.draw = function() {
    p.background(p.TWO_PI - HUE, p.TWO_PI, p.PI);

    const { theta, noise } = p.animLoop;

    const thetaA = theta * M[0];
    const thetaB = theta * M[1] + OFFSET[0];

    let a = { x: null, y: null };
    let b = { x: null, y: null };

    for (let i = 0; i < sides.length; i++) {
      a =
        a.x && a.y
          ? a
          : lineIntersection(
              ...focus,
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
              ...focus,
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

    cnvs.stroke(
      HUE,
      p.map(p.sin(theta * M[2]), -1, 1, 0, p.TWO_PI),
      p.map(p.cos(theta * M[3]), -1, 1, 0, p.TWO_PI),
      p.HALF_PI
    );
    cnvs.noFill();
    cnvs.bezier(
      a.x,
      a.y,
      ...polarToCartesian(
        ...focus,
        theta * M[4],
        p.map(noise(), -1, 1, 0, r / 4),
        true
      ),
      ...polarToCartesian(
        ...focus,
        theta * M[5],
        p.map(noise(), -1, 1, 0, r / 4),
        true
      ),
      b.x,
      b.y
    );

    p.translate(p.width / 2, p.height / 2);
    for (let i = 0; i < SIDE_COUNT; i++) {
      p.push();
      p.rotate(p.TWO_PI / SIDE_COUNT / 2);
      p.scale(i % 2 ? 1 : -1, 1);
      p.rotate((p.TWO_PI / SIDE_COUNT) * i);
      p.rotate(-(p.TWO_PI / SIDE_COUNT / 2));
      p.image(cnvs, -p.width / 2, -p.height / 2);
      p.pop();
    }

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
