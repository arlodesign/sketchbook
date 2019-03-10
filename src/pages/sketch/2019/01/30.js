import React from "react";
import SketchLayout from "~components/sketch-layout";

const sketch = function(p) {
  const SIZE = 10;

  p.setup = function() {
    p.createCanvas(660, 840);
    p.noStroke();
  };

  p.draw = function() {
    p.background("white");
    let stripes = [];
    for (let y = 0; y <= p.height + 0; y += SIZE) {
      stripes.push({
        y,
        distFromMouse: p.abs(y - p.mouseY),
      });
    }
    const MAX_DIST = p.max(...stripes.map(s => s.distFromMouse));
    stripes.forEach(({ y, distFromMouse }, i) => {
      const MV = p.map(
        distFromMouse,
        0,
        MAX_DIST,
        p.map(p.mouseY, 0, p.height, 7, 2),
        0
      );
      stripes[i].ex = p.pow(MV, MV);
    });
    const EX_TOTAL = stripes.reduce((prev, { ex }) => prev + ex, 0);
    let bezierHandles = [0];
    let bhy = 0;
    stripes.forEach(({ ex }) => {
      const HP = ex / EX_TOTAL;
      bezierHandles.push(bhy + p.height * HP);
      bhy += p.height * HP;
    });
    let totalHeight = 0;
    stripes.forEach(({ y, ex }, i) => {
      const HP = ex / EX_TOTAL;
      const H = p.height * HP;
      const BH_TOP = bezierHandles[i];
      const BH_BOTTOM = bezierHandles[i + 1];
      p.fill(i % 2 ? 255 : 0);
      p.beginShape();
      p.vertex(0, y);
      p.quadraticVertex(p.mouseX, BH_TOP, p.width, y);
      p.vertex(p.width, y + SIZE);
      p.quadraticVertex(p.mouseX, BH_BOTTOM, 0, y + SIZE);
      p.endShape();
    });
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
  <SketchLayout sketch={sketch} path={location.pathname} description="Move pointer or finger over sketch." />
);
