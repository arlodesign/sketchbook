import p5 from "p5";
import "p5.createloop";
import { makeNoise4D } from "open-simplex-noise";
import { easeInOutQuad as ease } from "util/easing";

import susan from "assets/susan.png";

const noise = new makeNoise4D(Date.now());

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const RENDER_SIZE = 1080;
  const DRAFT_SCALE = 5;
  const DURATION = 20 * (RENDER ? 30 : 1);
  const RATE = RENDER ? 1 : 30;
  const SCALE = 0.1 / (RENDER ? DRAFT_SCALE : 1);

  let img;

  p.preload = function () {
    img = p.loadImage(susan);
  };

  p.setup = function () {
    p.pixelDensity(1);
    p.frameRate(RATE);
    p.createCanvas(
      RENDER ? RENDER_SIZE : p.floor(RENDER_SIZE / DRAFT_SCALE),
      RENDER ? RENDER_SIZE : p.floor(RENDER_SIZE / DRAFT_SCALE)
    );
    p.background(255);
    p.noSmooth();
    p.createLoop(DURATION, {
      noiseRadius: 0.1,
    });
  };

  p.draw = function () {
    const { progress } = p.animLoop;

    p.background(255);
    p.image(img, 0, -20, p.width, p.width * (840 / 660));

    p.loadPixels();

    for (let i = 0; i < p.pixels.length; i += 4) {
      const x = (i / 4) % p.width;
      const y = Math.floor(i / 4 / p.width);

      const noiseVal = ease(
        Math.abs(
          noise(
            SCALE * x,
            SCALE * y,
            Math.cos(Math.PI * 2 * progress),
            Math.sin(Math.PI * 2 * progress)
          )
        )
      );

      if (noiseVal > 0.2) {
        p.pixels[i] = 255 - p.pixels[i];
        p.pixels[i + 1] = 255 - p.pixels[i + 1];
        p.pixels[i + 2] = 255 - p.pixels[i + 2];
      }
    }
    p.updatePixels();

    if (RENDER && p.frameCount <= DURATION * RATE) {
      p.frameCount % 100 === 0 && console.info(`${p.ceil(progress * 100)}%`);
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
