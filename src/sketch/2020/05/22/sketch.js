import p5 from "p5";
import glitch from "glitch-canvas";

import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();
import { easeInOutQuart } from "util/easing";

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const DURATION = 20;
  const RATE = 30;
  const CIRCLE_COUNT = 20;

  let c;
  let glitchImage;

  function setGlitch(imageData, params = {}) {
    return glitch(params)
      .fromImageData(imageData)
      .toDataURL()
      .then((url) => {
        glitchImage = null;
        glitchImage = p.loadImage(url);
      });
  }

  p.setup = function () {
    p.pixelDensity(1);
    p.frameRate(RATE);
    p.createCanvas(p.windowWidth / 2, p.windowHeight / 2);
    p.background(255);
    p.createLoop(DURATION, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.1,
    });
    p.noSmooth();
    c = p.createGraphics(p.width, p.height);
    c.colorMode(p.HSB, 1);
    glitchImage = p.createImage(p.width, p.height);
  };

  p.draw = function () {
    const { theta, noise1D, noise2D } = p.animLoop;

    c.background(255);
    c.noFill();
    c.strokeWeight(c.width / 20);
    c.push();
    c.translate(p.width / 2, p.height / 2);
    for (let i = 1; i <= CIRCLE_COUNT; i++) {
      c.stroke(p.abs(noise2D(i / 200, 1 / 100)), 1, 1, 0.5);
      c.circle(
        // p.sin(theta) * (p.width / 10),
        // p.cos(theta * 5) * (p.height / 10),
        -p.width / 2,
        0,
        p.height *
          ((i / CIRCLE_COUNT) * 2) *
          easeInOutQuart(p.abs(noise1D(i))) +
          p.width / 10
      );
    }
    c.pop();

    const imageData = c.drawingContext.getImageData(0, 0, p.width, p.height);
    (p.frameCount % 4 === 0 || p.frameCount === 1) &&
      setGlitch(imageData, { quality: 99 });

    p.blendMode(p.BLEND);
    p.background(255);
    p.image(c, 0, 0, p.width, p.height);
    p.blendMode(p.HARD_LIGHT);
    p.image(glitchImage, 0, 0, p.width, p.height);

    // RENDER &&
    //   process.env.DEV &&
    //   p.frameCount <= DURATION * RATE &&
    //   p.save(
    //     `${String(p.frameCount).padStart(
    //       String(DURATION * RATE).length,
    //       "0"
    //     )}.png`
    //   );
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
