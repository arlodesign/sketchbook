import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();
import polarToCartesian from "util/polarToCartesian";

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const DURATION = 60;
  const RATE = 30;
  const COUNT = 600;
  const COLORS = ["cyan", "magenta", "yellow"];
  const NOISE_SCALE = 300;
  const SIDES = 3;

  let shapes = [];

  class Shape {
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
            noise2D(this.distance / NOISE_SCALE, p.cos(this.angle)),
            -1,
            1,
            0.5,
            1.5
          )
      );
      p.push();
      p.translate(x, y);
      p.rotate(
        theta + p.QUARTER_PI * noise2D(x / NOISE_SCALE, y / NOISE_SCALE)
      );
      p.beginShape();
      for (
        let a = 0;
        a < p.TWO_PI + p.TWO_PI * (3 / SIDES);
        a += p.TWO_PI / SIDES
      ) {
        const d = p.map(
          noise2D(this.distance / NOISE_SCALE, p.cos(this.angle)),
          -1,
          1,
          p.width / 6,
          p.width / 3
        );

        p.curveVertex(...polarToCartesian(0, 0, a, d, true));
      }
      p.endShape();
      p.pop();
    }
  }

  p.setup = function () {
    p.pixelDensity(1);
    p.frameRate(RATE);
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.createLoop(DURATION, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 3.2,
    });
    p.noFill();
    p.noSmooth();
    p.stroke(0.5);
    p.curveTightness(0.5);

    shapes = Array(COLORS.length)
      .fill()
      .map((_, i) =>
        Array(COUNT)
          .fill()
          .map((_, j) => {
            return new Shape(
              p.random((p.TWO_PI / COUNT) * j, (p.TWO_PI / COUNT) * (j + 1)),
              p.map(
                p.noise(p.sin((p.TWO_PI / COUNT) * (j + 1) * (i + 1))),
                0,
                1,
                p.width / 10,
                p.width / 3
              )
            );
          })
      );
  };

  p.draw = function () {
    p.background(255);

    p.push();
    p.blendMode(p.MULTIPLY);
    shapes.forEach((set, i) => {
      const clr = p.color(COLORS[i]);
      clr.setAlpha(64);
      p.stroke(clr);
      set.forEach((e) => e.draw());
    });
    p.pop();
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
