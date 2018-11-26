function setup() {
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent('my-canvas');
  background('white');
}

function draw() {
  rectMode(CENTER);
  strokeWeight(3);
  for (var index = 0; index < 60; index++) {
    translate(index, index / 2);
    rotate(PI / index);
    rect(index + 200, index + 10, width / 3, height / 3);
  }
}