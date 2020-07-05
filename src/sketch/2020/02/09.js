import p5 from "p5";
import "p5.createloop";
import polarToCartesian from "util/polarToCartesian";

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const DURATION = 120;
  const RATE = 30;
  const HUE = p.random(0.5, p.TWO_PI - 0.5);
  const POINT_COUNT = 4;

  p.setup = function () {
    p.pixelDensity(RENDER ? 2 : 1);
    p.frameRate(RATE);
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.colorMode(p.HSB, p.TWO_PI);
    p.background(p.TWO_PI - HUE, p.QUARTER_PI, p.QUARTER_PI);
    p.fill(p.TWO_PI - HUE, p.QUARTER_PI, p.HALF_PI);
    p.translate(p.width / 2, p.height / 2);
    p.rectMode(p.CORNERS);
    p.rect(-p.width / 3, -p.width / 3, p.width / 3, p.width / 3);
    p.blendMode(p.OVERLAY);
    p.createLoop(DURATION, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.6,
    });
  };

  const getCoord = (pt) => {
    const { x, y } = polarToCartesian(0, 0, ...pt);

    return [
      p.constrain(x, -p.width / 3, p.width / 3),
      p.constrain(y, -p.width / 3, p.width / 3),
    ];
  };

  p.draw = function () {
    const { progress, theta, noise1D, noise } = p.animLoop;

    p.translate(p.width / 2, p.height / 2);
    p.noStroke();
    p.fill(
      HUE + noise() / 2,
      p.asin(p.sin(theta * 3)) + p.PI / 2,
      p.acos(p.cos(theta * 5)) + p.PI / 2,
      ((-(2 * progress * progress) + 2 * progress) / 2) * p.PI
    );

    let points = Array(POINT_COUNT)
      .fill()
      .map((_, i) => [p.TWO_PI * noise1D(i), (p.height / 2) * noise1D(i + 1)])
      .sort((a, b) => a[0] - b[0]);

    p.beginShape();
    points.forEach((pt) => p.curveVertex(...getCoord(pt)));
    p.curveVertex(...getCoord(points[0]));
    p.curveVertex(...getCoord(points[1]));
    p.curveVertex(...getCoord(points[2]));
    p.endShape();

    p.frameCount % 100 === 0 && console.info(`${p.floor(progress * 100)}%`);
    if (p.frameCount === DURATION * RATE) {
      console.info("100%");
      p.noLoop();
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
