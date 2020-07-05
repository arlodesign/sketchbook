import p5 from "p5";
import shuffle from "util/shuffle";

const sketch = function (p) {
  const HUE = p.random(100);
  const RULES = {
    "111": p.random([0, 1]),
    "110": p.random([0, 1]),
    "101": p.random([0, 1]),
    "100": p.random([0, 1]),
    "011": p.random([0, 1]),
    "010": p.random([0, 1]),
    "001": p.random([0, 1]),
    "000": p.random([0, 1]),
  };
  const GRID_SIZE = 10;
  const ROTATIONS = shuffle([0, p.HALF_PI, p.PI, p.HALF_PI + p.PI]);

  let cellCount = 0;
  let width;
  let height;

  class Row {
    constructor() {
      this.cells = Array.from({ length: p.floor(width / GRID_SIZE) }, () => 0);
      this.cells[0] = 1;
      this.cells[this.cells.length - 1] = 1;
      this.cells[p.floor(this.cells.length / 3)] = 1;
      this.cells[p.floor(this.cells.length * (2 / 3))] = 1;
    }
    draw(y) {
      this.cells.forEach((c, i) => {
        console.log(c, i * GRID_SIZE, this.y);
        p.fill(c ? p.color(HUE, 100, 50) : p.color(HUE, 100, 25));
        p.push();
        p.translate(
          i * GRID_SIZE + GRID_SIZE / 2,
          y * GRID_SIZE + GRID_SIZE / 2
        );
        p.rotate(ROTATIONS[cellCount % 4]);
        p.triangle(
          -GRID_SIZE / 2,
          -GRID_SIZE / 2,
          GRID_SIZE / 2,
          GRID_SIZE / 2,
          -GRID_SIZE / 2,
          GRID_SIZE / 2
        );
        p.pop();
        cellCount++;
      });
    }
    update() {
      let newState = [];
      this.cells.forEach((c, i) => {
        let str = i === 0 ? "0" : String(this.cells[i - 1]);
        str += String(this.cells[i]);
        str += i === this.cells.length - 1 ? "0" : String(this.cells[i + 1]);
        newState.push(RULES[str]);
      });
      this.cells = newState;
    }
  }

  const row = new Row();

  p.setup = function () {
    width = p.windowWidth;
    height = p.windowHeight;
    p.createCanvas(width, height);
    p.colorMode(p.HSL, 75);
    p.background(HUE, 100, 33);
    p.noStroke();
  };

  p.draw = function () {
    row.draw(p.frameCount - 1);
    row.update();
    p.frameCount * GRID_SIZE > height && p.noLoop();
  };

  p.windowResized = function () {
    width = p.windowWidth;
    height = p.windowHeight;
    p.resizeCanvas(width, height);
  };
};

new p5(sketch, "sketch");
const description =
  "Continuing to explore randomly generated cellular automata.";
