import p5 from "p5";
import polarToCartesian from "util/polarToCartesian";

const sketch = function (p) {
  const FRAMES = 30;
  const HUE = p.random(0, 50);

  let size;

  const ease = function (v, g) {
    return v < 0.5 ? 0.5 * p.pow(2 * v, g) : 1 - 0.5 * p.pow(2 * (1 - v), g);
  };

  const offset = function (x, y) {
    return (
      size *
      p.dist(x, y, p.width / 2, p.height / 2) *
      p.noise(size * x, size * y)
    );
  };

  const pixelColor = function (x, y, t) {
    const result = ease(
      p.map(p.sin(p.TWO_PI * (t + offset(x, y))), -1, 1, 0, 1),
      5
    );
    return p.color(HUE * result, (80 * result) / 2, 100 * result);
  };

  p.setup = function () {
    const PIXEL_DENSITY = 10;
    p.createCanvas(
      p.floor(p.windowWidth / PIXEL_DENSITY),
      p.floor(p.windowHeight / PIXEL_DENSITY)
    );
    p.pixelDensity(PIXEL_DENSITY);

    p.colorMode(p.HSB, 100);
    p.blendMode(p.HARD_LIGHT);
    p.rectMode(p.CENTER);

    p.fill(HUE + 50, 80, 100, 50);
    size = p.TWO_PI / p.height;
  };

  p.draw = function () {
    p.background(0);
    let t = ((1.0 * (p.frameCount - 1)) % FRAMES) / FRAMES;
    for (let x = 0; x < p.width; x++) {
      for (let y = 0; y < p.height; y++) {
        p.stroke(pixelColor(x, y, t));
        p.point(x, y);
      }
    }
    p.noStroke();
    p.rect(p.width / 2, p.height / 2, p.width * 0.75, p.width * 0.75);
  };

  p.windowResized = function () {
    p.resizeCanvas(
      p.floor(p.windowWidth / PIXEL_DENSITY),
      p.floor(p.windowHeight / PIXEL_DENSITY)
    );
  };
};

new p5(sketch, "sketch");
document.getElementById("description").innerHTML = `
Time well spent playing with
<a href="https://necessarydisorder.wordpress.com/2017/09/02/animated-stripes-gifs-from-scalar-fields/">
  this tutorial
</a>`;
