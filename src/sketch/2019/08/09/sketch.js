import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();
import polarToCartesian from "util/polarToCartesian";

const RENDER = process.env.DEV && true;
const DURATION = 60;
const SHAPE_COUNT = 30;
const COLOR_RANGE = 30;

const sketch = function (p) {
  const HUE = p.random(100 - COLOR_RANGE);
  let shapes = [];

  class Shape {
    constructor(x, y, blur) {
      this.x = x;
      this.y = y;
      this.size = p.random(p.width / 2);
      this.blur = blur;
      this.canvas = p.createGraphics(p.width, p.height);
      this.hue = p.random(HUE, HUE + COLOR_RANGE);
      this.strokeWeight = p.random(3);

      this.canvas.background(128);
    }
    draw() {
      const { x, y, size, blur, canvas, hue, strokeWeight } = this;
      const { noise1D, noise2D, theta } = p.animLoop;

      canvas.push();
      canvas.colorMode(p.HSB, 100);
      canvas.translate(x, y);
      canvas.translate(
        (p.width / 10) * noise1D(p.cos(theta)),
        (p.width / 10) * noise1D(p.cos(theta))
      );
      canvas.stroke(hue, 70, p.map(blur, 0, SHAPE_COUNT / 2, 50, 100), 1);
      canvas.strokeWeight(strokeWeight);

      canvas.line(
        0,
        0,
        ...polarToCartesian(
          0,
          0,
          theta,
          (p.width / 2) * p.map(noise2D(size, p.sin(theta)), -1, 1, 0.5, 1.5),
          true
        )
      );
      canvas.pop();
      p.frameCount === DURATION * 30 && canvas.filter(p.BLUR, blur);
      p.image(canvas, 0, 0);
    }
  }

  p.setup = function () {
    p.frameRate(30);

    if (RENDER) {
      p.pixelDensity(1);
    }

    p.createCanvas(p.windowWidth, p.windowHeight);
    p.colorMode(p.HSB, 100);

    shapes = Array.from(
      { length: SHAPE_COUNT },
      (_, i) =>
        new Shape(
          p.randomGaussian(p.width / 2, p.width / 20),
          p.randomGaussian(p.height / 2, p.height / 20),
          ((i - SHAPE_COUNT) * (i - SHAPE_COUNT)) / (SHAPE_COUNT * 2)
        )
    );

    p.createLoop(DURATION, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 1,
    });
  };

  p.draw = function () {
    p.blendMode(p.BLEND);
    p.background(HUE, 10, 90);
    p.blendMode(p.HARD_LIGHT);

    shapes.forEach((s) => s.draw());

    !RENDER && p.frameCount === DURATION * 30 && p.noLoop();
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
