import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();
import polarToCartesian from "util/polarToCartesian";

const sketch = function (p) {
  const RENDER = p.getURLParams().render;

  p.setup = function () {
    if (RENDER) {
      p.pixelDensity(1);
      p.frameRate(30);
    }

    p.createCanvas(p.windowWidth, p.windowHeight);
    p.noStroke();
    p.colorMode(p.HSL, p.TWO_PI);

    p.createLoop(40, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.2,
    });
  };

  p.draw = function () {
    const { theta, noise1D } = p.animLoop;
    p.background(0);
    p.translate(p.width / 2, p.height / 2);

    const points = [
      [p.TWO_PI * noise1D(1 / 5), (p.width / 2) * p.sin(theta)],
      [p.TWO_PI * noise1D(1 / 7), (p.width / 2) * p.cos(theta)],
      [p.TWO_PI * noise1D(1 / 9), (p.width / 2) * p.sin(-theta)],
      [p.TWO_PI * noise1D(1 / 3), (p.width / 2) * p.cos(-theta)],
      [p.TWO_PI * noise1D(1 / 11), (p.width / 2) * p.tan(theta * 2)],
    ];

    for (let a = 0; a < p.TWO_PI; a += p.TWO_PI / 500) {
      p.push();
      p.fill(a, p.PI, p.PI, p.QUARTER_PI / 10);
      p.blendMode(p.SCREEN);
      p.rotate(a);

      p.beginShape();
      points.forEach(([a, d]) =>
        p.curveVertex(...polarToCartesian(0, 0, a, d, true))
      );
      p.curveVertex(
        ...polarToCartesian(0, 0, points[0][0], points[0][1], true)
      );
      p.curveVertex(
        ...polarToCartesian(0, 0, points[1][0], points[1][1], true)
      );
      p.curveVertex(
        ...polarToCartesian(0, 0, points[2][0], points[2][1], true)
      );
      p.endShape();
      p.pop();
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
