import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();

const sketch = function (p) {
  const RENDER = p.getURLParams().render === "true";
  const RENDER_SIZE = [~~((11 / 14) * p.windowHeight), p.windowHeight];
  const TIME = RENDER ? 120 : 60;
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

    hue = p.createSlider(0.3, 0.7, parseFloat(urlParams.hue, 10), 0.01);
    hue.changed(changeURL);
    link = p.createA("?", RENDER ? "Draft" : "Render");

    changeURL();

    p.colorMode(p.HSL, 1);
    p.noFill();
    p.background(1 - hue.value(), 0.2, 0.5);
    p.blendMode(p.OVERLAY);
  };

  p.draw = function () {
    const { progress, theta, noise, noise1D, noise2D } = p.animLoop;
    const loopedProgress = p.sin(2 * p.PI * progress - p.PI / 2) / 2 + 0.5;

    // p.background(255);

    // DRAW
    p.stroke(
      p.lerp(-0.3, 0.3, Math.abs(noise1D(0.5))) + hue.value(),
      1,
      Math.abs(noise()),
      0.5
    );
    p.strokeWeight(RENDER ? 2 : 1);
    p.translate(p.width / 2, p.height / 2);
    p.translate(
      p.width * 0.333 * noise1D(0.8),
      p.height * 0.333 * noise1D(0.6)
    );
    p.rotate(theta * 2 + p.lerp(-p.PI, p.PI, Math.abs(noise2D(0.1, 0.2))));
    p.rectMode(p.CENTER);

    const length = p.width * 0.5;

    for (let i = 0; i < length * 2; i += 0.3) {
      const lerpVal = i / (length * 2);
      const x = p.lerp(-length, length, lerpVal);
      p.random() > lerpVal && p.point(x, 0);
    }

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
