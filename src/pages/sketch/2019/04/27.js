import React from "react";
import { withPrefix } from "gatsby";
import SketchLayout from "~components/sketch-layout";
import shuffle from "~lib/shuffle";

const sketch = function(p) {
  const letter = p.random("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""));
  const colorOffset = p.random(1000000);
  let myFont;
  let points;

  p.preload = function() {
    myFont = p.loadFont(withPrefix("/assets/Cousine-BoldItalic.otf"));
  };

  p.setup = function() {
    p.createCanvas(660, 840);
    p.background(0);
    p.colorMode(p.HSB, 100);
    p.strokeWeight(0.1);
  };

  p.draw = function() {
    p.stroke(
      p.map(p.sin((p.frameCount + colorOffset) / 1000), -1, 1, 0, 100),
      50,
      100
    );
    const sampleFactor = p.map(p.cos(p.frameCount / 100), -1, 1, 0, 0.1);
    points = myFont.textToPoints(
      letter + " " + p.random("!@#$%^&*()-+{}[]".split("")),
      20,
      625,
      900,
      {
        sampleFactor,
      }
    );
    points = points.map(({ x, y }) => ({
      x,
      y,
      corner: p.random([
        {
          x: 0,
          y: 0,
        },
        {
          x: p.width,
          y: 0,
        },
        {
          x: 0,
          y: p.height,
        },
        {
          x: p.width,
          y: p.height,
        },
      ]),
    }));

    points.forEach(({ x, y, corner }, i) => {
      if (points[i + 1]) {
        p.line(x, y, points[i + 1].x, points[i + 1].y);
      }
    });
  };
};

export default ({ location }) => (
  <SketchLayout
    sketch={sketch}
    path={location.pathname}
    description="Reload page for a different letter."
  />
);
