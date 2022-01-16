import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();
import polarToCartesian from "util/polarToCartesian";

const RENDER = process.env.DEV && false;
const DURATION = 120;

const sketch = function (p) {
  p.setup = function () {
    p.frameRate(30);

    if (RENDER) {
      p.pixelDensity(1);
    }

    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(255);
    p.noFill();
    p.blendMode(p.MULTIPLY);

    p.createLoop(DURATION, {
      gif: RENDER ? { render: false, open: true } : false,
    });
  };

  p.draw = function () {
    const { noise1D, noise2D, theta } = p.animLoop;

    ["cyan", "magenta", "yellow"].forEach((c, i) => {
      const clr = p.color(c);
      clr.setAlpha(16);
      p.stroke(clr);

      p.push();
      p.translate(
        ...polarToCartesian(
          p.width / 3,
          p.height / 2,
          theta + i * (p.TWO_PI / 3),
          p.map(
            p.cos(theta + i * (p.TWO_PI / 3)),
            -1,
            1,
            p.height / 2,
            0,
            true
          ),
          true
        )
      );
      p.rotate(
        p.map(noise1D((i + 1) / 100, { radius: 0.1 }), -1, 1, p.TWO_PI, 0)
      );
      const ellipseWidth = p.map(
        noise2D(c.length, i + 1, { radius: 2 }),
        -1,
        1,
        p.width / 2,
        p.width
      );
      const ellipseHeight = p.map(
        noise2D(i + 1, c.length, { radius: 2 }),
        -1,
        1,
        p.height / 4,
        p.height / 8
      );
      p.ellipse(0, 0, ellipseWidth, ellipseHeight);
      p.pop();
    });

    !RENDER && p.frameCount === DURATION * 30 && p.noLoop();
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
