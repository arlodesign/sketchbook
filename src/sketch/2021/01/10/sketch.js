import p5 from "p5";
import "p5.createloop";
import { getLineBy3Points } from "get-parabola";
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
  let startLength;
  let treeStep;
  let treeScale;
  let treeWidth;
  let link;
  let button;
  let branchSize;
  let windIntensity;

  let branches = [];
  function branch(x1, y1, angle, length, n) {
    if (y1 < 0) {
      return;
    }
    const { x, y } = polarToCartesian(x1, y1, angle, length);
    if (n > 0 && y > 0) {
      branches.push({
        x1,
        y1,
        x2: x,
        y2: y,
      });
      branch(
        x,
        y,
        p.random(p.PI + treeWidth.value(), p.HALF_PI + p.PI),
        p.random(p.height / 10, length * treeScale.value()),
        n - 1
      );
      branch(
        x,
        y,
        p.random(p.HALF_PI + p.PI, p.TWO_PI - treeWidth.value()),
        p.random(p.height / 10, length * treeScale.value()),
        n - 1
      );
    }
  }

  function changeURL() {
    const searchParams = {
      startLength: startLength.value(),
      treeStep: treeStep.value(),
      treeScale: treeScale.value(),
      treeWidth: treeWidth.value(),
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

    branches = [];
    branch(
      p.width / 2,
      p.height,
      p.PI + p.HALF_PI,
      p.height * startLength.value(),
      treeStep.value()
    );
  }

  function offset(x, y) {
    const noiseVal = p.animLoop.noise2D(x / 1000, y / 1000);
    const d = noiseVal * (p.width / 2);
    const i = windIntensity(y / p.height);
    return d * i;
  }

  p.setup = function () {
    p.frameRate(RATE);
    p.pixelDensity(1);
    p.createCanvas(
      RENDER ? RENDER_SIZE : p.windowWidth,
      RENDER ? RENDER_SIZE : p.windowHeight
    );
    p.createLoop(DURATION, {
      noiseRadius: 0.8,
    });
    p.colorMode(p.HSB, 1);
    if (!RENDER) {
      p.noSmooth();
    }
    p.ellipseMode(p.CENTER);

    urlParams = Object.assign(
      {
        startLength: p.random(),
        treeStep: ~~p.random(2, 20),
        treeScale: p.random(0.01, 1),
        treeWidth: p.random(0, p.HALF_PI),
      },
      p.getURLParams()
    );

    startLength = p.createSlider(
      0,
      1,
      parseFloat(urlParams.startLength, 10),
      0.01
    );
    startLength.changed(changeURL);
    treeStep = p.createSlider(2, 20, parseFloat(urlParams.treeStep, 10), 1);
    treeStep.changed(changeURL);
    treeScale = p.createSlider(
      0.01,
      1,
      parseFloat(urlParams.treeScale, 10),
      0.01
    );
    treeScale.changed(changeURL);
    treeWidth = p.createSlider(
      0,
      p.HALF_PI,
      parseFloat(urlParams.treeWidth, 10),
      0.01
    );
    treeWidth.changed(changeURL);
    button = p.createButton("Random");
    button.mousePressed(() => {
      startLength.value(p.random());
      treeStep.value(~~p.random(2, 20));
      treeScale.value(p.random(0.01, 1));
      treeWidth.value(p.random(0, p.HALF_PI));
      changeURL();
    });
    link = p.createA("?", RENDER ? "Draft" : "Render");
    changeURL();

    branchSize = getLineBy3Points([
      {
        x: 0,
        y: 15,
      },
      {
        x: 0.5,
        y: 7,
      },
      {
        x: 1,
        y: 0.5,
      },
    ]);

    windIntensity = getLineBy3Points([
      {
        x: 0,
        y: 1,
      },
      {
        x: 0.5,
        y: 0.25,
      },
      {
        x: 1,
        y: 0,
      },
    ]);

    branch(
      p.width / 2,
      p.height,
      p.PI + p.HALF_PI,
      p.height * startLength.value(),
      treeStep.value()
    );
  };

  p.draw = function () {
    const { progress } = p.animLoop;
    p.blendMode(p.BLEND);
    p.background(0.6, 0, 1);
    p.blendMode(p.DARKEST);

    branches.forEach(({ x1, y1, x2, y2 }, i) => {
      p.stroke(
        p.lerpColor(
          p.color(0.5, 0.6, 0.8),
          p.color(0.5, 0.6, 0.1),
          y1 / p.height
        )
      );
      p.strokeWeight(branchSize((p.height - y1) / p.height));
      p.line(x1 + offset(x1, y1), y1, x2 + offset(x2, y2), y2);
    });
    p.noStroke();

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
).innerHTML = `<a href="https://genuary2021.github.io/">#genuary2021</a>: // TREE`;
