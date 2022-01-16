import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();
import polarToCartesian from "util/polarToCartesian";

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const RENDER_SIZE = 1080;
  const RATE = 30;
  const DURATION = 60;

  let urlParams;
  let lines;
  let inner;
  let outer;
  let noisiness;
  let link;

  p.setup = function () {
    p.pixelDensity(1);
    p.frameRate(RENDER ? 1 : RATE);
    p.createCanvas(
      RENDER ? RENDER_SIZE : p.windowWidth,
      RENDER ? RENDER_SIZE : p.windowHeight
    );
    p.noSmooth();
    p.createLoop(RENDER ? DURATION * RATE : DURATION);
    p.colorMode(p.HSB, p.TWO_PI, 2, 2, 2);

    urlParams = Object.assign(
      {
        lines: 100,
        inner: 0.3,
        outer: 0.5,
        noisiness: 1,
      },
      p.getURLParams()
    );

    lines = p.createSlider(3, 200, parseFloat(urlParams.lines, 10));
    inner = p.createSlider(0, 1, parseFloat(urlParams.inner, 10), 0.01);
    outer = p.createSlider(0, 1, parseFloat(urlParams.outer, 10), 0.01);
    noisiness = p.createSlider(
      0.1,
      3,
      parseFloat(urlParams.noisiness, 10),
      0.01
    );
    link = p.createA("?", "Render");
  };

  p.draw = function () {
    const { progress, theta, noise1D, noiseRadius } = p.animLoop;
    p.blendMode(p.BLEND);
    p.background(0);
    p.noFill();
    p.strokeWeight(2);

    noiseRadius(noisiness.value());

    for (let i = 0; i < lines.value(); i++) {
      const a = (p.TWO_PI / lines.value()) * i + theta;

      for (let j = 0; j <= 2; j++) {
        const angle = a + theta * j;
        p.stroke(a % p.TWO_PI, 2 - j, 2, 1);

        const point1 = polarToCartesian(
          p.width / 2,
          p.height / 2,
          angle,
          (p.width / 2) * inner.value(),
          true
        );
        const point2 = polarToCartesian(
          p.width / 2,
          p.height / 2,
          angle,
          (p.width / 2) * outer.value(),
          true
        );
        const midpoint = polarToCartesian(
          p.width / 2,
          p.height / 2,
          angle + (p.TWO_PI / lines.value()) * noise1D(i),
          (p.width / 2) * ((inner.value() + outer.value()) / 2),
          true
        );
        p.beginShape();
        p.curveVertex(...point1);
        p.curveVertex(...point1);
        p.curveVertex(...midpoint);
        p.curveVertex(...point2);
        p.curveVertex(...point2);
        p.endShape();
      }
    }

    link.attribute(
      "href",
      "?" +
        new URLSearchParams({
          lines: lines.value(),
          inner: inner.value(),
          outer: outer.value(),
          noisiness: noisiness.value(),
          render: true,
        }).toString()
    );

    if (RENDER && p.frameCount <= DURATION * RATE) {
      p.frameCount % 100 === 0 && console.info(`${p.floor(progress * 100)}%`);
      p.save(
        `${String(p.frameCount).padStart(
          String(DURATION * RATE).length,
          "0"
        )}.png`
      );
    }
  };
};

new p5(sketch, "sketch");
