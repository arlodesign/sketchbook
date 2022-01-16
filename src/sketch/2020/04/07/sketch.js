import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();
import { Coordinate } from "coordinate-systems";

const { spherical } = Coordinate;

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const DURATION = 20;
  const RATE = 30;
  const COUNT = 40;

  p.setup = function () {
    p.pixelDensity(RENDER ? 1 : 0.5);
    p.frameRate(RATE);
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    p.background(255);
    p.colorMode(p.HSB, 1);
    p.noStroke();
    p.createLoop(DURATION, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 1.5,
    });
  };

  p.draw = function () {
    const { theta, noise2D, noise1D, noise } = p.animLoop;
    p.background(255);
    p.pointLight(
      1,
      0,
      1,
      ...spherical([p.width * 2, -theta, p.PI]).cartesian()
    );
    p.camera(
      ...spherical([p.width * 0.666, 0, 0]).cartesian(),
      0,
      0,
      0,
      0,
      1,
      0
    );
    p.specularMaterial(1, 0, 1);

    for (let i = 0; i < COUNT; i++) {
      p.push();
      p.translate(
        (p.width / 10) * p.sin(theta + p.map(i, 0, COUNT, 0, p.PI)) +
          (p.width / 30) * noise2D(1 / 20, (i + 1) / COUNT),
        p.map(i, 0, COUNT, -p.height / 2, p.height / 2),
        (p.width / 40) * p.cos(theta + p.map(i, 0, COUNT, 0, p.PI))
      );
      p.rotateY(p.HALF_PI);
      p.rotateX(p.HALF_PI * noise2D(1 / 60, (i + 1) / COUNT));
      p.rotateZ(noise2D(1 / 40, (i + 1) / COUNT) * (p.QUARTER_PI / 10));
      p.torus(
        (p.width / 5) * p.map(noise1D((i + 1) / COUNT), -1, 1, 0.9, 1),
        (p.width / 40) * p.map(noise(), -1, 1, 0.1, 1)
      );
      p.pop();
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
