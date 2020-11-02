import p5 from "p5";
import trump from "assets/trump.png";

const sketch = function (p) {
  const RENDER = p.getURLParams().render;

  const luma = {
    fn: (r, g, b) => r * 0.2126 + g * 0.7152 + b * 0.0722,
    max: 255,
    diff: 3,
  };
  const addRGB = { fn: (r, g, b) => r + g + b, max: 255 * 3, diff: 2 };
  const saturation = {
    fn: (r, g, b) => p.saturation(p.color(r, g, b)),
    max: 255,
    diff: 7,
  };
  const brightness = {
    fn: (r, g, b) => p.brightness(p.color(r, g, b)),
    max: 255,
    diff: 5,
  };
  const lightness = {
    fn: (r, g, b) => p.lightness(p.color(r, g, b)),
    max: 255,
    diff: 7,
  };
  const red = { fn: (r, g, b) => r, max: 255, diff: 3 };
  const green = { fn: (r, g, b) => g, max: 255, diff: 3 };
  const blue = { fn: (r, g, b) => b, max: 255, diff: 3 };

  const { fn, max, diff } = p.random([
    luma,
    addRGB,
    saturation,
    brightness,
    lightness,
    red,
    green,
    blue,
  ]);
  let img;

  function comparison() {
    return fn(...arguments);
  }

  function x() {
    return (p.frameCount - 1) % p.width;
  }

  function sort(start, stop = p.height) {
    let col = [];
    for (let y = start; y < stop; y++) {
      col.push(p.get(x(), y));
    }
    col
      .sort((a, b) => comparison(...b) - comparison(...a))
      .forEach((c, i) => {
        p.set(x(), i + start, p.color(...c));
      });
  }

  p.preload = function () {
    img = p.loadImage(trump);
  };

  p.setup = function () {
    p.createCanvas(1024, 1024);
    p.frameRate(RENDER ? 2 : 30);

    p.background(255);
    p.image(img, 0, 0, p.width, p.height);
  };

  p.draw = function () {
    p.loadPixels();

    let compVal = comparison(...p.get(x(), 0));
    let start = 0;

    for (let y = 0; y < p.height; y++) {
      const newCompVal = comparison(...p.get(x(), y));
      if (p.abs(compVal - newCompVal) > max / diff) {
        sort(start, y);
        compVal = newCompVal;
        start = y;
      }
    }
    sort(start, p.height);
    p.updatePixels();

    if (RENDER) {
      p.save(
        `${String(p.frameCount).padStart(String(p.width).length, "0")}.png`
      );
    }

    if (p.frameCount === p.width) {
      p.noLoop();
    }
  };
};

new p5(sketch, "sketch");
