window.sketchHeadline = 'Reload page for a different variation.';

let count = 0;
const total = 500;

function setup() {
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent('my-canvas');
  background('white');
  strokeWeight(4);
  noLoop();
}

function draw() {
  while (count < total) {
    triangle(0, 0, width, random(0, height), random(0, width), height);
    count++;
  }
}
