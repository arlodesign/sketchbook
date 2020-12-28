import p5 from "p5";
import polarToCartesian from "util/polarToCartesian";
import "p5.createloop";
import { easeInCubic } from "util/easing";

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const DURATION = 20;
  const RATE = 60;
  const SIDE_COUNT = 5;
  const LINE_COUNT = 100;

  let r;
  let noiseRadii = [];

  p.setup = function () {
    p.pixelDensity(1);
    p.frameRate(RATE);
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(255);
    p.createLoop(DURATION, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.1,
    });

    r = p.width / 2 - p.width / 20;

    noiseRadii = Array(LINE_COUNT)
      .fill()
      .map(() => p.random(100, 200));
  };

  p.draw = function () {
    const { theta, noise, noise1D } = p.animLoop;

    const gfx = p.createGraphics(p.width, p.height);
    const mask = p.createGraphics(p.width, p.height);

    p.background(255);

    for (let i = 0; i < p.TWO_PI; i += p.TWO_PI / LINE_COUNT) {
      gfx.strokeWeight(
        p.map(noise1D(i, { noiseRadius: noiseRadii[i] }), -1, 1, 1, 5)
      );
      gfx.bezier(
        p.width + r,
        p.height / 2,
        ...polarToCartesian(
          p.width / 2,
          p.height / 2,
          -(p.TWO_PI / SIDE_COUNT / 2) * easeInCubic(p.abs(noise1D(2))),
          r * easeInCubic(p.abs(noise1D(3))),
          true
        ),
        ...polarToCartesian(
          p.width / 2,
          p.height / 2,
          -(p.TWO_PI / SIDE_COUNT / 2) * easeInCubic(p.abs(noise1D(4))),
          r * easeInCubic(p.abs(noise1D(5))),
          true
        ),
        ...polarToCartesian(
          p.width / 2,
          p.height / 2,
          -theta + i,
          p.width,
          true
        )
      );
    }

    mask.fill(0);
    mask.translate(p.width / 2, p.height / 2);
    mask.triangle(
      0,
      0,
      ...polarToCartesian(0, 0, -(p.TWO_PI / SIDE_COUNT / 2), r, true),
      polarToCartesian(0, 0, p.TWO_PI / SIDE_COUNT / 2, r, true)[0],
      0
    );

    const gfxImage = gfx.get();
    gfxImage.mask(mask);

    p.push();
    p.translate(p.width / 2, p.height / 2);
    p.rotate(theta);

    for (let i = 0; i < SIDE_COUNT; i++) {
      p.push();
      p.rotate((p.TWO_PI / SIDE_COUNT) * i);
      p.image(gfxImage, -p.width / 2, -p.height / 2);
      p.pop();

      p.push();
      p.scale(1, -1);
      p.rotate((p.TWO_PI / SIDE_COUNT) * i);
      p.image(gfxImage, -p.width / 2, -p.height / 2);
      p.pop();
    }

    p.pop();
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
