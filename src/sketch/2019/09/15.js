import p5 from "p5";
import { easeInOutQuint as ease } from "util/easing";
import "p5.createloop";

const RENDER = process.env.DEV && false;
const LINES = 20;
const POINTS = 50;

const sketch = function (p) {
  const HUE = p.random(LINES);
  let innerMarginX;

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);

    p.createLoop(10, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 1,
    });
    p.colorMode(p.HSB, LINES);
    p.curveTightness(0.3);

    innerMarginX = p.width / POINTS;
  };

  p.draw = function () {
    p.background(HUE, 0, LINES);

    const { noise2D, theta } = p.animLoop;

    for (let i = 0; i < LINES; i++) {
      [
        p.color(HUE, LINES, LINES / 30, LINES / 30),
        p.color(HUE, LINES, LINES / 30, LINES / 20),
        p.color(HUE, LINES, LINES / 20, LINES / 20),
        p.color(HUE, LINES, LINES / 10, LINES / 20),
        p.color(HUE, i % 2 ? LINES : i, LINES),
      ].forEach((c, ci) => {
        p.fill(c);
        if (ci === 4) {
          p.stroke(HUE, LINES / 2, LINES);
          p.blendMode(p.BLEND);
        } else {
          p.noStroke();
          p.blendMode(p.MULTIPLY);
        }

        const y = p.height * (i / LINES) - (4 - ci);
        p.beginShape();
        p.curveVertex(-1, y);
        p.curveVertex(-1, y);

        for (let j = 0; j <= POINTS; j++) {
          const x = innerMarginX + ((p.width - innerMarginX * 2) / POINTS) * j;
          const waveHeight =
            ease(
              p.map(noise2D(x / 50, (p.height * (i / LINES)) / 50), -1, 1, 0, 1)
            ) *
            p.map(
              p.abs(p.width / 2 - x),
              0,
              p.width / 2,
              (p.height / LINES) * 1.5,
              0
            );
          p.curveVertex(x, y - waveHeight);
        }

        p.curveVertex(p.width + 1, y);
        p.curveVertex(p.width + 1, y);

        p.vertex(p.width + 1, p.height + 1);
        p.vertex(-1, p.height + 1);
        p.endShape(p.CLOSE);
      });
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
