import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();
import { Coordinate } from "coordinate-systems";
const { spherical } = Coordinate;

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const DURATION = 20;
  const RATE = 30;
  const COUNT = 200;

  let r;
  let h;

  p.setup = function () {
    p.pixelDensity(RENDER ? 1 : 0.5);
    p.frameRate(RATE);
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    p.colorMode(p.HSB, 1);
    p.createLoop(DURATION, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.1,
    });

    r = p.width / 2;
    h = (r * 2) / COUNT;
  };

  p.draw = function () {
    const { progress, theta, noise1D } = p.animLoop;

    p.background(255);
    p.specularMaterial(1, 0, 1);
    p.pointLight(
      1,
      0,
      1,
      ...spherical([p.height, theta + p.PI, p.PI]).cartesian()
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

    for (let i = 0; i < COUNT; i++) {
      const y = -r + h * i + h / 2;
      const x = (p.width / 5) * noise1D(i / COUNT);
      const tr =
        p.sqrt(r * r - y * y) +
        p.sin(p.map(i, 0, COUNT, theta, theta + (p.TWO_PI + p.PI) * 2)) *
          (p.width / 5);

      p.push();
      p.translate(x, y, 0);
      p.rotateX(p.HALF_PI);
      p.torus(tr, h);
      p.pop();
    }

    p.frameCount < DURATION * RATE &&
      p.frameCount % 100 === 0 &&
      console.info(`${p.floor(progress * 100)}%`);

    p.frameCount === DURATION * RATE && console.info(`100%`);
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
