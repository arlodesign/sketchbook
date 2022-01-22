import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
import { getLineBy3Points } from "get-parabola";
import { easeInOutQuad } from "util/easing";

window.p5 = p5;
attachCreateLoop();

const sketch = function (p) {
  const brightness = getLineBy3Points([
    { x: 0, y: 0.2 },
    { x: 0.5, y: 0.7 },
    { x: 1, y: 1 },
  ]);

  const RENDER = p.getURLParams().render === "true";
  const RENDER_SIZE = [~~((11 / 14) * p.windowHeight), p.windowHeight];
  const TIME = 240;
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
      noiseRadius: 0.8,
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
    p.stroke(
      hue.value() + 0.1 * noise1D(1),
      1,
      brightness(loopedProgress),
      0.05
    );
    p.strokeWeight(2);
    p.noFill();
    p.blendMode(p.OVERLAY);
    p.translate(p.width / 2, p.height / 2);
    // p.rotate(theta);
    // p.rectMode(p.CENTER);

    const points = [
      [noise2D(0, 1) * p.width * 0.1, noise2D(2, 3) * p.width * 0.2],
      [noise2D(4, 5) * p.height * 0.2, noise2D(6, 7) * p.height * 0.3],
      [noise2D(8, 9) * p.width * 0.3, noise2D(10, 11) * p.width * 0.7],
      [noise2D(12, 13) * p.height * 0.6, noise2D(14, 15) * p.height],
    ];

    p.beginShape();
    p.curveVertex(...points[0]);
    p.curveVertex(...points[1]);
    p.curveVertex(...points[2]);
    p.curveVertex(...points[3]);
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
