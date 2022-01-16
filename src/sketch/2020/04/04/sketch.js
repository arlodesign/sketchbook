import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();
import { Coordinate } from "coordinate-systems";

const { spherical } = Coordinate;

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const DURATION = 120;
  const RATE = 30;

  let shapes = [];

  p.setup = function () {
    p.pixelDensity(1);
    p.frameRate(RATE);
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    p.colorMode(p.HSB, 1);
    p.noSmooth();
    p.createLoop(DURATION, {
      noiseRadius: 0.8,
    });
  };

  p.draw = function () {
    const { theta, progress, noise, noise1D } = p.animLoop;
    const rotate = theta;
    const mappedProgress = -16 * progress * progress + 16 * progress - 2;
    const position = [
      (p.width / 2) * noise1D(10),
      (p.height / 2) * noise1D(20) * mappedProgress,
      p.width * noise1D(30),
    ];
    const size = ((p.width / 10) * (noise() + 1)) / 2;

    p.background(255);
    p.frameCount < DURATION * RATE && shapes.push({ rotate, position, size });
    p.pointLight(1, 0, 1, ...spherical([p.height, -theta, p.PI]).cartesian());
    p.camera(
      ...spherical([p.width * 2, 0, theta]).cartesian(),
      0,
      0,
      0,
      0,
      1,
      0
    );

    shapes.forEach(({ rotate, position, size }) => {
      p.push();
      p.specularMaterial(1, 0, 1);
      p.noStroke();
      p.translate(...position);
      p.rotateX(rotate);
      p.rotateZ(rotate * 2);
      p.torus(size, size / 3, 24, 24);
      p.pop();
    });

    p.frameCount < DURATION * RATE &&
      p.frameCount % 100 === 0 &&
      console.info(`${p.floor(progress * 100)}%`);

    p.frameCount === DURATION * RATE && console.info(`100%`);

    RENDER &&
      process.env.DEV &&
      p.frameCount < DURATION * RATE * 2 &&
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
