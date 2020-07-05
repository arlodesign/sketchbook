import p5 from "p5";
import { easeInOutQuad as ease } from "util/easing";
import "p5.createloop";
import polarToCartesian from "util/polarToCartesian";

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const GRID = 15;

  p.setup = function () {
    p.pixelDensity(1);
    p.frameRate(30);

    p.createCanvas(p.windowWidth, p.windowHeight);
    p.createLoop(20, {
      gif: RENDER ? { render: false, open: true } : false,
    });
    p.rectMode(p.CENTER);
    p.noStroke();
    p.fill(255);
  };

  p.draw = function () {
    const { theta } = p.animLoop;
    p.blendMode(p.BLEND);
    p.background(0);
    p.blendMode(p.DIFFERENCE);

    for (let x = GRID / 2; x < p.width; x += GRID) {
      for (let y = GRID / 2; y < p.height; y += GRID) {
        p.push();
        p.translate(x, y);
        p.square(
          0,
          0,
          GRID *
            2 *
            ease(
              p.map(
                p.cos(p.dist(x, y, p.width / 2, p.height / 2) + theta),
                -1,
                1,
                0,
                1
              )
            ),
          GRID / 2
        );
        p.pop();
      }
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
