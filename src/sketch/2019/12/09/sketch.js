import p5 from "p5";
import polarToCartesian from "util/polarToCartesian";
import addNoise from "util/addNoise";
import "p5.createloop";

const sketch = function (p) {
  const ITERATIONS = 3;
  const RATE = 0.5;
  const POINTS = 7;
  const HUE = p.random(POINTS);
  const SIZE = 300;

  let y;
  let i = 0;
  let points = [];

  class Point {
    constructor(aLow, aHigh) {
      this.aLow = aLow;
      this.aHigh = aHigh;
      this.aNoise = p.random();
      this.dNoise = p.random();
    }
    get() {
      const { noise1D } = p.animLoop;
      return polarToCartesian(
        0,
        0,
        p.map(noise1D(this.aNoise), -1, 1, this.aLow, this.aHigh),
        p.map(noise1D(this.dNoise), -1, 1, 0, SIZE)
      );
    }
  }

  p.setup = function () {
    p.frameRate(30);
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.colorMode(p.HSL, POINTS);
    p.background(POINTS - HUE, POINTS / 3, POINTS / 2);
    p.createLoop(((p.height / RATE) * ITERATIONS) / 30, {
      noiseRadius: 0.5,
    });
    p.strokeWeight(2);

    y = p.height + SIZE;
    points = Array(POINTS)
      .fill()
      .map(
        (_, i) =>
          new Point((p.TWO_PI / POINTS) * i, (p.TWO_PI / POINTS) * (i + 1))
      );
  };

  p.draw = function () {
    p.noFill();
    p.blendMode(p.OVERLAY);

    p.translate(p.width / 2 + (p.width / 4) * p.animLoop.noise1D(0.7), y);
    p.rotate(p.animLoop.theta);

    points.forEach((pt, ip) => {
      const a = pt.get();
      const b = points[(ip + 1) % POINTS].get();
      const c = points[(ip + 2) % POINTS].get();
      const d = points[(ip + 3) % POINTS].get();

      for (let j = 0; j < 1; j += 1 / 40) {
        const x = p.curvePoint(a.x, b.x, c.x, d.x, j);
        const y = p.curvePoint(a.y, b.y, c.y, d.y, j);

        p.stroke(
          HUE,
          p.map(p.cos((ip + j) * (p.TWO_PI / POINTS)), -1, 1, POINTS, 0),
          p.map(p.sin((ip + j) * (p.TWO_PI / POINTS)), -1, 1, 0, POINTS),
          POINTS / 3
        );
        p.point(x, y);
      }
    });

    y -= RATE;

    if (y < -SIZE) {
      y = p.height + SIZE;
      i++;
    }

    if (i === ITERATIONS) {
      p.blendMode(p.BLEND);
      addNoise(p, 0.7);
      p.noLoop();
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
