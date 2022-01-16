import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();
import { Coordinate } from "coordinate-systems";
const { spherical } = Coordinate;

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const DURATION = 60;
  const RATE = 30;
  const COUNT = 1500;

  p.setup = function () {
    p.pixelDensity(RENDER ? 1 : 0.25);
    p.frameRate(RATE);
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    p.colorMode(p.HSB, 1);
    p.createLoop(DURATION, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.1,
    });
  };

  p.draw = function () {
    const { theta, noise1D } = p.animLoop;

    p.background(255);
    p.specularMaterial(1, 0, 1);
    p.pointLight(
      1,
      0,
      1,
      ...spherical([p.height, theta + p.PI, theta + p.HALF_PI]).cartesian()
    );
    p.camera(
      ...spherical([p.width * 2, 0, theta]).cartesian(),
      0,
      0,
      0,
      0,
      1,
      0
    );
    p.noStroke();
    for (let i = 1; i <= COUNT; i++) {
      p.push();
      p.rotateY((p.TWO_PI / COUNT) * i);
      p.rotateZ((p.TWO_PI / COUNT) * i + (i % 2 ? theta : theta * 2));
      p.torus(p.width * 0.666, 3 * p.abs(noise1D(i + COUNT)), 12, 8);
      p.pop();
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
