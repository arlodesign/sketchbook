import p5 from "p5";
import "p5.createloop";
import polarToCartesian from "util/polarToCartesian";
import { easeInOutQuint as ease, easeInCubic } from "util/easing";

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const RENDER_SIZE = 540;
  const DURATION = 15;
  const RATE = RENDER ? 60 : 30;
  const BLOB_COUNT = 3;

  class Blob {
    constructor(d) {
      this.d = d;
      this.start = p.random(p.TWO_PI);
      this.direction = p.random([-1, 1]);
      this.speed = p.floor(p.random(1, 4));
    }

    update(theta) {
      this.loc = polarToCartesian(
        p.width / 2,
        p.height / 2,
        (theta * this.speed + this.start) * this.direction,
        this.d
      );
    }
  }

  let blobs = {
    red: [],
    blue: [],
    green: [],
  };
  let maxDist;

  p.setup = function () {
    p.pixelDensity(1);
    p.frameRate(RATE);
    p.createCanvas(
      RENDER ? RENDER_SIZE : p.floor(RENDER_SIZE / 4),
      RENDER ? RENDER_SIZE : p.floor(RENDER_SIZE / 4)
    );
    p.background(255);
    p.noSmooth();
    p.createLoop(DURATION, {
      noiseRadius: 0.2,
    });

    for (const clr in blobs) {
      // eslint-disable-next-line no-prototype-builtins
      if (blobs.hasOwnProperty(clr)) {
        blobs[clr] = Array(BLOB_COUNT)
          .fill()
          .map((_, i) => new Blob((p.width / 2 / (BLOB_COUNT + 1)) * (i + 1)));
      }
    }

    maxDist = p.dist(0, 0, p.width, p.height);
  };

  p.draw = function () {
    const { progress, theta, noise2D } = p.animLoop;

    p.background(255);
    p.loadPixels();

    Object.values(blobs).forEach((c) => c.forEach((b) => b.update(theta)));

    for (let y = 0; y < p.height; y++) {
      for (let x = 0; x < p.width; x++) {
        const index = (x + y * p.width) * 4;
        const colors = { red: 0, green: 0, blue: 0 };

        ["red", "green", "blue"].forEach((clr, i) => {
          const d =
            blobs[clr].reduce(
              (total, blob) =>
                total + p.dist(x, y, blob.loc.x, blob.loc.y) / maxDist,
              0
            ) / BLOB_COUNT;

          const noiseConst =
            easeInCubic(-4 * progress * progress + 4 * progress) *
            (i + 1) *
            100;
          let noiseVal = noise2D(
            (x - p.width / 2) / (100 + noiseConst),
            (y - p.height / 2) / (50 + noiseConst)
          );
          noiseVal = ease(
            p.abs(
              (Math.sin(noiseVal / 0.09) * 0.286 + 0.869) *
                Math.sin(noiseVal / 0.047) *
                (Math.sin(noiseVal / 0.14) * 0.571 + -0.885)
            )
          );
          colors[clr] = p.color(d * noiseVal < 0.1 ? 0 : 255);
        });

        p.pixels[index] = p.red(colors.red);
        p.pixels[index + 1] = p.green(colors.green);
        p.pixels[index + 2] = p.blue(colors.blue);
        p.pixels[index + 3] = 255;
      }
    }
    p.updatePixels();

    p.frameCount % 10 === 0 && console.info(`${p.floor(progress * 100)}%`);

    if (RENDER && p.frameCount <= DURATION * RATE) {
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
