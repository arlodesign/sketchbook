import p5 from "p5";
import "p5.createloop";
import { Coordinate } from "coordinate-systems";
const { spherical } = Coordinate;
import polarToCartesian from "util/polarToCartesian";

const RENDER = false;

const sketch = function (p) {
  const GRID = 30;

  let maxDist;

  p.setup = function () {
    RENDER && p.pixelDensity(1);
    p.frameRate(30);
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    p.createLoop(10, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.05,
    });
    p.rectMode(p.CENTER);
    p.noStroke();
  };

  p.draw = function () {
    p.background(0);

    p.camera(
      ...spherical([
        p.height,
        0,
        p.map(p.animLoop.noise(), -1, 1, 0, p.TWO_PI),
      ]).cartesian(),
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

    let direction = 1;

    for (let y = -p.height / 2 + GRID / 2; y < p.height / 2; y += GRID) {
      direction = -direction;
      p.push();
      p.specularMaterial(
        p.map(p.animLoop.noise2D(-y, p.animLoop.theta), -1, 1, 224, 96),
        p.map(p.animLoop.noise2D(y, p.animLoop.theta), -1, 1, 96, 224),
        128
      );
      p.translate(0, y);
      p.rotateZ(p.HALF_PI);
      p.rotateX(p.map(p.animLoop.noise1D(y), -1, 1, 0, direction * p.PI));
      p.rotateY((p.HALF_PI / 2) * p.map(p.animLoop.noise1D(y), -1, 1, 0, 1));

      p.scale(1, 20, 1);
      p.box(GRID * p.map(p.animLoop.noise1D(y), -1, 1, 0.25, 1.75));
      p.pop();
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
