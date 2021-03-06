import p5 from "p5";

const sketch = function (p) {
  let grid;
  let next;

  const dA = 1;
  const dB = 0.5;
  const feed = 0.055;
  const k = 0.062;
  const SEED_SIZE = 20;
  const HUE = p.random(100);

  function laplaceA(x, y) {
    var sumA = 0;
    sumA += grid[x][y].a * -1;
    sumA += grid[x - 1][y].a * 0.2;
    sumA += grid[x + 1][y].a * 0.2;
    sumA += grid[x][y + 1].a * 0.2;
    sumA += grid[x][y - 1].a * 0.2;
    sumA += grid[x - 1][y - 1].a * 0.05;
    sumA += grid[x + 1][y - 1].a * 0.05;
    sumA += grid[x + 1][y + 1].a * 0.05;
    sumA += grid[x - 1][y + 1].a * 0.05;
    return sumA;
  }

  function laplaceB(x, y) {
    var sumB = 0;
    sumB += grid[x][y].b * -1;
    sumB += grid[x - 1][y].b * 0.2;
    sumB += grid[x + 1][y].b * 0.2;
    sumB += grid[x][y + 1].b * 0.2;
    sumB += grid[x][y - 1].b * 0.2;
    sumB += grid[x - 1][y - 1].b * 0.05;
    sumB += grid[x + 1][y - 1].b * 0.05;
    sumB += grid[x + 1][y + 1].b * 0.05;
    sumB += grid[x - 1][y + 1].b * 0.05;
    return sumB;
  }

  p.setup = function () {
    p.pixelDensity(0.5);
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.colorMode(p.HSB, 100);

    grid = [];
    next = [];

    for (let x = 0; x < p.width; x++) {
      grid[x] = [];
      next[x] = [];
      for (let y = 0; y < p.height; y++) {
        grid[x][y] = {
          a: 1,
          b: 0,
        };
        next[x][y] = {
          a: 1,
          b: 0,
        };
      }
    }

    for (let q = 0; q < 100; q++) {
      let x = p.floor(p.random(1, p.width - SEED_SIZE + 1));
      let y = p.floor(p.random(1, p.height - SEED_SIZE + 1));
      for (let i = x; i < x + SEED_SIZE; i++) {
        for (let j = y; j < y + SEED_SIZE; j++) {
          grid[i][j].b = 1;
        }
      }
    }
  };

  p.draw = function () {
    p.background(HUE, 50, 0);

    for (let i = 0; i < 10; i++) {
      for (let x = 1; x < p.width - 1; x++) {
        for (let y = 1; y < p.height - 1; y++) {
          let a = grid[x][y].a;
          let b = grid[x][y].b;

          next[x][y].a = a + dA * laplaceA(x, y) - a * b * b + feed * (1 - a);
          next[x][y].b = b + dB * laplaceB(x, y) + a * b * b - (k + feed) * b;
          next[x][y].a = p.constrain(next[x][y].a, 0, 1);
          next[x][y].b = p.constrain(next[x][y].b, 0, 1);
        }
      }
      const temp = grid;
      grid = next;
      next = temp;
    }

    p.loadPixels();
    for (let x = 0; x < p.width; x++) {
      for (let y = 0; y < p.height; y++) {
        const PIX = (x + y * p.width) * 4;
        const { a, b } = next[x][y];

        let c = p.floor((a - b) * 100);
        c = p.map((c * c) / 100, 50, 100, 25, 75, true);

        p.pixels[PIX + 0] = p.red(p.color(HUE, 50, c));
        p.pixels[PIX + 1] = p.green(p.color(HUE, 50, c));
        p.pixels[PIX + 2] = p.blue(p.color(HUE, 50, c));
        p.pixels[PIX + 3] = 255;
      }
    }
    p.updatePixels();
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
document.getElementById("description").innerHTML = `
Experimenting with 
  <a href="https://github.com/CodingTrain/website/blob/master/CodingChallenges/CC_013_ReactionDiffusion/P5/sketch.js">
    Reaction Diffusion
  </a>. This runs <em>slow</em>.
`;
