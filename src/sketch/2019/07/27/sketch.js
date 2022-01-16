import p5 from "p5";
import { Coordinate } from "coordinate-systems";
const { spherical } = Coordinate;

import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();

const RENDER = process.env.DEV && false;

const sketch = function (p) {
  p.setup = function () {
    if (RENDER) {
      p.pixelDensity(1);
      p.frameRate(30);
    }

    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    p.rectMode(p.CENTER);
    p.noStroke();

    p.createLoop(10, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.5,
    });
  };

  p.draw = function () {
    p.background(0);

    p.camera(
      ...spherical([500, 0, p.animLoop.theta]).cartesian(),
      0,
      0,
      0,
      0,
      1,
      0
    );
    p.directionalLight(
      255,
      255,
      255,
      p.cos(p.animLoop.theta),
      p.sin(p.animLoop.theta),
      0
    );

    [32, 128, 224].forEach((c, i) => {
      p.specularMaterial(c);
      for (let x = -3; x <= 3; x++) {
        for (let y = -3; y <= 3; y++) {
          for (let z = -3; z < 3; z++) {
            const nx = p.map(
              p.sin(p.animLoop.theta),
              -1,
              1,
              2,
              p.animLoop.noise2D(x, i) + 1
            );
            const ny = p.map(
              p.cos(p.animLoop.theta),
              -1,
              1,
              2,
              p.animLoop.noise2D(y, i) + 1
            );
            const nz = p.map(
              p.cos(p.TWO_PI - p.animLoop.theta),
              -1,
              1,
              2,
              p.animLoop.noise2D(z, i) + 1
            );
            const ns = p.map(
              p.cos(p.animLoop.theta),
              -1,
              1,
              2,
              p.animLoop.noise2D(x, y)
            );
            p.push();
            p.translate(50 * x * nx, 50 * y * ny, 50 * z * nz);
            p.rotateX(p.TWO_PI * nx);
            p.rotateY(p.TWO_PI * ny);
            p.rotateZ(p.TWO_PI * nz);
            p.box(30 * nx, 30 * ny, 30 * nz);
            p.pop();
          }
        }
      }
    });
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
