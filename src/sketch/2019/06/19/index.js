import p5 from "p5";
import { Coordinate } from "coordinate-systems";

const { spherical } = Coordinate;

const sketch = function (p) {
  const SIZE = 200;

  let points = [];
  let initPoints = [];

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    initPoints = Array.from(Array(50), () => [
      SIZE,
      p.random(p.TWO_PI),
      p.random(p.TWO_PI),
    ]);
    points = [...initPoints];
  };

  p.draw = function () {
    p.background(0);
    p.directionalLight(
      p.min(p.frameCount, 255),
      p.min(p.frameCount, 255),
      p.min(p.frameCount, 255),
      p.cos(p.frameCount / 100),
      p.sin(p.frameCount / 200),
      p.sin(p.frameCount / 100) / 2
    );
    p.camera(
      p.sin(p.frameCount / (SIZE * 5)) * (SIZE * 2),
      p.cos(p.frameCount / (SIZE * 5)) * (SIZE * 2),
      SIZE / 3,
      0,
      0,
      0,
      0,
      1,
      0
    );

    p.noStroke();
    p.fill(0);
    p.specularMaterial(255, 255, 255);

    points.forEach((pt, i) => {
      const v = p.createVector(...spherical(pt).cartesian());
      v.normalize();

      p.push();
      p.translate(
        ...spherical(pt)
          .cartesian()
          .map((c) => c / 2)
      );
      p.rotateX(p.atan2(v.y, v.z));
      p.cylinder(20 * p.noise(v.x, v.y, p.frameCount / 150), SIZE, 50);
      p.pop();

      points[i] = [
        SIZE,
        initPoints[i][1] * p.noise(initPoints[i][1], p.frameCount / 500),
        initPoints[i][2] * p.noise(initPoints[i][2], p.frameCount / 500),
      ];
    });
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
