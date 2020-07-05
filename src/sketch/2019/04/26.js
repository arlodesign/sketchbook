import p5 from "p5";
import susan from "assets/susan.png";

const sketch = function (p) {
  const BLEND_MODE = p.random([
    p.BLEND,
    p.DARKEST,
    p.LIGHTEST,
    p.DIFFERENCE,
    p.MULTIPLY,
    p.EXCLUSION,
    p.SCREEN,
    p.OVERLAY,
    p.HARD_LIGHT,
    p.DODGE,
    p.BURN,
    p.ADD,
  ]);
  console.log(BLEND_MODE);

  let grid;
  let img;

  p.preload = function () {
    img = p.loadImage(susan);
  };

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    grid = p.width / 3;
  };

  p.draw = function () {
    p.background(img);

    for (let y = 0; y < p.height / grid; y++) {
      for (let x = 0; x < p.width / grid; x++) {
        const source = { x: parseInt(x * grid, 10), y: parseInt(y * grid, 10) };
        const destination = {
          x: parseInt(x * grid, 10),
          y: parseInt(
            y * grid +
              p.sin(p.frameCount / 50 + (x + 1) * (y + 1)) * (grid / 2),
            10
          ),
        };
        p.blend(
          img,
          source.x,
          source.y,
          grid,
          grid,
          destination.x,
          destination.y,
          grid,
          grid,
          BLEND_MODE
        );
      }
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
document.getElementById("description").innerHTML = `
        Spent some time with 
        <Link href="https://timrodenbroeker.de/processing-tutorial-kinetic-typography-1/">
          this tutorial
        </Link>
        . Reload page for different variations.
      `;
