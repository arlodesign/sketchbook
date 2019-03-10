import React from "react";
import SketchLayout from "~components/sketch-layout";

const sketch = function(p) {
  let dark;
  let scalar;
  let x;
  let y;
  let x2;
  let y2;
  let rOpt;
  let gOpt;
  let bOpt;
  let aOpt;
  const colorFunctions = [
    angle => p.abs(p.sin(angle)) * 240,
    angle => p.abs(p.cos(angle)) * 240,
    angle => p.abs(p.tan(angle)) * 240,
    angle => p.abs(p.sin(angle + p.PI)) * 240,
    angle => p.abs(p.cos(angle + p.PI)) * 240,
    angle => p.abs(p.tan(angle + p.PI)) * 240,
    angle => p.abs(p.sin(-angle)) * 240,
    angle => p.abs(p.cos(-angle)) * 240,
    angle => p.abs(p.tan(-angle)) * 240,
    angle => p.abs(p.sin(-angle + p.PI)) * 240,
    angle => p.abs(p.cos(-angle + p.PI)) * 240,
    angle => p.abs(p.tan(-angle + p.PI)) * 240,
  ];

  function setStroke(a) {
    p.stroke(rOpt(a), gOpt(a), bOpt(a), aOpt(a * scalar));
  }

  p.setup = function() {
    p.createCanvas(660, 840);
    dark = p.random([0, 1]);
    p.background(dark ? 0 : 255);
    p.noFill();
    p.stroke(0);
    scalar = p.random([3, 5, 7, 9]);
    x = x2 = scalar;
    y = y2 = scalar;
    while (Array.from(new Set([rOpt, gOpt, bOpt, aOpt])).length < 4) {
      rOpt = p.random(colorFunctions);
      gOpt = p.random(colorFunctions);
      bOpt = p.random(colorFunctions);
      aOpt = p.random(colorFunctions);
    }
    p.blendMode(dark ? p.LIGHTEST : p.DARKEST);
  };

  p.draw = function() {
    p.translate(p.width / 2, p.height / 2);
    const moveX = p.random([-10, 10]);
    const moveY = p.random([-10, 10]);
    x = x2 + moveX;
    y = y2 + moveY;
    p.strokeWeight(7 * p.noise(moveX, moveY));
    setStroke(p.frameCount / 200);
    if (
      x > -p.width / 2 &&
      y > -p.height / 2 &&
      x < p.width / 2 &&
      y < p.height / 2
    ) {
      for (let i = 0; i < scalar; i++) {
        p.push();
        p.rotate((p.TWO_PI / scalar) * i);
        p.triangle(x, y, p.lerp(x, y2, 0.5), p.lerp(y, x2, 0.5), x2, y2);
        p.endShape();
        p.pop();
      }
    } else {
      p.noLoop();
    }
    x2 = x;
    y2 = y;
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="Reload page for a different variation." />
);
