import p5 from "p5";
import polarToCartesian from "util/polarToCartesian";
import "p5.createloop";

const RENDER = process.env.DEV && true;

const sketch = function (p) {
  p.setup = function () {
    if (RENDER) {
      p.pixelDensity(1);
      p.frameRate(15);
    }

    p.createCanvas(
      Math.min(p.windowWidth, p.windowHeight),
      Math.min(p.windowWidth, p.windowHeight)
    );
    p.strokeWeight(20);

    p.createLoop(40, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.1,
    });
  };

  p.draw = function () {
    p.blendMode(p.BLEND);
    p.background(255);
    p.blendMode(p.MULTIPLY);

    let prevPoint;

    for (let a = 0; a < p.TWO_PI; a += p.TWO_PI / 1000) {
      p.push();
      p.stroke(
        ["magenta", "yellow", "cyan"][
          p.floor(p.map(p.cos(a), -1, 1, 0, 2.99999999999))
        ]
      );
      p.translate(p.width / 2, p.height / 2);
      p.rotate(a * p.map(p.cos(p.animLoop.theta), -1, 1, 1, 3));
      let newPoint = polarToCartesian(
        0,
        0,
        a,
        p.width * p.cos(p.map(p.sin(p.animLoop.theta), -1, 1, 1, 10) * a),
        true
      );
      if (prevPoint) {
        p.line(...prevPoint, ...newPoint);
      }
      p.pop();
      prevPoint = newPoint;
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(
      Math.min(p.windowWidth, p.windowHeight),
      Math.min(p.windowWidth, p.windowHeight)
    );
  };
};

new p5(sketch, "sketch");
