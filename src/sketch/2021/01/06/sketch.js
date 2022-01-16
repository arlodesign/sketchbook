import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();
import { fromThreePoints } from "circle.js";
import polarToCartesian from "util/polarToCartesian";
import { easeInOutQuart, easeInOutQuad } from "util/easing";

const sketch = function (p) {
  const RENDER = p.getURLParams().render === "true";
  const RENDER_SIZE = 1080;
  const TIME = 30;
  const FRAME_RATE = 60;

  const RENDER_SPEED = 5;
  const DURATION = TIME * (RENDER ? ~~(FRAME_RATE / RENDER_SPEED) : 1);
  const RATE = RENDER ? RENDER_SPEED : FRAME_RATE;
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
      RENDER ? RENDER_SIZE : p.windowWidth,
      RENDER ? RENDER_SIZE : p.windowHeight
    );
    p.createLoop(DURATION, {
      noiseRadius: 0.3,
    });
    p.colorMode(p.HSB, 1);
    p.ellipseMode(p.CENTER);
    !RENDER && p.noSmooth();

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
  };

  p.draw = function () {
    const { progress, theta, noise1D, noise2D } = p.animLoop;
    const loopedProgress = p.sin(2 * p.PI * progress - p.PI / 2) / 2 + 0.5;

    p.blendMode(p.BLEND);
    p.background(hue.value(), 1, 0.5);
    p.blendMode(p.DIFFERENCE);
    p.translate(p.width / 2, p.height / 2);
    p.rotate(theta);
    p.fill(255);

    let pointsA = [];
    let pointsB = [];
    let pointsC = [];

    p.beginShape();
    for (let i = 0; i < 3; i++) {
      const aNoise = noise1D(i + 1) * easeInOutQuad(loopedProgress);
      const dNoise = noise1D(i + 10) * easeInOutQuad(loopedProgress);
      const a = aNoise * p.QUARTER_PI + (p.TWO_PI / 3) * i;
      const d = p.map(dNoise, -1, 1, p.width / 3, p.width / 2);
      const { x, y } = polarToCartesian(0, 0, a, d);
      p.vertex(x, y);
      pointsA.push({ x, y });
    }
    p.endShape(p.CLOSE);

    for (let i = 0; i < 3; i++) {
      const lerpVal =
        easeInOutQuart(
          p.map(
            noise2D(
              pointsA[i].x / (100 * (i + 1)),
              pointsA[i].y / (100 * (i + 1))
            ),
            -1,
            1,
            0,
            1
          )
        ) * loopedProgress;

      pointsB.push({
        x: p.lerp(pointsA[i].x, pointsA[i + 1 === 3 ? 0 : i + 1].x, lerpVal),
        y: p.lerp(pointsA[i].y, pointsA[i + 1 === 3 ? 0 : i + 1].y, lerpVal),
      });
    }
    p.beginShape();
    pointsB.forEach(({ x, y }) => p.vertex(x, y));
    p.endShape(p.CLOSE);

    for (let i = 0; i < 3; i++) {
      pointsC.push({
        x: p.lerp(pointsB[i].x, pointsB[i + 1 === 3 ? 0 : i + 1].x, progress),
        y: p.lerp(pointsB[i].y, pointsB[i + 1 === 3 ? 0 : i + 1].y, progress),
      });
    }
    p.beginShape();
    pointsC.forEach(({ x, y }) => p.vertex(x, y));
    p.endShape(p.CLOSE);

    const c1 = fromThreePoints(...pointsA);
    const c2 = fromThreePoints(...pointsB);
    const c3 = fromThreePoints(...pointsC);
    p.circle(c1.x, c1.y, c1.r * 2);
    p.circle(c2.x, c2.y, c2.r * 2);
    p.circle(c3.x, c3.y, c3.r * 2);

    if (RENDER && p.frameCount <= FRAMES) {
      p.frameCount % 100 === 0 && console.info(`${p.ceil(progress * 100)}%`);
      p.save(
        `${String(p.frameCount).padStart(String(FRAMES).length, "0")}.png`
      );
    }
  };

  p.windowResized = function () {
    !RENDER && p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
document.getElementById(
  "description"
).innerHTML = `<a href="https://genuary2021.github.io/">#genuary2021</a>: Triangle Subdivision`;
