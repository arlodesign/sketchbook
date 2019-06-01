import React from "react";
import SketchLayout from "~components/sketch-layout";
import shuffle from "~lib/shuffle";
import lerpLine from "~lib/lerpLine";

const sketch = function(p) {
  const HUE = p.random(100);
  const FRAME_COUNTDOWN = 10000;

  let divisors = shuffle([2, 3, 5, 8, 13, 21, 34].map(d => d * 25));
  let alpha = 20;
  let bg;
  let margin;

  p.setup = function() {
    p.createCanvas(660, 840);
    p.colorMode(p.HSB, 100);
    bg = p.color(100 - HUE, 10, 15);
    p.background(bg);
    p.noFill();
    margin = p.floor(p.width * 0.15);
  };

  p.draw = function() {
    const marginX = p.map(
      p.sin(p.frameCount / divisors[0]),
      -1,
      1,
      margin,
      margin * 0.05
    );
    const midLerpVal = p.map(
      p.sin(p.frameCount / divisors[1]),
      -1,
      1,
      0.3,
      0.7
    );
    const leftY = p.map(
      p.cos(p.frameCount / divisors[2]),
      -1,
      1,
      p.height - margin,
      margin
    );
    const rightY = p.map(
      p.cos(p.frameCount / divisors[3]),
      -1,
      1,
      margin,
      p.height - margin
    );
    const midX = p.lerp(marginX, p.width - marginX, midLerpVal);
    const midY = p.lerp(leftY, rightY, midLerpVal);
    const leftLerpLineVal =
      p.map(p.cos(p.frameCount / divisors[4]), -1, 1, 1.5, 2) /
      p.dist(midX, midY, marginX, leftY);
    const rightLerpLineVal =
      p.map(p.cos(p.frameCount / divisors[4]), -1, 1, 1.5, 2) /
      p.dist(midX, midY, p.width - marginX, rightY);

    p.stroke(
      HUE,
      p.map(p.cos(p.frameCount / divisors[5]), -1, 1, 40, 80),
      p.map(p.cos(p.frameCount / divisors[6]), -1, 1, 0, 100),
      alpha
    );
    lerpLine(p, midX, midY, marginX, leftY, leftLerpLineVal);
    lerpLine(p, midX, midY, p.width - marginX, rightY, rightLerpLineVal, false);

    p.push();
    p.noStroke();
    p.fill(bg);
    p.rect(0, 0, p.width, margin);
    if (p.frameCount > FRAME_COUNTDOWN) {
      alpha -= 0.01;
      alpha < 0 && p.noLoop();
    } else {
      p.fill(0, 0, 100);
      p.text(FRAME_COUNTDOWN - p.frameCount, 10, 20);
    }
    p.pop();
  };
};

export default ({ location }) => (
  <SketchLayout
    sketch={sketch}
    path={location.pathname}
    description="Reload page for a different variation."
  />
);
