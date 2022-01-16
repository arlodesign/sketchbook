import p5 from "p5";
import { Coordinate, CoordinateType } from "coordinate-systems";

import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();

const POINTS = 100;
const RENDER = process.env.DEV && false;

const sketch = function (p) {
  const HUE = p.random(0.9);

  p.setup = function () {
    RENDER && p.frameRate(30);
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);

    p.createLoop(49, {
      gif: RENDER ? { render: false, open: true, debug: true } : false,
      noiseRadius: 0.3,
    });
    p.colorMode(p.HSB, 1);
  };

  p.draw = function () {
    const { theta, noise1D } = p.animLoop;
    p.background(255);
    p.noStroke();
    p.fill(255);
    p.pointLight(0, 0, 1, 0, 0, -p.width * 3);
    p.pointLight(0, 0, 0.5, 0, 0, p.width * 3);

    const cameraPosition = Coordinate.spherical([
      p.map(p.cos(theta), -1, 1, p.width * 3, p.width / 2),
      0,
      theta,
    ]);
    p.camera(...cameraPosition.cartesian(), 0, 0, 0, 0, 1, 0);

    let phi = 0;
    for (let th = theta; th < p.TWO_PI + theta; th += p.TWO_PI / POINTS) {
      p.push();
      p.translate(
        ...Coordinate.spherical([
          p.map(p.cos(theta), -1, 1, p.width, p.width * noise1D(p.sin(th))),
          th,
          phi,
        ]).cartesian()
      );
      p.specularMaterial(p.abs(noise1D(p.sin(th))), 0.5, 0.8);
      p.sphere(10);
      p.pop();

      p.push();
      p.translate(
        ...Coordinate.spherical([
          p.map(
            p.cos(theta),
            -1,
            1,
            p.width,
            p.width * noise1D(p.sin(th + p.TWO_PI * (1 / 3)))
          ),
          th + p.TWO_PI * (1 / 3),
          phi,
        ]).cartesian()
      );
      p.specularMaterial(
        p.abs(noise1D(p.sin(th + p.TWO_PI * (1 / 3)))),
        0.5,
        0.8
      );
      p.sphere(10);
      p.pop();

      p.push();
      p.translate(
        ...Coordinate.spherical([
          p.map(
            p.cos(theta),
            -1,
            1,
            p.width,
            p.width * noise1D(p.sin(th + p.TWO_PI * (2 / 3)))
          ),
          th + p.TWO_PI * (2 / 3),
          phi,
        ]).cartesian()
      );
      p.specularMaterial(
        p.abs(noise1D(p.sin(th + p.TWO_PI * (2 / 3)))),
        0.5,
        0.8
      );
      p.sphere(10);
      p.pop();

      phi += p.TWO_PI / POINTS;
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
