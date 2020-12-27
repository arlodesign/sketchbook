import p5 from "p5";
import polarToCartesian, {
  polarToCartesianEllipse,
} from "util/polarToCartesian";
import addNoise from "util/addNoise";

const sketch = function (p) {
  const OUTER_POINTS = 3;
  const INNER_POINTS = 50;

  let maxDist;

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.colorMode(p.HSB, 100);
    // p.blendMode(p.HARD_LIGHT);
  };

  p.draw = function () {
    p.background(0);

    for (let i = 0; i < OUTER_POINTS; i++) {
      const HUE = p.map(i, 0, OUTER_POINTS, 0, 100);
      for (let j = 0; j < INNER_POINTS; j++) {
        const outerEllipsePoint = polarToCartesianEllipse(
          p.width / 2,
          p.height / 2,
          (p.TWO_PI / OUTER_POINTS) * i + p.frameCount / 500,
          p.width * 1.5,
          p.height * 1.5,
          true
        );
        const innerEllipsePoint = polarToCartesianEllipse(
          p.width / 2,
          p.height / 2,
          (p.TWO_PI / INNER_POINTS) * j + p.frameCount / 75,
          p.map(p.sin(p.frameCount / 1000), -1, 1, 0, 1) * (p.width / 2) - 40,
          p.height / 10,
          true
        );
        const distMap = p.map(
          innerEllipsePoint[1],
          p.height / 2 - p.height / 10,
          p.height / 2 + p.height / 10,
          0.2,
          1
        );
        const distVal = p.dist(...outerEllipsePoint, ...innerEllipsePoint);
        p.strokeWeight(3 * distMap);
        p.stroke(HUE, 75, 100 * distMap, 100 * distMap);
        p.line(...outerEllipsePoint, ...innerEllipsePoint);
      }
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
