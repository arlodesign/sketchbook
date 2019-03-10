import React from "react";
import SketchLayout from "~components/sketch-layout";

const sketch = function(p) {
  const SIZE = 20;

  let blocks = [];
  let hue;
  let loc = {};
  let brightCount = 0;

  p.setup = function() {
    p.createCanvas(660, 840);

    const ROWS = p.floor(p.height / SIZE);
    const COLS = p.floor(p.width / SIZE);

    blocks = Array.from({ length: ROWS }, () =>
      Array.from({ length: COLS }, () => ({}))
    );

    hue = p.random(20, 80);

    p.background(255);
    p.colorMode(p.HSB, 100);
    p.noStroke();

    for (let col = 0; col < p.width / SIZE; col++) {
      for (let row = 0; row < p.height / SIZE; row++) {
        const THIS_HUE = p.map(
          p.dist(col * SIZE, row * SIZE, p.width, p.height),
          SIZE,
          p.dist(0, 0, p.width, p.height),
          hue - 20,
          hue + 20
        );
        const THIS_SAT = p.map(
          p.dist(col * SIZE, row * SIZE, p.width, p.height),
          SIZE,
          p.dist(0, 0, p.width, p.height),
          0,
          100
        );
        p.fill(THIS_HUE, THIS_SAT, 100);
        p.rect(col * SIZE, row * SIZE, SIZE, SIZE);
        blocks[row][col] = {
          clr: p.color(100 - THIS_HUE, 50 - THIS_SAT, 80, 10),
          visitCount: 0,
        };
      }
    }

    p.blendMode(p.DODGE);
  };

  p.draw = function() {
    loc = {
      row: p.constrain(
        p.floor(p.randomGaussian(blocks.length / 2, blocks.length / 5)),
        0,
        blocks.length - 1
      ),
      col: p.constrain(
        p.floor(p.randomGaussian(blocks[0].length / 2, blocks[0].length / 5)),
        0,
        blocks[0].length - 1
      ),
    };

    blocks[loc.row][loc.col].visitCount++;

    const { clr, visitCount } = blocks[loc.row][loc.col];
    p.fill(clr);

    p.ellipse(
      loc.col * SIZE + SIZE / 2,
      loc.row * SIZE + SIZE / 2,
      SIZE - SIZE * 0.4,
      SIZE - SIZE * 0.4
    );

    if (visitCount === 10) {
      brightCount++;
    }

    if (brightCount === 25) {
      p.noLoop();
    }
  };
};

export default ({ location }) => (
  <SketchLayout
    sketch={sketch}
    path={location.pathname}
    description="Be patient. This is going to look like it's doing nothing for a bit."
  />
);
