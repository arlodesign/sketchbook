import p5 from "p5";
import santa from "assets/santa.png";

const sketch = function (p) {
  let img;

  p.preload = function () {
    img = p.loadImage(santa);
  };

  p.setup = function () {
    p.pixelDensity(1);

    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(255);

    p.image(img, 0, 0, p.width, p.height);
  };

  p.draw = function () {
    if (p.frameCount < p.width) {
      let col = [];
      for (let y = 0; y < p.height; y++) {
        col.push(p.get(p.frameCount - 1, y));
      }
      col
        .sort((a, b) => p.hue(p.color(...a)) - p.hue(p.color(...b)))
        .forEach((c, i) => {
          p.set(p.frameCount - 1, i, p.color(...c));
        });
    } else if (p.frameCount >= p.width && p.frameCount < p.height + p.width) {
      let row = [];
      for (let x = 0; x < p.width; x++) {
        row.push(p.get(x, p.frameCount - 1 - p.width));
      }
      row
        .sort(
          (a, b) => p.saturation(p.color(...a)) - p.saturation(p.color(...b))
        )
        .forEach((c, i) => {
          p.set(i, p.frameCount - 1 - p.width, p.color(...c));
        });
    } else {
      p.noLoop();
    }
    p.updatePixels();
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
