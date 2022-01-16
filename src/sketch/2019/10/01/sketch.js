import p5 from "p5";
import { Coordinate } from "coordinate-systems";
import { easeInOutQuad as ease } from "util/easing";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();

const RENDER = process.env.DEV && false;

const sketch = function (p) {
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
    p.specularMaterial(p.abs(noise1D(p.sin(th))), 0.5, 0.8);
    p.translate(...pt);
    p.sphere(p.map(ease(p.sin(theta)), 0, 1, p.width / 10, 10, true));
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

    const cameraPosition = Coordinate.spherical([
      p.map(p.cos(theta), -1, 1, p.width * 3, p.width / 2 + 10),
      0,
      theta,
    ]);
    p.camera(...cameraPosition.cartesian(), 0, 0, 0, 0, 1, 0);

    p.rotateX(theta);
    let phi = 0;
    for (let th = 0; th < p.PI; th += p.PI / points) {
      drawSphere(phi, th);
      phi += p.QUARTER_PI / 2;
    }

    p.rotateX(-theta * 2);
    p.specularMaterial(p.abs(noise1D(0.5)), 0.5, 0.8);
    p.box(p.width / 2);
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
