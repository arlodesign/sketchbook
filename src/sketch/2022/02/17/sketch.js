import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";

window.p5 = p5;
attachCreateLoop();

const sketch = function (p) {
  const RENDER = p.getURLParams().render === "true";
  const RENDER_SIZE = 1080 / (RENDER ? 1 : 6);
  const TIME = 60;
  const FRAME_RATE = 30;

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

    hue = p.createSlider(0, 1, parseFloat(urlParams.hue, 10), 0.01);
    hue.changed(changeURL);
    link = p.createA("?", RENDER ? "Draft" : "Render");

    changeURL();

    p.colorMode(p.HSB, 1);
    p.noFill();
    p.background(hue.value(), 0.2, 0.5);
    p.blendMode(p.HARD_LIGHT);
  };

  p.draw = function () {
    const { progress, noise2D } = p.animLoop;

    const x = (p.width / 2 - p.height / 20) * progress;

    for (let y = p.height / 20; y < p.height - p.height / 20; y++) {
      p.stroke(
        p.lerp(
          (hue.value() - 0.1) % 1,
          (hue.value() + 0.1) % 1,
          Math.abs(noise2D(x / (RENDER ? 1000 : 100), y / (RENDER ? 600 : 60)))
        ),
        Math.abs(noise2D(x / (RENDER ? 600 : 60), y / (RENDER ? 400 : 40))),
        Math.abs(noise2D(x / (RENDER ? 300 : 30), y / (RENDER ? 300 : 30)))
      );
      p.point(p.width / 2 - x, y);
      p.point(p.width / 2 + x, y);
    }

    // DRAW

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
// document.getElementById(
//   "description"
// ).innerHTML = ``;
