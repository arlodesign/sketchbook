import p5 from "p5";
import "p5.createloop";
import { Coordinate } from "coordinate-systems";
const { spherical } = Coordinate;

const RENDER = process.env.DEV && false;

const sketch = function (p) {
  const GRID = 60;
  const HUE = p.random(100);

  let wx;
  let wy;
  let maxDist;

  p.setup = function () {
    if (RENDER) {
      p.pixelDensity(1);
      p.frameRate(30);
    }

    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    p.colorMode(p.HSB, 100);

    wx = p.floor(p.width / GRID);
    wy = p.floor(p.height / GRID);
    maxDist = p.dist(0, 0, p.width, p.height);

    p.noStroke();

    p.createLoop(45, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 1,
    });
  };

  p.draw = function () {
    const { noise1D, noise2D, theta } = p.animLoop;
    const xPos = p.map(p.sin(theta), -1, 1, -p.width / 2, p.width / 2);
    const yPos = p.map(p.cos(theta), -1, 1, p.height / 2, -p.height / 2);

    p.background(HUE, 100, 50);
    p.specularMaterial(HUE, 100, 75);
    p.pointLight(0, 0, 100, ...spherical([100, theta, 0]).cartesian());
    p.pointLight(
      100 - HUE,
      25,
      50,
      ...spherical([
        1000,
        p.map(p.sin(theta), -1, 1, 0, p.PI),
        p.map(p.cos(theta), -1, 1, 0, p.PI),
      ]).cartesian()
    );
    for (let x = -wx / 2; x < wx; x++) {
      for (let y = -wy / 2; y < wy; y++) {
        p.push();
        p.translate(x * GRID - GRID / 2, y * GRID - GRID / 2);
        p.rotateZ(
          p.map(p.dist(x, y, xPos, yPos), 0, maxDist, 0, -p.TWO_PI * 15)
        );
        p.rotateX(
          p.map(p.dist(x, y, xPos, yPos), 0, maxDist, 0, p.TWO_PI * 30)
        );
        p.cylinder(GRID / 3, GRID / 3);
        p.pop();
      }
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
