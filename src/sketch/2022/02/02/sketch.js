import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();
import polarToCartesian from "util/polarToCartesian";

const sketch = function (p) {
  const RENDER = p.getURLParams().render === "true";
  const RENDER_SIZE = [~~((11 / 14) * p.windowHeight), p.windowHeight];
  const TIME = 120;
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
    p.createCanvas(RENDER_SIZE[0], RENDER_SIZE[1]);
    p.createLoop(DURATION, {
      noiseRadius: 0.3,
    });

    urlParams = Object.assign(
      {
        hue: p.random(),
      },
      p.getURLParams()
    );

    hue = p.createSlider(0.4, 0.6, parseFloat(urlParams.hue, 10), 0.01);
    hue.changed(changeURL);
    link = p.createA("?", RENDER ? "Draft" : "Render");

    changeURL();

    p.colorMode(p.HSL, 1);
    p.noFill();
    p.background(1 - hue.value(), 0.8, 0.5);
    p.blendMode(p.OVERLAY);
    // p.strokeWeight(3);
    p.strokeJoin(p.ROUND);
  };

  p.draw = function () {
    const { progress, theta, noise, noise1D, noise2D } = p.animLoop;
    const loopedProgress = p.sin(2 * p.PI * progress - p.PI / 2) / 2 + 0.5;

    // p.background(255);

    // DRAW
    p.stroke(
      p.lerp(-0.4, 0.4, Math.abs(noise1D(2))) + hue.value(),
      1,
      p.lerp(0, 0.666, Math.abs(noise())),
      0.1
    );
    p.translate(p.width / 2, p.height / 2);

    const trianglePoints = [
      polarToCartesian(
        (p.width / 2) * noise1D(0),
        (p.height / 2) * noise1D(1 / 6),
        theta,
        Math.min(p.width * 0.25, p.height * 0.25) * loopedProgress
      ),
      polarToCartesian(
        (p.width / 2) * noise1D(2 / 6),
        (p.height / 2) * noise1D(3 / 6),
        theta + p.TWO_PI / 3,
        Math.min(p.width * 0.25, p.height * 0.25) * loopedProgress
      ),
      polarToCartesian(
        (p.width / 2) * noise1D(4 / 6),
        (p.height / 2) * noise1D(5 / 6),
        theta - p.TWO_PI / 3,
        Math.min(p.width * 0.25, p.height * 0.25) * loopedProgress
      ),
    ];

    trianglePoints.forEach(({ x, y }, i) => {
      const nextPt = trianglePoints[i + 1] || trianglePoints[0];
      for (let i = 0; i < 0.9; i += 0.1) {
        p.line(
          p.lerp(x, nextPt.x, i),
          p.lerp(y, nextPt.y, i),
          p.lerp(x, nextPt.x, i + 0.05),
          p.lerp(y, nextPt.y, i + 0.05)
        );
      }
    });

    p.frameCount % 100 === 0 &&
      console.info(`${p.ceil(progress * 100)}% | ${p.frameCount}/${FRAMES}`);

    if (RENDER && p.frameCount <= FRAMES) {
      p.save(
        `${String(p.frameCount).padStart(String(FRAMES).length, "0")}.png`
      );
    }

    if (p.frameCount === FRAMES) {
      p.noLoop();
    }
  };

  p.windowResized = function () {
    !RENDER && p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
