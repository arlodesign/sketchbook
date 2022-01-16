import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();
import polarToCartesian from "util/polarToCartesian";

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const PETAL_COUNT = 24;
  const HUE = p.random();

  let maskImage;
  let bg;
  let fg;

  p.setup = function () {
    if (RENDER) {
      p.pixelDensity(1);
      p.frameRate(30);
    }

    p.createCanvas(p.windowWidth, p.windowHeight);
    p.createLoop(20, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.5,
    });
    p.colorMode(p.HSL, 1);

    bg = p.color(HUE, 0.4, 0.9);
    fg = p.color(HUE, 0.8, 0.5);

    maskImage = p.createGraphics(p.width, p.height);
    maskImage.fill(0);
    maskImage.triangle(
      p.width / 2,
      p.height / 2,
      ...polarToCartesian(
        p.width / 2,
        p.height / 2,
        -(p.TWO_PI / PETAL_COUNT) / 2,
        ((1 / p.cos(-(p.TWO_PI / PETAL_COUNT) / 2)) * p.width) / 2,
        true
      ),
      ...polarToCartesian(
        p.width / 2,
        p.height / 2,
        p.TWO_PI / PETAL_COUNT / 2,
        ((1 / p.cos(p.TWO_PI / PETAL_COUNT / 2)) * p.width) / 2,
        true
      )
    );
  };

  p.draw = function () {
    p.background(bg);

    const flameImage = p.createGraphics(p.width, p.height);
    flameImage.colorMode(p.HSL, 1);

    for (let y = p.height / 5; y < p.height - p.height / 5; y++) {
      const { noise1D } = p.animLoop;
      const d = p.width / 2;
      const r = p.map(noise1D(y / 10), -1, 1, 0.01, 1);

      for (let l = 0; l < 1; l += r) {
        const x1 = p.width / 2 + d * l;
        flameImage.fill(p.lerpColor(fg, p.color(HUE, 1, 0.1, 0), l));
        flameImage.noStroke();
        flameImage.rect(x1, y, -d * r, 1);
      }
    }
    const flames = flameImage.get();
    flames.mask(maskImage);
    p.translate(p.width / 2, p.height / 2);
    for (let i = 0; i < PETAL_COUNT; i++) {
      p.push();
      p.scale(i % 2 ? 1 : -1, 1);
      p.rotate((p.TWO_PI / PETAL_COUNT) * i);
      p.image(flames, -p.width / 2, -p.height / 2);
      p.pop();
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
