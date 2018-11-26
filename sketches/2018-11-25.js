var angle = 2;
var scalar = 3;
var speed = 0.3;

function setup() {
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent('my-canvas');
  noStroke();
  fill(0);
  background("white");
}

function draw() {
  var x = (width / 2) + cos(angle) * scalar;
  var y = (height / 2) + sin(angle) * scalar;
  var rectWidth = scalar / speed;
  rotate(PI / angle);
  rect(x, y, rectWidth, 1);
  if (rectWidth > width) {
    noLoop();
  }
  angle += speed;
  scalar += speed;
}