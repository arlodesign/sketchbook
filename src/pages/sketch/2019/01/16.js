import React from "react";
import SketchLayout from "~components/sketch-layout";

const sketch = function(p) {
  let circleCount;
  let circles = [];
  let viewGuides = false;
  let drawing;
  let speeds = new Array(30).fill().map((_, i) => (i + 1) / 30);
  let speed;

  function guideColor(alpha) {
    return p.color(255, 0, 0, alpha);
  }

  p.setup = function() {
    p.createCanvas(660, 840);
    circleCount = p.ceil(p.random(5)) + 1;
    drawing = p.createImage(p.width, p.height);
    for (let i = 0; i < circleCount; i++) {
      const thisSpeed = p.random(speeds);
      speeds = speeds.filter(s => s !== thisSpeed);
      circles.push({
        r: p.HALF_PI * 3,
        speed: thisSpeed / p.TWO_PI,
        size: (p.width / circleCount) * p.random(0.5, 1),
        direction: p.random([1, -1]),
        lastPoint: null,
      });
    }
  };

  p.draw = function() {
    p.background(255);
    p.frameRate(viewGuides ? 15 : 30);
    p.image(drawing, 0, 0);
    let axis = {
      x: p.width / 2,
      y: p.height / 2,
    };
    circles.forEach((c, i) => {
      const X = axis.x + p.cos(c.r) * (c.size / 2);
      const Y = axis.y + p.sin(c.r) * (c.size / 2);
      if (viewGuides) {
        const ALPHA = p.map(i, 0, circleCount - 1, 255 / 5, 255);
        p.noFill();
        p.stroke(255, 255, 255, ALPHA);
        p.strokeWeight(5);
        p.ellipse(axis.x, axis.y, c.size);
        p.stroke(guideColor(ALPHA));
        p.strokeWeight(1);
        p.ellipse(axis.x, axis.y, c.size);
        p.noStroke();
        p.fill(255, 255, 255, ALPHA);
        p.ellipse(X, Y, i === circleCount - 1 ? 12 : 6);
        p.fill(guideColor(ALPHA));
        p.ellipse(X, Y, i === circleCount - 1 ? 6 : 3);
      }
      if (i === circleCount - 1 && c.lastPoint) {
        if (X >= 0 && X <= p.width && Y >= 0 && Y <= p.height) {
          for (let l = 0; l < 1; l += 0.01) {
            drawing.set(
              p.floor(p.lerp(X, c.lastPoint.x, l)),
              p.floor(p.lerp(Y, c.lastPoint.y, l)),
              p.color(0)
            );
          }
          drawing.updatePixels();
        }
      }
      axis = {
        x: X,
        y: Y,
      };
      circles[i].lastPoint = axis;
      circles[i].r += c.speed * circles[i].direction;
    });
  };

  p.mousePressed = function() {
    viewGuides = !viewGuides;
  };
};

export default ({ location }) => (
  <SketchLayout
    sketch={sketch}
    path={location.pathname}
    description="
      Reload page for a different variation. Click or tap sketch to toggle
      guides.
    "
  />
);
