import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
import { getLineBy2Points } from "get-parabola";
import { easeInOutQuad, easeOutQuint } from "util/easing";
import waveLoop from "util/waveLoop";

window.p5 = p5;
attachCreateLoop();

const slope = (c) =>
  easeOutQuint(
    Math.min(
      Math.max(
        getLineBy2Points([
          { x: 0.024, y: 0 },
          { x: 0.025, y: 1 },
        ])(c),
        0
      ),
      1
    )
  );

const sketch = function (p) {
  const RENDER = p.getURLParams().render === "true";
  const RENDER_SIZE = 1080;
  const TIME = 20;
  const FRAME_RATE = 60;

  // Lower if frames skip
  const RENDER_SPEED = 5;
  const DURATION = TIME * (RENDER ? ~~(FRAME_RATE / RENDER_SPEED) : 1);
  const RATE = ~~(RENDER ? RENDER_SPEED : FRAME_RATE);
  const FRAMES = DURATION * RATE;

  let urlParams;
  let hue;
  let link;

  function changeURL() {
    const searchParams = {
      hue: hue.value(),
    };

    link.attribute(
      "href",
      "?" +
        new URLSearchParams({
          ...searchParams,
          render: !RENDER,
        }).toString()
    );
    window.history.replaceState(
      null,
      document.title,
      "?" +
        new URLSearchParams({
          ...searchParams,
          render: RENDER,
        }).toString()
    );
  }

  p.setup = function () {
    p.pixelDensity(1);
    p.frameRate(RATE);
    p.createCanvas(
      RENDER ? RENDER_SIZE : ~~(RENDER_SIZE / 4),
      RENDER ? RENDER_SIZE : ~~(RENDER_SIZE / 4)
    );
    p.background(255);
    p.createLoop(DURATION, {
      noiseRadius: 0.1,
    });
    p.noSmooth();

    p.colorMode(p.HSB, 1);

    urlParams = Object.assign(
      {
        hue: p.random(),
      },
      p.getURLParams()
    );

    hue = p.createSlider(0, 1, parseFloat(urlParams.hue, 10), 0.01);
    hue.changed(changeURL);
    link = p.createA("?", RENDER ? "Draft" : "Render");

    changeURL();
  };

  p.draw = function () {
    const { progress, theta, noise, noise1D, noise2D } = p.animLoop;
    const loop = easeInOutQuad(waveLoop(progress, 13));

    const pos1 = [p.width / 2 - (p.width / 2) * loop, p.height / 2];
    const pos2 = [p.width / 2 + (p.width / 2) * loop, p.height / 2];
    const maxDist = p.dist(0, 0, p.width, p.height);

    p.background(hue.value());

    p.loadPixels();
    for (let x = 0; x < p.width; x++) {
      for (let y = 0; y < p.height; y++) {
        const PIX = (x + y * p.width) * 4;
        const c = slope(
          (p.dist(x, y, ...pos1) / maxDist) * (p.dist(x, y, ...pos2) / maxDist)
        );

        p.pixels[PIX + 0] = p.red(p.color(hue.value(), 1, c));
        p.pixels[PIX + 1] = p.green(p.color(hue.value(), 1, c));
        p.pixels[PIX + 2] = p.blue(p.color(hue.value(), 1, c));
        p.pixels[PIX + 3] = c * 255;
      }
    }
    p.updatePixels();

    p.frameCount % 100 === 0 &&
      console.info(`${p.ceil(progress * 100)}% | ${p.frameCount}/${FRAMES}`);

    if (RENDER && p.frameCount <= FRAMES) {
      p.save(
        `${String(p.frameCount).padStart(String(FRAMES).length, "0")}.png`
      );
    }
  };

  p.windowResized = function () {
    !RENDER && p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
// document.getElementById(
//   "description"
// ).innerHTML = ``;
