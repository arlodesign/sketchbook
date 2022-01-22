import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
import { getLineBy3Points } from "get-parabola";
import { easeInOutQuad } from "util/easing";

window.p5 = p5;
attachCreateLoop();

const sketch = function (p) {
  const brightness = getLineBy3Points([
    { x: -1, y: 0.2 },
    { x: 0, y: 0.7 },
    { x: 1, y: 1 },
  ]);

  const size = getLineBy3Points([
    { x: -1, y: 0.8 },
    { x: 0, y: 0.5 },
    { x: 1, y: 0.2 },
  ]);

  const RENDER = p.getURLParams().render === "true";
  const RENDER_SIZE = [~~((11 / 14) * p.windowHeight), p.windowHeight];
  const TIME = 180;
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
    p.pixelDensity(RENDER ? 1 : 2);
    p.frameRate(RATE);
    p.createCanvas(
      RENDER ? RENDER_SIZE : p.windowWidth,
      RENDER ? RENDER_SIZE : p.windowHeight
    );
    p.createLoop(DURATION, {
      noiseRadius: 0.1,
    });

    urlParams = Object.assign(
      {
        hue: p.random(),
      },
      p.getURLParams()
    );

    if (!RENDER) {
      p.noSmooth();
    }

    hue = p.createSlider(0.1, 0.9, parseFloat(urlParams.hue, 10), 0.01);
    hue.changed(changeURL);
    link = p.createA("?", RENDER ? "Draft" : "Render");

    changeURL();

    p.colorMode(p.HSB, 1);
    p.background(hue.value(), 0.2, 0.3);
  };

  p.draw = function () {
    const { progress, theta, noise, noise1D, noise2D } = p.animLoop;
    const loopedProgress = p.sin(2 * p.PI * progress - p.PI / 2) / 2 + 0.5;

    // DRAW
    p.stroke(hue.value() + 0.1 * noise1D(1), 1, brightness(noise1D(2)), 0.1);
    // p.strokeWeight(5);
    p.noFill();
    p.blendMode(p.OVERLAY);
    p.translate(p.width / 2, p.height / 2);
    p.rotate(theta / 4);
    p.rectMode(p.CENTER);
    p.square(
      noise2D(2, 3) * p.width * 0.1,
      noise2D(3, 2) * p.width * 0.1,
      easeInOutQuad(size(noise())) * p.width * 0.9
    );

    p.frameCount % 100 === 0 &&
      console.info(`${p.ceil(progress * 100)}% | ${p.frameCount}/${FRAMES}`);

    if (RENDER) {
      p.save(
        `${String(p.frameCount).padStart(String(FRAMES).length, "0")}.png`
      );
    }

    if (p.frameCount === FRAMES) p.noLoop();
  };
};

new p5(sketch, "sketch");
// document.getElementById(
//   "description"
// ).innerHTML = ``;
