import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();
import { Coordinate } from "coordinate-systems";
const { spherical } = Coordinate;
import polarToCartesian from "util/polarToCartesian";

const RENDER = process.env.DEV && false;
const DURATION = 60;

const sketch = function (p) {
  const HUE = p.random(50);

  let margin;

  p.setup = function () {
    p.frameRate(30);

    if (RENDER) {
      p.pixelDensity(1);
    }

    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    p.noStroke();
    p.colorMode(p.HSB, 100);

    margin = p.width / 20;

    p.createLoop(DURATION, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 2,
    });
  };

  p.draw = function () {
    const { noise1D, theta } = p.animLoop;

    p.background(HUE, 20, 1);
    p.camera(...spherical([1500, 0, theta]).cartesian(), 0, 0, 0, 0, 1, 0);

    for (let a = 0; a < p.TWO_PI; a += p.TWO_PI / 300) {
      const { x, y } = polarToCartesian(0, 0, a, p.width);
      p.push();
      p.ambientLight(50);
      p.specularMaterial(
        p.lerp(HUE, HUE + 50, p.map(p.sin(a), -1, 1, 0, 1)),
        p.lerp(100, 50, p.map(p.sin(a), -1, 1, 0, 1)),
        p.map(y, -p.width, p.width, 20, 100)
      );
      p.rotateX(noise1D(p.sin(a) + p.cos(theta)));
      p.translate(x, 0, y);
      p.cylinder(2, 1000);
      p.pop();
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
