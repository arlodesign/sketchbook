import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();
import { easeInOutCubic as ease, easeInOutQuint } from "util/easing";
import { Coordinate } from "coordinate-systems";

const { spherical } = Coordinate;

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const RENDER_SIZE = 1080;
  const DURATION = 30 * (RENDER ? 60 : 1);
  const RATE = RENDER ? 1 : 30;
  const RESOLUTION = 20;
  const HUE = p.random(0.9);

  let urlParams;
  let cameraDistance;
  let link;

  class Voxel {
    constructor(x, y, z) {
      this.x = x;
      this.y = y;
      this.z = z;
    }
    get size() {
      const { x, y, z } = this;
      const { progress } = p.animLoop;
      const loopedProgress = ease(-4 * progress * progress + 4 * progress);
      const func = p.sin(
        p.dist(
          x,
          y,
          z,
          p.lerp(
            -RESOLUTION,
            RESOLUTION,
            p.abs(p.animLoop.noise1D(x / 100) * loopedProgress)
          ),
          p.lerp(
            -RESOLUTION,
            RESOLUTION,
            p.abs(p.animLoop.noise1D(y / 100) * loopedProgress)
          ),
          p.lerp(
            -RESOLUTION,
            RESOLUTION,
            p.abs(p.animLoop.noise1D(z / 100) * loopedProgress)
          )
        )
      );

      // return func > 0 ? 1 : 0;
      return easeInOutQuint(easeInOutQuint(p.abs(func)));
    }
    draw() {
      p.push();
      p.translate(this.x, this.y, this.z);
      p.box(this.size);
      p.pop();
    }
  }

  let voxels = [];

  p.setup = function () {
    p.pixelDensity(1);
    p.frameRate(RATE);
    p.createCanvas(
      RENDER ? RENDER_SIZE : p.floor(RENDER_SIZE / 4),
      RENDER ? RENDER_SIZE : p.floor(RENDER_SIZE / 4),
      p.WEBGL
    );
    p.colorMode(p.HSB, 1);
    RENDER ? p.smooth() : p.noSmooth();
    p.createLoop(DURATION, {
      noiseRadius: 0.1,
    });

    for (let x = 0; x < RESOLUTION; x++) {
      for (let y = 0; y < RESOLUTION; y++) {
        for (let z = 0; z < RESOLUTION; z++) {
          voxels.push(
            new Voxel(
              x - RESOLUTION / 2,
              y - RESOLUTION / 2,
              z - RESOLUTION / 2
            )
          );
        }
      }
    }

    urlParams = Object.assign(
      {
        cameraDistance: RESOLUTION * (RENDER ? 4 * 8 : 8),
      },
      p.getURLParams()
    );
    cameraDistance = p.createSlider(
      RESOLUTION * (RENDER ? 4 * 3 : 3),
      RESOLUTION * (RENDER ? 4 * 10 : 10),
      parseFloat(urlParams.cameraDistance, 10)
    );
    link = p.createA("?", "Render");
  };

  p.draw = function () {
    const { progress, theta, noise1D, noise2D } = p.animLoop;

    p.background(HUE, 0.5, 0.5);
    p.camera(
      ...spherical([cameraDistance.value(), 10, theta]).cartesian(),
      0,
      0,
      0,
      0,
      1,
      0
    );
    p.pointLight(0, 0, 1, 0, 0, 1);
    p.specularMaterial(
      p.map(noise1D(0.05), -1, 1, HUE - 0.1, HUE + 0.1),
      0.5,
      0.8
    );
    p.noStroke();

    p.push();
    p.scale(p.width / RESOLUTION / 3);
    voxels.forEach((v) => v.draw());
    p.pop();

    link.attribute(
      "href",
      "?" +
        new URLSearchParams({
          cameraDistance: cameraDistance.value(),
          render: true,
        }).toString()
    );

    if (RENDER && p.frameCount <= DURATION * RATE) {
      p.frameCount % 100 === 0 && console.info(`${p.floor(progress * 100)}%`);
      p.save(
        `${String(p.frameCount).padStart(
          String(DURATION * RATE).length,
          "0"
        )}.png`
      );
    }
  };
};

new p5(sketch, "sketch");
