import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
import { easeInOutQuad } from "util/easing";
import polarToCartesian from "util/polarToCartesian";
import waveLoop from "util/waveLoop";

window.p5 = p5;
attachCreateLoop();

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
  const GRID_SIZE = 15;

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
    p.pixelDensity(RENDER ? 1 : 2);
    p.frameRate(RATE);
    p.createCanvas(RENDER_SIZE, RENDER_SIZE);
    p.background(255);
    p.createLoop(DURATION, {
      noiseRadius: 0.1,
    });

    p.colorMode(p.HSB, 1);

    urlParams = Object.assign(
      {
        hue: p.random(),
      },
      p.getURLParams()
    );

    if (!RENDER) {
      p.noSmooth();
    }

    hue = p.createSlider(0, 1, parseFloat(urlParams.hue, 10), 0.01);
    hue.changed(changeURL);
    link = p.createA("?", RENDER ? "Draft" : "Render");

    changeURL();
  };

  p.draw = function () {
    const { progress, theta, noise, noise1D, noise2D } = p.animLoop;
    const loop = waveLoop(progress);

    p.background(hue.value(), 1, 0.5);
    p.fill(hue.value(), 1, 1);
    p.noStroke();

    const focus = polarToCartesian(
      p.width / 2,
      p.height / 2,
      theta,
      p.width / 2 + (p.width / 2) * easeInOutQuad(Math.abs(noise())),
      true
    );

    for (let x = 0; x < p.width; x += p.width / GRID_SIZE) {
      for (let y = 0; y < p.height; y += p.height / GRID_SIZE) {
        const center = [
          x + p.width / GRID_SIZE / 2,
          y + p.height / GRID_SIZE / 2,
        ];
        p.push();
        p.translate(...center);
        p.rotate(p.TWO_PI * noise1D(p.dist(...focus, ...center) / 1000));
        p.rectMode(p.CENTER);
        p.square(0, 0, p.width / GRID_SIZE);
        p.pop();
      }
    }

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
