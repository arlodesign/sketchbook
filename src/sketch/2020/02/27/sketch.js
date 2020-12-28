import p5 from "p5";
import "p5.createloop";
import polarToCartesian from "util/polarToCartesian";

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const DURATION = 40;
  const RATE = 30;
  const COUNT = 1000;
  const COLORS = ["red", "green", "blue"];
  const NOISE_SCALE = 500;
  const SIDES = 6;

  let ellipses = [];

  class Ellipse {
    constructor(angle, distance) {
      this.angle = angle;
      this.distance = distance;
    }

    draw() {
      const { theta, noise2D } = p.animLoop;
      const { x, y } = polarToCartesian(
        p.width / 2,
        p.height / 2,
        this.angle + theta,
        this.distance *
          p.map(
            noise2D(this.distance / NOISE_SCALE, p.sin(this.angle)),
            -1,
            1,
            0.25,
            1
          )
      );
      p.circle(
        x,
        y,
        p.width * 0.75 * noise2D(x / NOISE_SCALE, y / NOISE_SCALE)
      );
    }
  }

  p.setup = function () {
    p.pixelDensity(1);
    p.frameRate(RATE);
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.createLoop(DURATION, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 2,
    });
    p.noFill();
    p.noSmooth();

    ellipses = Array(COLORS.length)
      .fill()
      .map((_, i) =>
        Array(COUNT)
          .fill()
          .map((_, j) => {
            return new Ellipse(
              (p.TWO_PI / COUNT) * j,
              p.map(
                p.noise(p.sin((p.TWO_PI / COUNT) * (j + 1) * (i + 1))),
                0,
                1,
                p.width / 4,
                p.width / 2
              )
            );
          })
      );
  };

  p.draw = function () {
    p.background(0);

    p.push();
    p.blendMode(p.SCREEN);
    ellipses.forEach((set, i) => {
      p.stroke(COLORS[i]);
      set.forEach((e) => e.draw());
    });
    p.pop();
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
