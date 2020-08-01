import p5 from "p5";
import "p5.createloop";
import { easeInOutQuart as ease } from "util/easing";

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const DURATION = 20;
  const RATE = 30;

  const ripple = (v) =>
    ease(
      (p.constrain(
        p.sin(v / 0.05) *
          (p.sin(v / 0.2) * 0.5 + -0.8) *
          (p.sin(v / 0.1) * p.random(1.3, 1.7)) *
          p.abs(v),
        -1,
        1
      ) +
        1) /
        2
    );

  /**
   * Like lerpColor(), but for multiple colors
   * @param {Number} amt number between 0 and 1
   * @param {p5.Color} stops colors to use in the gradient
   */
  function lerpGradient(amt, ...stops) {
    const firstStop =
      amt === 1 ? stops.length - 2 : p.floor(amt * (stops.length - 1));

    const lerpColorAmt = p.map(
      amt,
      firstStop / (stops.length - 1),
      (firstStop + 1) / (stops.length - 1),
      0,
      1,
      true
    );

    return p.lerpColor(stops[firstStop], stops[firstStop + 1], lerpColorAmt);
  }

  p.setup = function () {
    p.pixelDensity(1);
    p.frameRate(RATE);
    p.createCanvas(RENDER ? 540 : 100, RENDER ? 540 : 100);
    p.background(255);
    p.noSmooth();
    p.createLoop(DURATION, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.7,
    });
  };

  p.draw = function () {
    const { noise2D } = p.animLoop;

    p.loadPixels();

    for (let x = 0; x < p.width; x++) {
      for (let y = 0; y < p.height; y++) {
        const index = (x + y * p.width) * 4;

        let c = lerpGradient(
          ripple(
            p.abs(noise2D(x / (y % 2 ? 100 : 1000), y / (y % 2 ? 1000 : 100)))
          ),
          p.color(0),
          p.color("red"),
          p.color(0),
          p.color(0),
          p.color("lightblue"),
          p.color(0)
        );

        c = p.lerpColor(
          c,
          p.color(0),
          p.dist(x, y, p.width / 2, p.height / 2) /
            p.dist(0, 0, p.width / 2, p.height / 2)
        );

        p.pixels[index] = p.red(c);
        p.pixels[index + 1] = p.green(c);
        p.pixels[index + 2] = p.blue(c);
        p.pixels[index + 3] = 255;
      }
    }

    p.updatePixels();
  };
};

new p5(sketch, "sketch");
