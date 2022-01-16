import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();

const sketch = function (p) {
  const draftScale = (x) => (RENDER ? x : p.floor(x / 2));

  const RENDER = p.getURLParams().render;
  const RENDER_SIZE = draftScale(1080);
  const DURATION = 30;
  const RATE = 60;
  const HUMPS = 20;
  const HUE = p.random();

  let margin;
  let inc;

  p.setup = function () {
    p.frameRate(RATE);
    p.createCanvas(RENDER_SIZE, RENDER_SIZE);
    p.noSmooth();
    p.createLoop(DURATION, {
      noiseRadius: 0.5,
    });
    p.colorMode(p.HSB, 1);

    margin = p.width / 10;
    inc = (p.width - margin * 2) / HUMPS;
  };

  p.draw = function () {
    const { progress, noise1D, noise2D } = p.animLoop;

    p.background(HUE, 1, 0.1);
    p.noStroke();

    [
      [(HUE + 0.5) % 1, 1, 1],
      [0, 0, 1],
      [HUE, 1, 0.5],
    ].forEach((c, i) => {
      p.fill(...c);
      for (let y = margin; y <= p.height - margin; y += 3) {
        const xMargin =
          margin + (margin / 2) * p.abs(noise1D(y / draftScale(500 * (i + 1))));

        p.beginShape();
        p.curveVertex(margin, y);
        for (let x = xMargin; x <= p.width - xMargin; x += inc) {
          p.curveVertex(
            x,
            y +
              noise2D(
                x / draftScale(1000 * (i + 1)),
                y / draftScale(1000 * (i + 1))
              ) *
                1.5
          );
        }
        for (let x = p.width - xMargin; x >= xMargin; x -= inc) {
          p.curveVertex(
            x,
            y -
              noise2D(
                x / draftScale(1000 * (i + 1)),
                y / draftScale(1000 * (i + 1))
              ) *
                1.5
          );
        }
        p.curveVertex(margin, y);
        p.endShape(p.CLOSE);
      }
    });

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
