import p5 from "p5";
import { Coordinate } from "coordinate-systems";
const { spherical } = Coordinate;

const sketch = function (p) {
  const SIZE = 20;

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    p.noStroke();
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
      ...spherical([
        p.height,
        p.frameCount / 750,
        p.frameCount / 1000,
      ]).cartesian(),
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

    for (let i = 0; i < SIZE; i++) {
      p.push();
      p.rotateX((p.TWO_PI / SIZE) * i * p.cos(p.frameCount / 500));
      p.rotateY((p.TWO_PI / SIZE) * i * p.cos(p.frameCount / 500));
      p.rotateZ((p.TWO_PI / SIZE) * i * p.cos(p.frameCount / 500));
      p.torus(SIZE * i, SIZE / 3, 24 + i * 2);
      p.pop();
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
