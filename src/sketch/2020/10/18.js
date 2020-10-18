import p5 from "p5";
import "p5.createloop";
import { easeInOutCubic as ease, easeInOutQuint } from "util/easing";
import { Coordinate } from "coordinate-systems";

const { spherical } = Coordinate;

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const RENDER_SIZE = 1080;
  const DURATION = 30;
  const RESOLUTION = 29;
  const HUE = p.random();

  const CALCULATED_DURATION = DURATION * (RENDER ? 60 : 1);

  const SEED_1 = p.random(0, 50000);
  const SEED_2 = p.random(50000, 99999);

  let link;

  class Bar {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }

    get size() {
      const { theta, noise2D } = p.animLoop;

      return Math.max(
        ease(
          p.abs(noise2D((this.x + 1) / 100, (this.y + 1) / 100)) *
            p.sin(
              p.dist(
                this.x,
                this.y,
                0,
                ...spherical([1, theta, theta]).cartesian()
              )
            )
        ) * RESOLUTION,
        1
      );
    }

    get offset() {
      return (
        p.animLoop.noise2D((this.x + 1) / 100, (this.y + 1) / 100, {
          noiseSeed: SEED_2,
        }) *
        // p.animLoop.noise() *
        RESOLUTION
      );
    }

    draw() {
      p.push();
      p.translate(this.x, this.y, this.offset);
      p.box(1, 1, this.size);
      p.pop();
    }
  }

  let bars = [];

  p.setup = function () {
    p.pixelDensity(1);
    p.frameRate(RENDER ? 1 : 30);
    p.createCanvas(
      RENDER ? RENDER_SIZE : p.floor(RENDER_SIZE / 4),
      RENDER ? RENDER_SIZE : p.floor(RENDER_SIZE / 4),
      p.WEBGL
    );
    p.colorMode(p.HSB, 1);
    RENDER ? p.smooth() : p.noSmooth();
    p.createLoop(CALCULATED_DURATION, {
      noiseRadius: 0.8,
      noiseSeed: SEED_1,
    });

    for (let x = 0; x < RESOLUTION; x++) {
      for (let y = 0; y < RESOLUTION; y++) {
        bars.push(new Bar(x - RESOLUTION / 2, y - RESOLUTION / 2, 0));
      }
    }

    link = p.createA("?", "Render");
  };

  p.draw = function () {
    const { progress, theta, noise1D, noise2D } = p.animLoop;

    p.background(HUE, 0.2, 0.1);
    p.ortho();
    p.pointLight(
      (HUE + 0.333) % 1,
      0.8,
      1,
      ...spherical([RESOLUTION, theta, theta * 2]).cartesian()
    );
    p.pointLight(
      (HUE + 0.666) % 1,
      0.3,
      1,
      ...spherical([RESOLUTION, theta + p.PI, theta * 3]).cartesian()
    );
    p.specularMaterial(
      p.map(noise1D(0.05), -1, 1, HUE - 0.1, HUE + 0.1),
      0.5,
      0.8
    );
    p.noStroke();

    p.push();
    p.scale(p.width / RESOLUTION / 2);
    p.rotateY(theta);
    bars.forEach((v) => v.draw());
    p.pop();

    link.attribute(
      "href",
      "?" +
        new URLSearchParams({
          render: true,
        }).toString()
    );

    if (RENDER && p.frameCount <= CALCULATED_DURATION) {
      p.frameCount % 100 === 0 && console.info(`${p.floor(progress * 100)}%`);
      p.save(
        `${String(p.frameCount).padStart(
          String(CALCULATED_DURATION).length,
          "0"
        )}.png`
      );
    }
  };
};

new p5(sketch, "sketch");
