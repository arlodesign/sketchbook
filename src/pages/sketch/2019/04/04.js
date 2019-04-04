import React from "react";
import SketchLayout from "~components/sketch-layout";

const sketch = function(p) {
  const HUE = p.random(20, 80);

  const SPEED_CENTER = p.random(0.01, 0.03) / p.TWO_PI;
  const SPEED_RIGHT = p.random(0.03, 0.07) / p.TWO_PI;
  const SPEED_LEFT = p.random(0.03, 0.07) / p.TWO_PI;

  let aCenter = 0;
  let aRight = p.PI;
  let aLeft = 0;

  p.setup = function() {
    p.createCanvas(660, 840);
    p.background(64);
    p.noFill();
    p.strokeWeight(10);
    p.colorMode(p.HSB, 100);
    p.blendMode(p.HARD_LIGHT);
  };

  p.draw = function() {
    p.stroke(
      p.map(p.sin(aCenter), -1, 1, HUE - 20, HUE + 20, true),
      p.map(p.cos(aRight), -1, 1, 0, 100, true),
      p.map(p.cos(aLeft), -1, 1, 100, 33, true),
      1
    );

    p.triangle(
      p.width * p.noise(SPEED_RIGHT / 10, SPEED_LEFT / 10, p.frameCount / 1000),
      p.map(p.sin(aCenter), -1, 1, 0, p.height),
      p.width,
      p.map(p.sin(aRight), -1, 1, 0, p.height),
      0,
      p.map(p.sin(aLeft), -1, 1, 0, p.height)
    );
    aCenter += SPEED_CENTER;
    aRight += SPEED_RIGHT;
    aLeft += SPEED_LEFT;

    if (aCenter > p.TWO_PI * 2) p.noLoop();
  };

  // p.touchMoved = function() {
  //  if (
  //    p.mouseX >= 0 &&
  //    p.mouseY >= 0 &&
  //    p.mouseX <= p.width &&
  //    p.mouseY <= p.height
  //  ) {
  //    return false;
  //  }
  // };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
