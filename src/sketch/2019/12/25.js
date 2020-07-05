import p5 from "p5";
import uglysweater from "assets/uglysweater.png";

const sketch = function (p) {
  let img;
  let step = 0;
  let x = 0;
  let px = [];

  p.preload = function () {
    img = p.loadImage(uglysweater);
  };

  p.setup = function () {
    p.pixelDensity(0.25);
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(255);
    p.image(img, 0, 0, p.width, p.height);

    p.loadPixels();

    for (let i = 0; i < p.pixels.length - 4; i += 4) {
      const values = p.pixels.slice(i, i + 4);
      const color = p.color(...values);
      px.push({
        values,
        lightness: p.lightness(color),
        hue: p.hue(color),
      });
    }
  };

  p.draw = function () {
    p.loadPixels();

    if (step === 0) {
      let swap = false;

      for (let i = 0; i < px.length - 1; i++) {
        if (px[i].lightness < px[i + 1].lightness) {
          const temp = px[i + 1];
          px[i + 1] = px[i];
          px[i] = temp;

          for (let j = 0; j < 4; j++) {
            p.pixels[i * 4 + j] = px[i].values[j];
            p.pixels[(i + 1) * 4 + j] = px[i + 1].values[j];
          }

          swap = true;
        }
      }

      if (!swap) step = 1;
    }

    if (step === 1) {
      let col = [];
      for (let y = 0; y < p.height; y++) {
        col.push(p.get(x, y));
      }
      col
        .sort((a, b) => {
          const hueA = p.hue(p.color(...a));
          const hueB = p.hue(p.color(...b));

          if (p.abs(hueA - hueB) < 5) {
            return p.saturation(p.color(...a)) - p.saturation(p.color(...b));
          } else {
            return hueA - hueB;
          }
        })
        .forEach((c, i) => {
          p.set(x, i, p.color(...c));
        });

      x++;

      if (x === p.width) p.noLoop();
    }

    p.updatePixels();
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
