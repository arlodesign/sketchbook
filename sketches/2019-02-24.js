/*---
description: Be patient. This is going to look like it's doing nothing for a bit.
---*/

const SIZE = 20;

let blocks = [];
let hue;
let loc = {};
let brightCount = 0;

function setup() {
  pixelDensity(4);
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent("my-canvas");

  blocks = [...Array(floor(height / SIZE)).keys()].fill(
    [...Array(floor(width / SIZE)).keys()].fill({})
  );
  hue = random(20, 80);

  background(255);
  colorMode(HSB, 100);
  noStroke();

  for (let col = 0; col < width / SIZE; col++) {
    for (let row = 0; row < height / SIZE; row++) {
      const THIS_HUE = map(
        dist(col * SIZE, row * SIZE, width, height),
        SIZE,
        dist(0, 0, width, height),
        hue - 20,
        hue + 20
      );
      const THIS_SAT = map(
        dist(col * SIZE, row * SIZE, width, height),
        SIZE,
        dist(0, 0, width, height),
        0,
        100
      );
      fill(THIS_HUE, THIS_SAT, 100);
      rect(col * SIZE, row * SIZE, SIZE, SIZE);
      blocks[row][col] = {
        clr: color(100 - THIS_HUE, 50 - THIS_SAT, 80, 10),
        visitCount: 0
      };
    }
  }

  blendMode(DODGE);
}

function draw() {
  loc = {
    row: constrain(
      floor(randomGaussian(blocks.length / 2, blocks.length / 5)),
      0,
      blocks.length - 1
    ),
    col: constrain(
      floor(randomGaussian(blocks[0].length / 2, blocks[0].length / 5)),
      0,
      blocks[0].length - 1
    )
  };

  blocks[loc.row][loc.col].visitCount++;

  const { clr, visitCount } = blocks[loc.row][loc.col];
  fill(clr);

  ellipse(
    loc.col * SIZE + SIZE / 2,
    loc.row * SIZE + SIZE / 2,
    SIZE - SIZE * 0.4,
    SIZE - SIZE * 0.4
  );

  if (visitCount === 10) {
    brightCount++;
  }

  if (brightCount === 25) {
    noLoop();
  }
}
