import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
import { easeInOutQuad } from "util/easing";
import polarToCartesian from "util/polarToCartesian";
import waveLoop from "util/waveLoop";

window.p5 = p5;
attachCreateLoop();

const sketch = function (p) {
  const RENDER = p.getURLParams().render === "true";
  const RENDER_SIZE = [~~((11 / 14) * p.windowHeight), p.windowHeight];
  const TIME = 60;
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
    p.pixelDensity(2);
    p.frameRate(RATE);
    p.createCanvas(p.windowWidth, p.windowWidth);
    p.createLoop(DURATION, {
      noiseRadius: 0.5,
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
    p.background(hue.value(), 0.2, 0.7);
  };

  p.draw = function () {
    const { progress, theta, noise, noise1D, noise2D } = p.animLoop;
    const loop = waveLoop(progress);

    // DRAW
    p.fill(
      hue.value() + 0.1 * noise1D(1),
      waveLoop(progress, 7),
      waveLoop(progress, 10),
      0.05
    );
    p.noStroke();
    // p.noFill();
    p.blendMode(p.HARD_LIGHT);
    p.translate(p.width / 2, p.height / 2);
    // p.rotate(theta);
    // p.rectMode(p.CENTER);

    const points = [
      polarToCartesian(
        0,
        0,
        theta,
        p.lerp(0, p.width, loop * easeInOutQuad(Math.abs(noise2D(0, 0.1)))),
        true
      ),
      polarToCartesian(
        0,
        0,
        theta + (p.TWO_PI / 5) * 1,
        p.lerp(0, p.width, loop * easeInOutQuad(Math.abs(noise2D(0.2, 0.3)))),
        true
      ),
      polarToCartesian(
        0,
        0,
        theta + (p.TWO_PI / 5) * 2,
        p.lerp(0, p.width, loop * easeInOutQuad(Math.abs(noise2D(0.4, 0.5)))),
        true
      ),
      polarToCartesian(
        0,
        0,
        theta + (p.TWO_PI / 5) * 3,
        p.lerp(0, p.width, loop * easeInOutQuad(Math.abs(noise2D(0.6, 0.7)))),
        true
      ),
      polarToCartesian(
        0,
        0,
        theta + (p.TWO_PI / 5) * 4,
        p.lerp(0, p.width, loop * easeInOutQuad(Math.abs(noise2D(0.8, 0.9)))),
        true
      ),
    ];

    p.beginShape();
    points.forEach((pt) => p.curveVertex(...pt));
    p.curveVertex(...points[0]);
    p.curveVertex(...points[1]);
    p.curveVertex(...points[2]);
    p.endShape();

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
