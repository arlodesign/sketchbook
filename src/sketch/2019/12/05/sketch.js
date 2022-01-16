import p5 from "p5";
import { easeInQuad as ease } from "util/easing";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();
import polarToCartesian from "util/polarToCartesian";

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const GRID = 10;

  p.setup = function () {
    if (RENDER) {
      p.pixelDensity(1);
      p.frameRate(30);
    }
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.createLoop(49, {
      gif: RENDER ? { render: false, open: true } : false,
    });
    p.rectMode(p.CENTER);
    p.noStroke();
    p.colorMode(p.HSB, 2);
  };

  p.draw = function () {
    const { theta, noise2D } = p.animLoop;
    p.blendMode(p.BLEND);
    p.background(0);
    p.blendMode(p.DIFFERENCE);

    for (let x = GRID / 2; x < p.width; x += GRID) {
      for (let y = GRID / 2; y < p.height; y += GRID) {
        p.push();
        p.fill(noise2D(x, y) + 1, 1, 2);
        p.translate(x, y);
        p.square(
          0,
          0,
          GRID *
            1.333 *
            ease(
              p.map(
                p.tan(
                  p.dist(
                    x,
                    y,
                    ...polarToCartesian(
                      p.width / 2,
                      p.height / 2,
                      theta,
                      GRID * 10,
                      true
                    )
                  ) + theta
                ),
                -1,
                1,
                0,
                1,
                true
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
