let start = true;

// Border Width
const bw = 20;

function setup() {
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent('my-canvas');
  background('white');
  strokeWeight(4);
  noLoop();
}

function draw() {
  push();
  strokeWeight(bw);
  noFill();
  rect(bw / 2, bw / 2, width - bw, height - bw);
  pop();

  if (start) {
    push();
    fill(255);
    text('Click canvas for more', 5, 15);
    pop();
  }

  triangle(
    bw, bw,
    width - bw, random(bw, height - bw),
    random(bw, width - bw), height - bw
  );
}

function mouseClicked() {
  start = false;
  redraw(10);
}