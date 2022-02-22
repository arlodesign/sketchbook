import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
import { easeOutQuart, easeInOutQuad } from "util/easing";
import polarToCartesian from "util/polarToCartesian";
window.p5 = p5;
attachCreateLoop();

const sketch = function (p) {
  const RENDER = p.getURLParams().render === "true";
  const RENDER_SIZE = [~~((4 / 5) * p.windowHeight), p.windowHeight];
  const TIME = 60;
  const FRAME_RATE = 60;

  // Lower if frames skip
  const RENDER_SPEED = 5;
  const DURATION = TIME * (RENDER ? ~~(FRAME_RATE / RENDER_SPEED) : 1);
  const RATE = ~~(RENDER ? RENDER_SPEED : FRAME_RATE);
  // const RATE = FRAME_RATE;
  const FRAMES = DURATION * RATE;

  let urlParams;
  let hue;
  let link;
  let points = [];

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
      RENDER ? RENDER_SIZE[0] : ~~(RENDER_SIZE[0] / 4),
      RENDER ? RENDER_SIZE[1] : ~~(RENDER_SIZE[1] / 4)
    );
    p.createLoop(DURATION, {
      noiseRadius: 0.2,
    });

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

    p.colorMode(p.HSL, 1);
    p.noFill();
    p.background(1 - hue.value(), 0.2, 0.2);
    p.blendMode(p.HARD_LIGHT);
  };

  p.draw = function () {
    const { progress, theta, noise, noise1D, noise2D } = p.animLoop;
    const loopedProgress = p.sin(2 * p.PI * progress - p.PI / 2) / 2 + 0.5;

    let thesePoints = [];

    // DRAW
    p.stroke(
      p.lerp(hue.value() - 0.1, hue.value() + 0.1, Math.abs(noise1D(0.5))) % 1,
      1,
      easeOutQuart(Math.abs(noise())),
      0.25
    );
    p.strokeWeight(
      Math.max(1, Math.abs(noise2D(0.6, 0.8)) * (RENDER ? 12 : 3))
    );

    const x = p.width / 2 + p.width * 0.25 * noise1D(0.8);
    const y = p.height / 2 + p.height * 0.25 * noise1D(0.6);
    const rotate =
      theta + p.lerp(-p.PI, p.PI, easeInOutQuad(Math.abs(noise2D(0.1, 0.2))));

    const radius = p.width * 0.5 * noise();

    for (let d = 0; d < p.TWO_PI; d += p.TWO_PI / 3) {
      thesePoints.push(polarToCartesian(x, y, d + rotate, radius, true));
    }

    if (points.length) {
      points.forEach((pt, i) => p.line(...pt, ...thesePoints[i]));
    }

    points = thesePoints;

    p.frameCount % 100 === 0 &&
      console.info(`${p.ceil(progress * 100)}% | ${p.frameCount}/${FRAMES}`);

    // if (RENDER && p.frameCount <= FRAMES) {
    //   p.save(
    //     `${String(p.frameCount).padStart(String(FRAMES).length, "0")}.png`
    //   );
    // }

    if (p.frameCount === FRAMES) {
      p.noLoop();
    }
  };
};

new p5(sketch, "sketch");
