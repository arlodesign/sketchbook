import React from "react";
import SketchLayout from "~components/sketch-layout";

const sketch = function(p) {
  const SIZE = 60;

  p.setup = function() {
    p.createCanvas(660, 840);
    p.noStroke();
  };

  p.draw = function() {
    p.background(255);

    const noiseRate = p.frameCount / 500;

    let prevLine = {
      a: [-SIZE * 10, 0],
      aHandle: [-SIZE * 10, p.height * 0.333],
      bHandle: [-SIZE * 10, p.height * 0.666],
      b: [-SIZE * 10, p.height],
    };

    for (let x = 0; x <= p.ceil((p.width + SIZE * 10) / SIZE); x++) {
      p.fill(x % 2 ? p.color(255, 0) : p.color(0));
      const thisLine = {
        a: [prevLine.a[0] + SIZE, 0],
        aHandle: [
          prevLine.a[0] +
            SIZE +
            p.noise(x * 0.01, x * 0.02, noiseRate) * -p.pow(SIZE, 2),
          p.height * 0.5 * p.noise(x * 0.03, x * 0.04, noiseRate),
        ],
        bHandle: [
          prevLine.b[0] +
            SIZE +
            p.noise(x * 0.05, x * 0.06, noiseRate) * p.pow(SIZE, 2),
          p.height * 0.666 * p.noise(x * 0.07, x * 0.08, noiseRate),
        ],
        b: [prevLine.b[0] + SIZE, p.height],
      };

      p.beginShape();
      p.vertex(...prevLine.a);
      p.bezierVertex(...prevLine.aHandle, ...prevLine.bHandle, ...prevLine.b);
      p.vertex(...thisLine.b);
      p.bezierVertex(...thisLine.bHandle, ...thisLine.aHandle, ...thisLine.a);
      p.endShape(p.CLOSE);

      prevLine = thisLine;
    }

    prevLine = {
      a: [0, -SIZE * 10],
      aHandle: [p.width * 0.333, -SIZE * 10],
      bHandle: [p.width * 0.666, -SIZE * 10],
      b: [p.width, -SIZE * 10],
    };

    for (let x = 0; x <= p.ceil((p.height + SIZE * 10) / SIZE); x++) {
      p.fill(x % 2 ? p.color(255, 0) : p.color(0));
      const thisLine = {
        a: [0, prevLine.a[1] + SIZE],
        aHandle: [
          p.width * 0.5 * p.noise(x * 0.03, x * 0.04, noiseRate),
          prevLine.a[1] +
            SIZE +
            p.noise(x * 0.01, x * 0.02, noiseRate) * -p.pow(SIZE, 2),
        ],
        bHandle: [
          p.width * 0.666 * p.noise(x * 0.07, x * 0.08, noiseRate),
          prevLine.b[1] +
            SIZE +
            p.noise(x * 0.05, x * 0.06, noiseRate) * p.pow(SIZE, 2),
        ],
        b: [p.width, prevLine.b[1] + SIZE],
      };

      p.beginShape();
      p.vertex(...prevLine.a);
      p.bezierVertex(...prevLine.aHandle, ...prevLine.bHandle, ...prevLine.b);
      p.vertex(...thisLine.b);
      p.bezierVertex(...thisLine.bHandle, ...thisLine.aHandle, ...thisLine.a);
      p.endShape(p.CLOSE);

      prevLine = thisLine;
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
