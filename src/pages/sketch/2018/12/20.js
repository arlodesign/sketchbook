import React from "react";
import SketchLayout from "~components/sketch-layout";

const sketch = function(p) {
  const points = 2160;
  let size;
  let xFocus;
  let yFocus;

  p.setup = function() {
    p.createCanvas(660, 840);
    p.background(255);
    p.strokeWeight(0.75);
    size = p.random(250, 350);
    xFocus = p.width / 2;
    yFocus = p.height / 2;
  };

  p.draw = function() {
    let xEnd;
    let yEnd;
    let xHandle;
    let yHandle;
    xEnd =
      xFocus +
      (p.cos((p.frameCount % points) * (p.TWO_PI / points)) * size) / 2;
    yEnd =
      yFocus +
      (p.sin((p.frameCount % points) * (p.TWO_PI / points)) * size) / 2;
    xHandle =
      xFocus + p.cos((p.frameCount % points) * (p.TWO_PI / points)) * size;
    yHandle =
      yFocus + p.sin((p.frameCount % points) * (p.TWO_PI / points)) * size;
    const x = xFocus + p.cos(p.frameCount % points) * (size / 7);
    const y = yFocus + p.sin(p.frameCount % points) * (size / 7);
    const noiseVal = p.noise(p.frameCount) * size;
    const xStart =
      xFocus + p.cos((p.frameCount % points) + size) * (size + noiseVal);
    const yStart =
      yFocus + p.sin((p.frameCount % points) + size) * (size + noiseVal);
    const clr = `rgba(0, 0, 0, ${p.noise(x, y) / 2})`;
    p.stroke(clr);
    p.noFill();
    p.bezier(x, y, xStart, yStart, xHandle, yHandle, xEnd, yEnd);
    p.fill(clr);
    p.ellipse(xStart, yStart, 2);
    if (p.frameCount === points) {
      p.noLoop();
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="Reload page for a different variation." />
);
