import React from "react";
import SketchLayout from "~components/sketch-layout";

const sketch = function(p) {
  let circleSize;
  let circles = [];
  let gridGap;
  let focusX;
  let focusY;
  let distance = 0;
  let direction = 1;
  let userControl = false;

  class Circle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
    draw() {
      p.noFill();
      for (let i = 0; i < gridGap; i++) {
        p.stroke(`rgba(0, 0, 0, ${i / gridGap})`);
        p.ellipse(
          p.lerp(this.x, focusX, i / gridGap / 2),
          p.lerp(this.y, focusY, i / gridGap / 2),
          circleSize -
            i * gridGap +
            p.map(
              p.dist(this.x, this.y, focusX, focusY),
              0,
              p.dist(0, 0, p.width, p.height),
              circleSize * 2,
              -circleSize,
              true
            )
        );
      }
    }
  }

  p.setup = function() {
    p.createCanvas(660, 840);
    circleSize = p.random(100, 250);
    gridGap = circleSize / 10;
    focusX = p.width / 2;
    focusY = p.height / 2;
    const CIRCLES_X = p.floor((p.width - gridGap) / (circleSize + gridGap));
    const CIRCLES_Y = p.floor((p.height - gridGap) / (circleSize + gridGap));
    const GRIDGAP_X = (p.width - CIRCLES_X * circleSize) / (CIRCLES_X + 1);
    const GRIDGAP_Y = (p.height - CIRCLES_Y * circleSize) / (CIRCLES_Y + 1);
    for (
      let x = -GRIDGAP_X - circleSize / 2;
      x <= p.width + circleSize;
      x += circleSize + GRIDGAP_X
    ) {
      for (
        let y = -GRIDGAP_Y - circleSize / 2;
        y <= p.height + circleSize;
        y += circleSize + GRIDGAP_Y
      ) {
        circles.push(new Circle(x, y));
      }
    }
  };

  p.draw = function() {
    p.background(255);
    focusX = userControl
      ? p.mouseX
      : p.width / 2 + p.cos(p.frameCount / (gridGap * 2)) * distance;
    focusY = userControl
      ? p.mouseY
      : p.height / 2 + p.sin(p.frameCount / (gridGap * 2)) * distance;
    circles.forEach(circle => circle.draw());
    distance += direction;
    if (distance === p.width / 2) direction = -1;
    if (distance < circleSize) direction = 1;
  };

  p.mouseClicked = function() {
    userControl = !userControl;
  };

  p.touchMoved = function() {
    if (
      p.mouseX >= 0 &&
      p.mouseY >= 0 &&
      p.mouseX <= p.width &&
      p.mouseY <= p.height
    ) {
      return false;
    }
  };
};

export default ({ location }) => (
  <SketchLayout
    sketch={sketch}
    path={location.pathname}
    description="
      Click or tap to toggle user control of the sketch. Reload page for a
      different variation.
    "
  />
);
