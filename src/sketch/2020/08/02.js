import p5 from "p5";
import "p5.createloop";
import { easeInOutQuart, easeInQuad } from "util/easing";

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const DURATION = 40;
  const RATE = 30;
  const COLUMNS = 11;

  /**
   * Like lerpColor(), but for multiple colors
   * @param {Number} amt number between 0 and 1
   * @param {p5.Color} stops colors to use in the gradient
   */
  function lerpGradient(amt, ...stops) {
    const firstStop =
      amt === 1 ? stops.length - 2 : p.floor(amt * (stops.length - 1));

    const lerpColorAmt = p.map(
      amt,
      firstStop / (stops.length - 1),
      (firstStop + 1) / (stops.length - 1),
      0,
      1,
      true
    );

    return p.lerpColor(stops[firstStop], stops[firstStop + 1], lerpColorAmt);
  }

  p.setup = function () {
    p.pixelDensity(1);
    p.frameRate(RATE);
    p.createCanvas(360, 360);
    p.background(255);
    p.noSmooth();
    p.createLoop(DURATION, {
      noiseRadius: 1.2,
    });
  };

  p.draw = function () {
    const { noise2D } = p.animLoop;

    p.loadPixels();

    for (let x = 0; x < p.width; x++) {
      for (let y = 0; y < p.height; y++) {
        const index = (x + y * p.width) * 4;
        const column = p.floor((x / p.height) * COLUMNS) + COLUMNS;

        let c = lerpGradient(
          easeInOutQuart(
            p.abs(
              noise2D(
                x / 50,
                (y / (column * COLUMNS * 500)) *
                  p.dist(x, y, p.width / 2, p.height * 2)
              )
            )
          ),
          p.color(255, 235, 188),
          p.color(253, 249, 221),
          p.color(209, 156, 40),
          p.color(246, 232, 92),
          p.color(0, 0, 20),
          p.color(0, 0, 20),
          p.color(1, 85, 121),
          p.color(71, 150, 206),
          p.color(191, 212, 226)
        );

        c = p.lerpColor(
          c,
          p.color(0, 0, 20),
          easeInQuad(
            p.dist(x, y, p.width / 2, p.height / 2) /
              p.dist(0, 0, p.width / 2, p.height / 2)
          )
        );

        p.pixels[index] = p.red(c);
        p.pixels[index + 1] = p.green(c);
        p.pixels[index + 2] = p.blue(c);
        p.pixels[index + 3] = 255;
      }
    }

    p.updatePixels();

    RENDER &&
      p.frameCount <= DURATION * RATE &&
      p.save(
        `${String(p.frameCount).padStart(
          String(DURATION * RATE).length,
          "0"
        )}.png`
      );
  };
};

new p5(sketch, "sketch");
