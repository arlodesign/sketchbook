import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
import { getLineBy2Points } from "get-parabola";
import { easeInOutQuad, easeOutQuint } from "util/easing";
import waveLoop from "util/waveLoop";
import polarToCartesian from "util/polarToCartesian";

window.p5 = p5;
attachCreateLoop();

const slope = (c) =>
  easeOutQuint(
    Math.min(
      Math.max(
        getLineBy2Points([
          { x: 0.0011, y: 0 },
          { x: 0.0012, y: 1 },
        ])(c),
        0
      ),
      1
    )
  );

const sketch = function (p) {
  const RENDER = p.getURLParams().render === "true";
  const RENDER_SIZE = 1080;
  const TIME = 40;
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
      RENDER ? RENDER_SIZE : ~~(RENDER_SIZE / 10),
      RENDER ? RENDER_SIZE : ~~(RENDER_SIZE / 10)
    );
    p.background(255);
    p.createLoop(DURATION, {
      noiseRadius: 0.5,
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

    const maxDist = p.dist(0, 0, p.width, p.height);
    const positions = [];

    positions.push([p.width / 2, p.height / 2]);
    positions.push(
      polarToCartesian(
        p.width / 2,
        p.height / 2,
        theta,
        (p.height / 2) * easeInOutQuad(waveLoop(progress, 21)),
        true
      )
    );
    positions.push(
      polarToCartesian(
        p.width / 2,
        p.height / 2,
        theta * 2,
        (p.height / 2) * easeInOutQuad(waveLoop(progress, 15)),
        true
      )
    );
    positions.push(
      polarToCartesian(
        p.width / 2,
        p.height / 2,
        theta * 3,
        (p.height / 2) * easeInOutQuad(waveLoop(progress, 9)),
        true
      )
    );

    p.background(hue.value());

    p.loadPixels();
    for (let x = 0; x < p.width; x++) {
      for (let y = 0; y < p.height; y++) {
        const PIX = (x + y * p.width) * 4;
        const d = positions.reduce(
          (prev, curr) => prev * (p.dist(x, y, ...curr) / maxDist),
          1
        );
        const s = Math.abs(
          noise2D(x / (RENDER ? 1000 : 100), y / (RENDER ? 1000 : 100))
        );
        const c = 1 - slope(d) * (1 - s);
        const color = p.color(hue.value(), s, c);

        p.pixels[PIX + 0] = p.red(color);
        p.pixels[PIX + 1] = p.green(color);
        p.pixels[PIX + 2] = p.blue(color);
        p.pixels[PIX + 3] = 255;
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
};

new p5(sketch, "sketch");
// document.getElementById(
//   "description"
// ).innerHTML = ``;
