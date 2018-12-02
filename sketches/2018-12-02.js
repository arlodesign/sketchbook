window.sketchHeadline = "Move pointer over sketch.";

const circleGap = 30;

function setup() {
  pixelDensity(4);
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent('my-canvas');
  noFill();
}

function draw() {
  background('white');

  let i = 1;
  let y = map(
    mouseY,
    0, height,
    height, height + width,
    true
  );
  let strokeWeightValue = 5;

  while (y > mouseY - (width * 2)) {
    strokeWeight(i);
    ellipse(width / 2, y, width);
    ellipse(width / 2, height - y, width);
    i += .1;
    y -= circleGap;
  }
}