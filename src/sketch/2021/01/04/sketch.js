import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();
import { easeInOutCubic } from "util/easing";

const sketch = function (p) {
  const RENDER = p.getURLParams().render === "true";
  const RENDER_SIZE = 1080;
  const TIME = 20;
  const FRAME_RATE = 60;
  const RENDER_SPEED = 3;

  const DURATION = ~~(TIME * (RENDER ? FRAME_RATE / RENDER_SPEED : 1));
  const RATE = RENDER ? RENDER_SPEED : FRAME_RATE;
  const FRAMES = DURATION * RATE;

  let urlParams;
  let leaves;
  let shapePoints;
  let link;

  function changeURL() {
    const searchParams = {
      leaves: leaves.value(),
      shapePoints: shapePoints.value(),
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
    p.background(255);
    p.createLoop(DURATION, {
      noiseRadius: 0.5,
    });

    p.colorMode(p.HSB, 1);

    urlParams = Object.assign(
      {
        leaves: ~~p.random(3, 20),
        shapePoints: ~~p.random(3, 50),
      },
      p.getURLParams()
    );

    if (!RENDER) {
      p.noSmooth();
    }

    leaves = p.createSlider(3, 20, parseFloat(urlParams.leaves, 10), 1);
    leaves.attribute("title", "leaves");
    leaves.changed(changeURL);
    shapePoints = p.createSlider(
      3,
      50,
      parseFloat(urlParams.shapePoints, 10),
      1
    );
    shapePoints.attribute("title", "shapePoints");
    shapePoints.changed(changeURL);
    link = p.createA("?", RENDER ? "Draft" : "Render");

    changeURL();
  };

  p.draw = function () {
    const { progress, theta, noise, noise1D, noise2D } = p.animLoop;
    const loopedProgress = p.sin(2 * p.PI * progress - p.PI / 2) / 2 + 0.5;

    p.blendMode(p.BLEND);
    p.background(255);
    p.blendMode(p.MULTIPLY);

    ["cyan", "magenta", "yellow"].forEach((clr, c) => {
      p.fill(clr);

      for (let i = 0; i < leaves.value(); i++) {
        p.push();
        p.translate(p.width / 2, p.height / 2);
        p.scale(0.9);
        const angle =
          i * (p.TWO_PI / leaves.value()) + (p.TWO_PI / leaves.value() / 3) * c;
        p.rotate(angle);
        p.noStroke();
        p.beginShape();
        const points = [];
        for (let j = 0; j < shapePoints.value(); j++) {
          const y =
            (j * p.height) / 2 / shapePoints.value() +
            p.height / 2 / shapePoints.value() / 2 +
            noise2D(i, j) * (p.height / 2 / shapePoints.value() / 2);
          const x =
            easeInOutCubic(p.abs(noise2D(j / 10, p.sin(angle)))) *
              (p.width / leaves.value()) +
            1;
          p.curveVertex(x, y);
          points.push([x, y]);
        }
        points.reverse().forEach(([x, y]) => p.curveVertex(-x, y));
        p.curveVertex(...points[points.length - 1]);
        p.curveVertex(...points[points.length - 2]);
        p.curveVertex(...points[points.length - 3]);
        p.endShape();
        p.pop();
      }
    });

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
).innerHTML = `<a href="https://genuary2021.github.io/">#genuary2021</a>: Small areas of symmetry`;
