import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();

const sketch = function (p) {
  const RENDER = p.getURLParams().render === "true";

  let grid = [];
  let pos = [];

  let urlParams;
  let dice;

  /**
   * 0 1 2
   * 7 + 3
   * 6 5 4
   */
  let directions = [
    [-1, -1],
    [0, -1],
    [1, -1],
    [1, 0],
    [1, 1],
    [0, 1],
    [-1, 1],
    [-1, 0],
  ];
  let dir = ~~p.random(8);

  function resetGrid() {
    for (let x = 0; x < p.width / 10; x++) {
      for (let y = 0; y < p.height / 10; y++) {
        grid[x] = grid[x] || [];
        grid[x][y] = false;
      }
    }
    pos = [~~(p.width / 10) / 2, ~~(p.width / 10) / 2];

    p.blendMode(p.BLEND);
    p.background(255);
    p.blendMode(p.MULTIPLY);
  }

  function changeURL() {
    window.history.replaceState(
      null,
      document.title,
      "?" +
        new URLSearchParams({
          dice: dice.value(),
        }).toString()
    );
  }

  let getSteps = () => p.ceil(p.random(parseInt(dice.value(), 10)));

  p.setup = function () {
    p.createCanvas(1080 * 2, 1080 * 2);
    p.stroke(0, 64);
    RENDER && p.frameRate(1);
    resetGrid();

    urlParams = Object.assign(
      {
        dice: String(p.random([4, 6, 8, 10, 12, 20])),
      },
      p.getURLParams()
    );
    dice = p.createSelect();
    [4, 6, 8, 10, 12, 20].forEach((d) => dice.option(String(d)));
    dice.selected(urlParams.dice);
    dice.changed(() => {
      changeURL();
      resetGrid();
      p.loop();
    });
  };

  p.draw = function () {
    try {
      let newPos = [];

      if (grid[pos[0]][pos[1]]) {
        const steps = getSteps();
        dir -= 2;
        if (dir < 0) {
          dir = dir + directions.length;
        }
        newPos = pos.map((n, i) => n + directions[dir][i]);
        for (let i = 0; i < steps; i++) {
          grid[newPos[0]][newPos[1]] = true;
          newPos = newPos.map((n, i) => n + directions[dir][i]);
        }
      } else {
        dir = (dir + 1) % directions.length;
        newPos = pos.map((n, i) => n + directions[dir][i]);
      }

      p.line(pos[0] * 10, pos[1] * 10, newPos[0] * 10, newPos[1] * 10);

      if (typeof grid[newPos[0]][newPos[1]] === "undefined") {
        p.noLoop();
      } else {
        grid[pos[0]][pos[1]] = true;
        pos = newPos;
      }

      if (RENDER) {
        p.save(`${String(p.frameCount).padStart(4, "0")}.png`);
      }
    } catch (error) {
      window.alert(
        "Complete. Reload page or change dice size for new composition."
      );
      p.noLoop();
    }
  };
};

new p5(sketch, "sketch");
document.getElementById(
  "description"
).innerHTML = `<a href="https://genuary2021.github.io/">#genuary2021</a>: Generate some rules, then follow them by hand <a href="https://www.instagram.com/p/CJw5vwPHtlO/">on paper</a>.`;
