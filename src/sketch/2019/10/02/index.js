import p5 from "p5";
import { Coordinate } from "coordinate-systems";
import { easeInOutQuad as ease } from "util/easing";
import "p5.createloop";

const RENDER = process.env.DEV && false;

const sketch = function (p) {
  const HUE = p.random();

  p.setup = function () {
    if (RENDER) {
      p.frameRate(30);
    }

    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    p.colorMode(p.HSB, 1);

    p.createLoop(49, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.1,
    });
  };

  function drawSphere(phi, th) {
    const { theta, noise1D } = p.animLoop;
    const pt = Coordinate.spherical([
      (p.width / 2) * ease(p.sin(theta)),
      phi,
      th,
    ]).cartesian();
    p.push();
    p.specularMaterial(HUE, 0.5, 0.8);
    p.translate(...pt);
    p.sphere(p.map(ease(p.sin(theta)), 0, 1, p.width / 10, p.width / 5, true));
    p.pop();
  }

  p.draw = function () {
    const { theta, noise1D } = p.animLoop;
    const points = ease(p.abs(p.sin(theta))) * 500;

    p.background(255);
    p.fill(255);
    p.noStroke();
    p.pointLight(0, 0, 1, 0, 0, -p.width * 3);
    p.pointLight(0, 0, 0.5, 0, 0, p.width * 3);

    const cameraPosition = Coordinate.spherical([p.width * 2, 0, p.PI]);
    p.camera(...cameraPosition.cartesian(), 0, 0, 0, 0, 1, 0);

    p.rotateX(p.HALF_PI);
    p.rotateY(theta * 2);
    p.rotateZ(theta);
    let phi = 0;
    for (let th = 0; th < p.PI; th += p.PI / points) {
      drawSphere(phi, th);
      phi += (p.QUARTER_PI / 4) * p.cos(theta);
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
