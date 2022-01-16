import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();
import { easeInOutQuad as ease } from "util/easing";

import { Coordinate } from "coordinate-systems";
const { spherical } = Coordinate;

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const DURATION = 60;
  const RATE = 30;
  const COUNT = 5000;
  const FUNCTIONS = [Math.sin, Math.cos];

  p.setup = function () {
    p.pixelDensity(RENDER ? 1 : 0.5);
    p.frameRate(RATE);
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    p.colorMode(p.HSB, 1);
    p.createLoop(DURATION, {
      noiseRadius: 2,
    });
  };

  p.draw = function () {
    const { progress, theta, noise1D } = p.animLoop;
    const easedProgress = ease(-4 * progress * progress + 4 * progress);

    p.background(255);
    p.specularMaterial(255);

    for (let i = 0; i < 3; i++) {
      p.pointLight(
        1,
        0,
        0.5,
        ...spherical([
          p.width * (1 - easedProgress) * 2,
          p.TWO_PI * (i / 3),
          theta,
        ]).cartesian()
      );
    }

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
      const offset = theta + (i % 2) * p.PI;

      p.push();
      p.rotateX(r * easedProgress);
      p.rotateY(r * easedProgress);
      p.rotateZ(
        r + offset * FUNCTIONS[i % 2](offset) + noise1D(FUNCTIONS[i % 2](r))
      );
      p.cylinder(p.width * 0.666, 10, 2 * ((i % 3) + 1), 3);
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
