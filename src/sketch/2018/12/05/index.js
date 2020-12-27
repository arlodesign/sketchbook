import p5 from "p5";
import susan from "assets/susan.png";

const sketch = function (p) {
  const tileSize = 60;
  let img;

  p.preload = function () {
    img = p.loadImage(susan);
  };

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
  };

  p.draw = function () {
    p.background(img);
    const scale = p.map(p.mouseX, 0, p.width, 0, tileSize);
    for (let x = 0; x < p.width + 0; x += tileSize) {
      for (let y = 0; y < p.height + 0; y += tileSize) {
        const noiseVal = p.noise(x, y) * scale;
        p.blend(
          img,
          p.floor(x),
          p.floor(y),
          tileSize,
          tileSize,
          p.floor(x - noiseVal),
          p.floor(y - noiseVal),
          tileSize + noiseVal * 2,
          tileSize + noiseVal * 2,
          p.MULTIPLY
        );
      }
    }
  };

  p.touchMoved = function () {
    if (
      p.mouseX >= 0 &&
      p.mouseY >= 0 &&
      p.mouseX <= p.width &&
      p.mouseY <= p.height
    ) {
      return false;
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
document.getElementById("description").innerHTML =
  "Move pointer or finger over sketch.";
