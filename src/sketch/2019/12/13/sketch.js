import p5 from "p5";
import polarToCartesian from "util/polarToCartesian";
import "p5.createloop";

const sketch = function (p) {
  const RENDER = p.getURLParams().render;

  let spirals = [];

  class Spiral {
    constructor(color, spin, direction) {
      this.color = p.color(color);
      this.color.setAlpha(216);
      this.noiseA = p.random();
      this.noiseB = p.random();
      this.spin = spin;
      this.direction = direction ? -1 : 1;
      this.func = direction ? Math.sin : Math.cos;
    }
    draw() {
      const { noise1D, theta } = p.animLoop;
      const c = p.map(noise1D(this.noiseA), -1, 1, 10, 35);
      const a = (137.5 / 360) * p.TWO_PI + noise1D(this.noiseB) * 0.01;

      p.fill(this.color);
      p.noStroke();
      p.push();
      p.translate(p.width / 2, p.height / 2);
      p.rotate(theta * this.direction);

      for (let n = 1; n < 3000; n++) {
        const coord = polarToCartesian(0, 0, n * a, c * p.sqrt(n), true);
        p.push();
        p.translate(...coord);
        p.rotate(theta * this.spin * -this.direction);
        p.rectMode(p.CENTER);
        p.square(
          0,
          0,
          p.map(
            p.dist(0, 0, ...coord),
            0,
            p.sqrt(
              (p.width / 2) * (p.width / 2) + (p.height / 2) * (p.height / 2)
            ),
            p.map(this.func(theta), -1, 1, 40, 10),
            p.map(this.func(theta * 2), -1, 1, 10, 40)
          )
        );
        p.pop();
      }
      p.pop();
    }
  }

  p.setup = function () {
    p.pixelDensity(1);
    p.frameRate(30);
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.createLoop(20, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.5,
    });

    const spinRates = p.shuffle(
      Array(9)
        .fill()
        .map((_, i) => i + 3)
    );
    p.shuffle(["cyan", "yellow", "magenta"]).forEach((c, i) => {
      spirals.push(new Spiral(c, spinRates[i], i % 2));
    });

    spirals = [new Spiral("cyan"), new Spiral("yellow"), new Spiral("magenta")];
  };

  p.draw = function () {
    p.blendMode(p.BLEND);
    p.background(255);
    p.blendMode(p.MULTIPLY);
    spirals.forEach((spiral) => spiral.draw());
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
