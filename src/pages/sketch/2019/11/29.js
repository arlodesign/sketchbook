import React from "react";
import SketchLayout from "~components/sketch-layout";
import "p5.createloop";
import lerpLine from "~lib/lerpLine";
import Link from "~components/link";
import { withPrefix } from "gatsby";

const sketch = function(p) {
  const RENDER = p.getURLParams().render;
  let size;

  p.setup = function() {
    p.pixelDensity(1);
    p.frameRate(30);

    p.createCanvas(660 / 2, 840 / 2);
    p.createLoop(20, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 1,
    });

    size = (p.width - p.width * 0.15) / 2;
  };

  function drawTheThing(c, n) {
    const { noise2D, theta } = p.animLoop;

    p.stroke(c);
    for (let x = p.width / 2 - size; x < p.width / 2 + size; x++) {
      const startPoint = p.map(
        noise2D(c.length / 100, x / 100),
        -1,
        1,
        p.height / 2 - 5,
        p.height / 2 + 5
      );

      lerpLine(
        p,
        x,
        startPoint,
        x,
        p.height / 2 + size,
        p.map(noise2D(n, (x + p.sin(theta)) / 100), -1, 1, 0.04, 0.06),
        false,
        false
      );
      lerpLine(
        p,
        x,
        startPoint,
        x,
        p.height / 2 - size,
        p.map(noise2D(n, (x + p.sin(theta)) / 100), -1, 1, 0.04, 0.06),
        true,
        false
      );
    }
  }

  p.draw = function() {
    p.blendMode(p.BLEND);
    p.background(255);
    p.blendMode(p.MULTIPLY);

    drawTheThing("cyan", 5);
    drawTheThing("magenta", 10);
    drawTheThing("yellow", 15);
  };
};

export default ({ location }) => (
  <SketchLayout
    sketch={sketch}
    path={location.pathname}
    description={
      <>
        Runs slow in browser, but makes a{" "}
        <Link href={withPrefix("/assets/2019-11-29.gif")}>great GIF!</Link>
      </>
    }
  />
);
