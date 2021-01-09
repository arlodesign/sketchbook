import p5 from "p5";
import "p5.createloop";
import polarToCartesian from "util/polarToCartesian";

const sketch = function (p) {
  const RENDER = p.getURLParams().render === "true";
  const RENDER_SIZE = 1080;
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

  let prevPoints = [[0, 0]];

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
    p.frameRate(RATE);
    p.createCanvas(
      RENDER ? RENDER_SIZE : p.windowWidth,
      RENDER ? RENDER_SIZE : p.windowHeight
    );
    p.createLoop(DURATION, {
      noiseRadius: 0.8,
    });
    p.noFill();
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

    p.background((hue.value() + 0.5) % 1, 1, 0.1);
  };

  p.draw = function () {
    const { progress, theta, noise1D, noise2D } = p.animLoop;
    const loopedProgress = p.sin(2 * p.PI * progress - p.PI / 2) / 2 + 0.5;
    const a = theta * 3 + p.TWO_PI * noise1D(0.8);
    const d =
      Math.min(p.width, p.height) *
      0.75 *
      loopedProgress *
      noise2D(2, loopedProgress);
    const pos = polarToCartesian(0, 0, a, d, true);

    p.translate(p.width * progress, p.height / 2);
    prevPoints.push(pos);
    if (prevPoints.length >= 4) {
      const sw = p.constrain(
        p.pow(p.dist(...prevPoints[1], ...prevPoints[2]), 2) / 2,
        1,
        p.width / 100
      );
      prevPoints = prevPoints.slice(-4);

      p.strokeCap(p.SQUARE);
      p.stroke((hue.value() + 0.5) % 1, 1, 0.1, 0.5);
      p.strokeWeight(sw + sw / 4);
      p.curve(...prevPoints.flat());

      p.strokeCap(p.PROJECT);
      p.stroke(
        hue.value(),
        0.8,
        p.abs((p.height / 2 - prevPoints[2][1]) / (p.height / 2))
      );
      p.strokeWeight(sw);
      p.curve(...prevPoints.flat());
    }

    p.frameCount % 100 === 0 && console.info(`${p.ceil(progress * 100)}%`);
    RENDER &&
      p.save(
        `${String(p.frameCount).padStart(String(FRAMES).length, "0")}.png`
      );
    if (p.frameCount === FRAMES) {
      p.noLoop();
    }
  };
};

new p5(sketch, "sketch");
document.getElementById(
  "description"
).innerHTML = `<a href="https://genuary2021.github.io/">#genuary2021</a>: Curve only`;
