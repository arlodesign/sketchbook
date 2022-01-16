import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();
import { easeInOutQuint as ease } from "util/easing";
import polarToCartesian from "util/polarToCartesian";

const sketch = function (p) {
  const RENDER = p.getURLParams().render === "true";
  const RENDER_SIZE = 1080;
  const TIME = 40;
  const FRAME_RATE = 60;

  const DURATION = TIME * (RENDER ? FRAME_RATE : 1);
  const RATE = RENDER ? 1 : FRAME_RATE;
  const FRAMES = DURATION * RATE;

  let urlParams;
  let hue;
  let low;
  let high;
  let grid;
  let link;

  function changeURL() {
    const searchParams = {
      hue: hue.value(),
      low: low.value(),
      high: high.value(),
      grid: grid.value(),
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
      RENDER ? RENDER_SIZE : p.windowWidth / 2,
      RENDER ? RENDER_SIZE : p.windowHeight / 2
    );
    p.background(255);
    p.createLoop(DURATION, {
      noiseRadius: 0.1,
    });

    p.colorMode(p.HSL, 1);

    urlParams = Object.assign(
      {
        hue: p.random(),
        low: p.random(0.001, 0.02),
        high: p.random(0.02, 0.05),
        grid: p.floor(p.random(2, 20)),
      },
      p.getURLParams()
    );

    if (!RENDER) {
      p.noSmooth();
    }

    hue = p.createSlider(0, 1, parseFloat(urlParams.hue, 10), 0.01);
    hue.changed(changeURL);
    low = p.createSlider(0.001, 0.02, parseFloat(urlParams.low, 10), 0.001);
    low.changed(changeURL);
    high = p.createSlider(0.02, 0.05, parseFloat(urlParams.high, 10), 0.001);
    high.changed(changeURL);
    grid = p.createSlider(2, 20, parseFloat(urlParams.grid, 10), 1);
    grid.changed(changeURL);
    link = p.createA("?", RENDER ? "Draft" : "Render");

    changeURL();
  };

  p.draw = function () {
    const { progress, theta, noise, noise1D, noise2D } = p.animLoop;

    p.background(255);

    for (let x = 0; x <= p.width; x += p.width / grid.value()) {
      for (let y = 0; y <= p.height; y += p.height / grid.value()) {
        for (
          let s = 0;
          s < 1;
          s += p.map(
            ease(p.abs(noise2D(x / 100, y / 100))),
            0,
            1,
            low.value(),
            high.value()
          )
        ) {
          p.push();
          p.blendMode(p.HARD_LIGHT);
          p.stroke(
            hue.value(),
            1,
            p.sin(2 * p.PI * s - p.PI / 2) / 2 + 0.5,
            1 - s
          );
          p.noFill();
          p.strokeWeight(s * (RENDER ? 2 : 1));
          p.translate(x, y);
          p.rotate(theta + s * p.TWO_PI);
          p.rotate(p.TWO_PI * noise2D(y / 500, x / 500));
          p.scale(
            s *
              noise1D(
                p.dist(
                  x,
                  y,
                  ...polarToCartesian(
                    p.width / 2,
                    p.height / 2,
                    theta,
                    p.max(p.width, p.height),
                    true
                  )
                ) / 250
              )
          );
          p.rectMode(p.CENTER);
          p.square(0, 0, p.min(p.width * 0.9, p.height * 0.9));
          p.pop();
        }
      }
    }

    p.frameCount % 100 === 0 && console.info(`${p.ceil(progress * 100)}%`);
    if (RENDER && p.frameCount <= FRAMES) {
      p.save(
        `${String(p.frameCount).padStart(String(FRAMES).length, "0")}.png`
      );
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth / 2, p.windowHeight / 2);
  };
};

new p5(sketch, "sketch");
document.getElementById(
  "description"
).innerHTML = `<a href="https://genuary2021.github.io/">#genuary2021</a>: Triple Nested Loop`;
