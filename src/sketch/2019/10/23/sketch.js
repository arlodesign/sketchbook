import p5 from "p5";
import polarToCartesian from "util/polarToCartesian";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();

const POINT_COUNT = 3;
const RENDER = process.env.DEV && false;

const sketch = function (p) {
  let points = Array(POINT_COUNT);
  let highlightPoints = Array(POINT_COUNT);
  let stripeCount;

  class Point {
    constructor(i) {
      this._angle = p.random(p.TWO_PI * i, p.TWO_PI * (i + 1));
      this.distance = p.width / 2;
      this.seed = p.random(0.1);
    }

    get angle() {
      return this._angle * p.animLoop.noise1D(this.seed);
    }

    get coord() {
      return polarToCartesian(
        p.width / 2,
        p.height / 2,
        this.angle,
        this.distance,
        true
      );
    }
  }

  p.setup = function () {
    p.pixelDensity(1);
    p.frameRate(30);
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.createLoop(49, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.1,
    });
    p.noStroke();

    stripeCount = () => p.map(p.sin(p.animLoop.theta), -1, 1, 10, 40);

    points = points.fill(null).map((_, i) => new Point(i));
    highlightPoints = highlightPoints.fill(null).map((_, i) => new Point(i));
  };

  p.draw = function () {
    p.background(255);

    const stripes = p.createGraphics(p.width, p.height);
    stripes.fill(0);
    for (let x = 0; x < p.width; x += p.width / stripeCount()) {
      stripes.rect(x, 0, p.width / stripeCount() / 2, p.height);
    }

    const mask = p.createGraphics(p.width, p.height);

    mask.fill(0);
    mask.beginShape();
    points.forEach(({ coord }) => mask.vertex(...coord));
    mask.endShape(mask.CLOSE);

    const stripesImage = stripes.get();
    stripesImage.mask(mask);

    p.image(stripesImage, 0, 0);

    p.blendMode(p.SCREEN);
    p.fill("lightblue");
    p.rect(0, 0, p.width, p.height);
    p.blendMode(p.BLEND);

    for (
      let x =
        (p.width * -p.animLoop.theta) / p.TWO_PI + p.width / stripeCount() / 2;
      x < p.width;
      x += p.width / stripeCount()
    ) {
      p.rect(x, 0, p.width / stripeCount() / 2, p.height);
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
