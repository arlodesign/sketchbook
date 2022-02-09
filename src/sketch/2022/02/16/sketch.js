import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
import { easeInCubic } from "util/easing";

window.p5 = p5;
attachCreateLoop();

const sketch = function (p) {
  const RENDER = p.getURLParams().render === "true";
  const RENDER_SIZE = 1080 / (RENDER ? 1 : 6);
  const TIME = 40;
  const FRAME_RATE = 30;

  // Lower if frames skip
  const RENDER_SPEED = 5;
  const DURATION = TIME * (RENDER ? ~~(FRAME_RATE / RENDER_SPEED) : 1);
  const RATE = ~~(RENDER ? RENDER_SPEED : FRAME_RATE);
  const FRAMES = DURATION * RATE;

  let urlParams;
  let link;

  function changeURL() {
    link.attribute(
      "href",
      "?" +
        new URLSearchParams({
          render: !RENDER,
        }).toString()
    );
    window.history.replaceState(
      null,
      document.title,
      "?" +
        new URLSearchParams({
          render: RENDER,
        }).toString()
    );
  }

  p.setup = function () {
    p.pixelDensity(RENDER ? 2 : 1);
    p.frameRate(RATE);
    p.createCanvas(~~((4 / 5) * RENDER_SIZE), RENDER_SIZE);
    p.background(128);
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

    link = p.createA("?", RENDER ? "Draft" : "Render");

    changeURL();

    p.background(255);
  };

  p.draw = function () {
    const { progress, noise2D } = p.animLoop;

    const x = (p.width / 2) * progress;
    let feather;

    for (let y = 0; y <= p.height; y++) {
      const blackOrWhite = noise2D(
        x / (RENDER ? 300 : 30),
        y / (RENDER ? 300 : 30)
      );

      p.stroke(blackOrWhite > 0 ? "rgba(255,255,255,.8)" : "rgba(0,0,0,.8)");
      p.random() > easeInCubic(progress) && p.point(p.width / 2 - x, y);
      p.random() > easeInCubic(progress) && p.point(p.width / 2 + x, y);
    }

    // DRAW

    p.frameCount % 100 === 0 &&
      console.info(`${p.ceil(progress * 100)}% | ${p.frameCount}/${FRAMES}`);

    if (p.frameCount === FRAMES) {
      p.noLoop();
    }
  };
};

new p5(sketch, "sketch");
// document.getElementById(
//   "description"
// ).innerHTML = ``;
