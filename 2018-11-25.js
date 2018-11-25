var angle = 2;
var scalar = 3;
var speed = 0.3;

noStroke();
fill(0);
// rectMode(CENTER);
background("white");

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