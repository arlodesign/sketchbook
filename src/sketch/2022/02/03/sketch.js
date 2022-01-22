import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
import { easeInOutCubic } from "util/easing";
import polarToCartesian from "util/polarToCartesian";

window.p5 = p5;
attachCreateLoop();

const sketch = function (p) {
  const RENDER = p.getURLParams().render === "true";
  const RENDER_SIZE = [~~((11 / 14) * p.windowHeight), p.windowHeight];
  const TIME = 120;
  const FRAME_RATE = 60;

  // Lower if frames skip
  const RENDER_SPEED = 10;
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

    hue = p.createSlider(0, 1, parseFloat(urlParams.hue, 10), 0.01);
    hue.changed(changeURL);
    link = p.createA("?", RENDER ? "Draft" : "Render");

    changeURL();

    p.colorMode(p.HSB, 1);
    p.noFill();
    p.background(1 - hue.value(), 0.5, 0.5);
    p.blendMode(p.OVERLAY);
    p.strokeWeight(2);
    p.strokeJoin(p.ROUND);
  };

  p.draw = function () {
    const { progress, theta, noise, noise1D, noise2D } = p.animLoop;
    const loopedProgress = easeInOutCubic(
      p.sin(2 * p.PI * progress - p.PI / 2) / 2 + 0.5
    );

    // p.background(255);

    // DRAW
    p.stroke((noise1D(2) / 3 + hue.value()) % 1, 1, Math.abs(noise()), 0.01);
    p.translate(p.width / 2, p.height / 2);
    p.scale(p.lerp(0.8, 0, loopedProgress));

    const curve = [
      polarToCartesian(
        p.lerp(p.width / -2, 0, Math.abs(noise1D(0))),
        p.lerp(p.height / -2, 0, Math.abs(noise1D(1 / 8))),
        theta,
        Math.min(p.width * 0.25, p.height * 0.25) * loopedProgress
      ),
      polarToCartesian(
        p.lerp(p.width / 2, 0, Math.abs(noise1D(2 / 8))),
        p.lerp(p.height / -2, 0, Math.abs(noise1D(3 / 8))),
        theta + p.HALF_PI,
        Math.min(p.width * 0.25, p.height * 0.25) * loopedProgress
      ),
      polarToCartesian(
        p.lerp(p.width / 2, 0, Math.abs(noise1D(4 / 8))),
        p.lerp(p.height / 2, 0, Math.abs(noise1D(5 / 8))),
        theta + p.PI,
        Math.min(p.width * 0.25, p.height * 0.25) * loopedProgress
      ),
      polarToCartesian(
        p.lerp(p.width / -2, 0, Math.abs(noise1D(6 / 8))),
        p.lerp(p.height / 2, 0, Math.abs(noise1D(7 / 8))),
        theta - p.HALF_PI,
        Math.min(p.width * 0.25, p.height * 0.25) * loopedProgress
      ),
    ];

    p.beginShape();
    p.curveVertex(curve[0].x, curve[0].y);
    p.curveVertex(curve[0].x, curve[0].y);
    p.curveVertex(curve[1].x, curve[1].y);
    p.curveVertex(curve[2].x, curve[2].y);
    p.curveVertex(curve[2].x, curve[2].y);

    p.endShape();
    p.beginShape();
    p.curveVertex(curve[2].x, curve[2].y);
    p.curveVertex(curve[2].x, curve[2].y);
    p.curveVertex(curve[3].x, curve[3].y);
    p.curveVertex(curve[0].x, curve[0].y);
    p.curveVertex(curve[0].x, curve[0].y);

    p.endShape();

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
};

new p5(sketch, "sketch");
