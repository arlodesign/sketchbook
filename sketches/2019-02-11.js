/*---
description: 
---*/

const colorFunctions = [
  angle => abs(sin(angle)) * 240,
  angle => abs(cos(angle)) * 240,
  angle => abs(tan(angle)) * 240,
  angle => abs(sin(angle + HALF_PI)) * 240,
  angle => abs(cos(angle + HALF_PI)) * 240,
  angle => abs(tan(angle + HALF_PI)) * 240,
  angle => abs(sin(-angle)) * 240,
  angle => abs(cos(-angle)) * 240,
  angle => abs(tan(-angle)) * 240,
  angle => abs(sin(-angle + HALF_PI)) * 240,
  angle => abs(cos(-angle + HALF_PI)) * 240,
  angle => abs(tan(-angle + HALF_PI)) * 240
];

let grid1;
let grid2;

class Grid {
  constructor(rad) {
    this.cols = ceil(width / (sqrt(3) * rad));
    this.rows = ceil(height / ((rad * 3) / 2));
    this.radius = rad;
    this.grid = [...Array(this.cols).keys()];
    this.grid = this.grid.map(_ => [...Array(this.rows).keys()]);
    let x = sqrt(3) * this.radius;
    let y = this.radius;
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.grid[j][i] = new Hexagon(x, y, this.radius);
        x += this.radius * sqrt(3);
      }
      y += (this.radius * 3) / 2;
      if ((i + 1) % 2 == 0) x = floor(sqrt(3) * this.radius);
      else x = floor((this.radius * sqrt(3)) / 2);
    }
  }
  draw() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.grid[j][i].draw();
      }
    }
  }
}

class Hexagon {
  constructor(x, y, r) {
    this.centx = x;
    this.centy = y;
    this.radius = r;
    this.cf = [
      random(colorFunctions),
      random(colorFunctions),
      random(colorFunctions)
    ];
  }

  getColor() {
    return color(
      this.cf[0](random(TAU)),
      this.cf[1](random(TAU)),
      this.cf[2](random(TAU))
    );
  }

  draw() {
    fill(this.getColor());
    noStroke();
    let angle = TWO_PI / 6;
    beginShape();
    for (let a = PI / 6; a < TWO_PI; a += angle) {
      let vx = this.centx + cos(a) * this.radius;
      let vy = this.centy + sin(a) * this.radius;
      vertex(vx, vy);
    }
    endShape(CLOSE);
  }
}

function setup() {
  pixelDensity(4);
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent("my-canvas");
  background(127);
  blendMode(DIFFERENCE);
  translate(-10, -10);
  grid1 = new Grid(10);
  grid2 = new Grid(15);
  grid3 = new Grid(20);
  grid1.draw();
  grid2.draw();
  grid3.draw();
  drawingComplete = true;
}
