import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();
import susan from "assets/susan.png";
import polarToCartesian from "util/polarToCartesian";

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const DURATION = 20;
  const RATE = RENDER ? 60 : 30;

  let img;

  p.preload = function () {
    img = p.loadImage(susan);
  };

  p.setup = function () {
    p.pixelDensity(1);
    p.frameRate(RATE);
    p.createCanvas(660, 840);
    p.background(255);
    p.noSmooth();
    p.createLoop(DURATION, {
      noiseRadius: 0.5,
    });
  };

  p.draw = function () {
    const { progress, theta, noise1D, noise2D } = p.animLoop;
    const loopedProgress = -4 * progress * progress + 4 * progress + 0.1;

    p.background(255);
    p.loadPixels();
    img.loadPixels();

    for (let y = 0; y < p.height; y++) {
      for (let x = 0; x < p.width; x++) {
        const index = (x + y * p.width) * 4;

        const a = noise2D(y / 800, x / 800) * p.PI;
        const d = noise2D(x / 200, y / 200) * 100 * loopedProgress;
        let imgCoord = polarToCartesian(x, y, a, d);
        imgCoord.x = p.floor(p.constrain(imgCoord.x, 0, img.width - 1));
        imgCoord.y = p.floor(p.constrain(imgCoord.y, 0, img.height - 1));

        const imgIndex = (imgCoord.x + imgCoord.y * img.width) * 4;
        p.pixels[index] = img.pixels[imgIndex];
        p.pixels[index + 1] = img.pixels[imgIndex + 1];
        p.pixels[index + 2] = img.pixels[imgIndex + 2];
        p.pixels[index + 3] = img.pixels[imgIndex + 3];
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
