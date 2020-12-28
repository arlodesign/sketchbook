import p5 from "p5";
import "p5.createloop";
import susan from "assets/susan.png";
import polarToCartesian from "util/polarToCartesian";
import { easeInCubic } from "util/easing";

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const RENDER_SIZE = RENDER ? 540 : 180;
  const DURATION = 20;
  const RATE = RENDER ? 60 : 30;
  const GRID = 30;
  const BG = [p.random(256), p.random(256), p.random(256)];

  let img;
  let cnvs;

  p.preload = function () {
    img = p.loadImage(susan);
  };

  p.setup = function () {
    p.pixelDensity(1);
    p.frameRate(RATE);
    p.createCanvas(RENDER_SIZE, RENDER_SIZE);
    p.background(255);
    p.noSmooth();
    p.createLoop(DURATION, {
      noiseRadius: 0.7,
    });

    cnvs = p.createGraphics(p.width, p.height);
  };

  p.draw = function () {
    const { progress, noise2D } = p.animLoop;
    const loopedProgress = p.map(
      easeInCubic(-4 * progress * progress + 4 * progress),
      0,
      1,
      0.3,
      1.3
    );

    p.background(255);
    p.loadPixels();

    cnvs.background(...BG);
    cnvs.strokeWeight((p.width / GRID) * 0.75);
    for (let x = p.width / GRID; x < p.width; x += p.width / GRID) {
      for (let y = p.width / GRID; y < p.height; y += p.height / GRID) {
        cnvs.stroke(255 * p.abs(noise2D(x, y)));
        cnvs.point(x, y);
      }
    }
    cnvs.loadPixels();

    for (let y = 0; y < p.height; y++) {
      for (let x = 0; x < p.width; x++) {
        const index = (x + y * p.width) * 4;

        const colors = [1, 2, 3].map((i) => {
          const a = noise2D((y / 400) * i, (x / 400) * i) * p.PI;
          const d =
            noise2D((x / 1000) * i, (y / 1000) * i) *
            (p.width / 3) *
            loopedProgress;

          let imgCoord = polarToCartesian(x, y, a, d);
          imgCoord.x = p.floor(p.constrain(imgCoord.x, 0, cnvs.width - 1));
          imgCoord.y = p.floor(p.constrain(imgCoord.y, 0, cnvs.height - 1));
          return (imgCoord.x + imgCoord.y * cnvs.width) * 4;
        });

        p.pixels[index] = cnvs.pixels[colors[0]];
        p.pixels[index + 1] = cnvs.pixels[colors[1] + 1];
        p.pixels[index + 2] = cnvs.pixels[colors[2] + 2];
        p.pixels[index + 3] = 255;
      }
    }
    p.updatePixels();

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
