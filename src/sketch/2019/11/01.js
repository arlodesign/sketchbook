import p5 from "p5";
import polarToCartesian, {
  polarToCartesianEllipse,
} from "util/polarToCartesian";
import "p5.createloop";
import lerpLine from "util/lerpLine";

const RENDER = process.env.DEV && false;

const sketch = function (p) {
  const H1 = p.random(120);
  const H2 = p.random(120, 240);
  const H3 = p.random(240, 360);
  let vRadius;
  let hRadius;

  p.setup = function () {
    p.pixelDensity(RENDER ? 1 : 2);
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(255);

    p.createLoop(120, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 1,
    });

    p.blendMode(p.MULTIPLY);
    p.colorMode(p.HSL, 360);

    vRadius = p.height / 2 - p.width * 0.1;
    hRadius = p.width / 2 - p.width * 0.1;
  };

  p.draw = function () {
    const { theta, noise1D, noise2D } = p.animLoop;

    p.translate(
      ...polarToCartesian(p.width / 2, p.height / 2, theta, p.width * 0.1, true)
    );

    [
      p.color(H1, 360, 180, 180),
      p.color(H2, 360, 180, 180),
      p.color(H3, 360, 180, 180),
    ].forEach((c, i) => {
      p.stroke(c);

      p.line(
        ...polarToCartesianEllipse(
          0,
          0,
          theta + (p.TWO_PI / 3) * i,
          p.map(noise1D(i / 1000 + 0.005), -1, 1, 0.1, 1) * hRadius,
          p.map(noise1D(1 / 1000 + 0.004), -1, 1, 0.1, 1) * vRadius,
          true
        ),
        ...polarToCartesian(
          0,
          0,
          theta + (p.TWO_PI / 3) * i,
          p.map(noise1D(1 / 1000 + 0.003), -1, 1, 0.1, 2) * hRadius,
          true
        )
      );

      lerpLine(
        p,
        ...polarToCartesianEllipse(
          0,
          0,
          theta + (p.TWO_PI / 3) * (i + 1.5),
          p.map(noise1D(i / 1000 + 0.005), -1, 1, 0.1, 1) * hRadius,
          p.map(noise1D(1 / 1000 + 0.004), -1, 1, 0.1, 1) * vRadius,
          true
        ),
        ...polarToCartesian(
          0,
          0,
          theta + (p.TWO_PI / 3) * (i + 1.5),
          p.map(noise1D(1 / 1000 + 0.003), -1, 1, 0.1, 2) * hRadius,
          true
        ),
        p.map(noise2D(1 / 1000 + 0.002, p.sin(theta)), -1, 1, 0.1, 0.5)
      );
    });
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
