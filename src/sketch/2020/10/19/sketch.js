import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();
import { easeInOutCubic as ease } from "util/easing";
import { Coordinate } from "coordinate-systems";

const { spherical } = Coordinate;

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const RENDER_SIZE = 1080;
  const DURATION = 50;

  const CALCULATED_DURATION = DURATION * (RENDER ? 60 : 1);

  const SEED_1 = p.random(0, 50000);
  const SEED_2 = p.random(50000, 99999);

  let urlParams;
  let resolution;
  let hue;
  let link;

  class Bar {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }

    get size() {
      const { theta, noise2D } = p.animLoop;

      return p.map(
        ease(
          p.abs(
            p.sin(
              p.dist(
                this.x,
                this.y,
                0,
                ...spherical([3, theta * 3, theta]).cartesian()
              )
            )
          )
        ),
        0,
        1,
        1,
        resolution.value()
      );
    }

    get offset() {
      const { noise2D } = p.animLoop;

      return (
        noise2D((this.x + 1) / 10, (this.y + 1) / 10, { noiseSeed: SEED_2 }) *
        resolution.value()
      );
    }

    draw() {
      p.push();
      p.translate(this.x, this.y, this.offset);
      p.box(0.9, 0.9, this.size);
      p.pop();
    }
  }

  let bars = [];

  function getBars() {
    bars = [];

    for (let x = 0; x < resolution.value(); x++) {
      for (let y = 0; y < resolution.value(); y++) {
        bars.push(
          new Bar(x - resolution.value() / 2, y - resolution.value() / 2, 0)
        );
      }
    }
  }

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

    urlParams = Object.assign(
      {
        hue: 0.5,
        resolution: 11,
      },
      p.getURLParams()
    );
    hue = p.createSlider(0, 1, parseFloat(urlParams.hue, 10), 0.01);
    resolution = p.createSlider(3, 99, parseFloat(urlParams.resolution, 10));
    link = p.createA("?", "Render");

    getBars();

    resolution.input(getBars);
  };

  p.draw = function () {
    const { progress, theta, noise1D, noise2D } = p.animLoop;

    p.background(hue.value(), 0.01, 0.05);
    p.ortho();
    p.pointLight(
      (hue.value() + 0.25) % 1,
      0.8,
      1,
      ...spherical([resolution.value(), theta, theta * 2]).cartesian()
    );
    p.pointLight(
      (hue.value() + 0.5) % 1,
      0.3,
      1,
      ...spherical([resolution.value(), theta + p.PI, theta * 3]).cartesian()
    );
    p.specularMaterial((hue.value() + 0.75) % 1, 0.5, 0.8);
    p.noStroke();

    p.push();
    p.scale(p.width / resolution.value() / 2);
    p.rotateX(theta);
    p.rotateY(theta);
    bars.forEach((v) => v.draw());
    p.pop();

    link.attribute(
      "href",
      "?" +
        new URLSearchParams({
          hue: hue.value(),
          resolution: resolution.value(),
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
