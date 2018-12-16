window.sketchHeadline = "";

const scalar = 36;

let img;

function preload() {
  img = loadImage('/images/rope.png')
}

function setup() {
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent('my-canvas');
}

function draw() {
  background(img);

  const offset = map(
    mouseX,
    0, width,
    0, scalar,
    true
  );
  const spin = map(
    mouseY,
    0, height,
    0, PI / scalar,
    true
  );

  translate(width / 2, height / 2);

  push();
  rotate(spin);
  tint(255, 128);
  image(
    img,
    (-width / 2) - offset, (-height / 2) - offset,
    width + (offset * 2), height + (offset * 2)
  );
  pop();

  push();
  rotate(spin * 2);
  tint(255, 64);
  image(
    img,
    (-width / 2) - (offset * 2), (-height / 2) - (offset * 2),
    width + (offset * 4), height + (offset * 4)
  );
  pop();
}

function touchMoved() {
  if (mouseX >= 0 && mouseY >= 0 && mouseX <= width && mouseY <= height) {
    return false
  };
}