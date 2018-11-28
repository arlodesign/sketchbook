function setup() {
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent('my-canvas');
  strokeWeight(4);
  noLoop();
}

function draw() {
  background('white');

  for (let i = 0; i < 1000; i++) {
    triangle(
      0, 0,
      width, random(0, height),
      random(0, width), height
    );
  }
}