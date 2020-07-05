import p5 from "p5";
import "p5.createloop";
import { Coordinate } from "coordinate-systems";
const { spherical } = Coordinate;

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const DURATION = 60;
  const RATE = 30;
  const COUNT = 2500;
  const FUNCTIONS = [Math.sin, Math.cos];

  p.setup = function () {
    p.pixelDensity(RENDER ? 1 : 0.5);
    p.frameRate(RATE);
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    p.colorMode(p.HSB, 1);
    p.createLoop(DURATION, {
      noiseRadius: 0.1,
    });
    p.smooth();
  };

  p.draw = function () {
    const { theta, noise1D } = p.animLoop;

    p.background(255);
    p.specularMaterial(1, 0, 1);
    p.pointLight(1, 0, 1, ...spherical([p.height, 0, theta]).cartesian());
    p.camera(
      ...spherical([
        p.width * 2,
        theta * 2,
        p.map(p.sin(theta), -1, 1, -p.QUARTER_PI, p.QUARTER_PI),
      ]).cartesian(),
      0,
      0,
      0,
      0,
      1,
      0
    );
    p.noStroke();

    for (let i = 1; i <= COUNT; i++) {
      const r = (p.TWO_PI / COUNT) * i;
      const offset = theta + (i % 2) * p.HALF_PI;
      p.push();
      p.rotateY(r);
      p.rotateZ(
        r + offset * FUNCTIONS[i % 2](offset) + noise1D(FUNCTIONS[i % 2](r))
      );
      p.torus(p.width * 0.666, 10, 3, 3);
      p.pop();
    }

    RENDER &&
      process.env.DEV &&
      p.frameCount < DURATION * RATE &&
      p.save(
        `${String(p.frameCount).padStart(
          String(DURATION * RATE * 2).length,
          "0"
        )}.png`
      );
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
