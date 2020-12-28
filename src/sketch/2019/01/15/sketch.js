import p5 from "p5";

const sketch = function (p) {
  const LIMIT = 13;
  let fun;

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    fun = p.floor(p.random(4));
    p.stroke(`rgba(0, 0, 0, 0.5)`);
    p.noFill();
  };

  p.draw = function () {
    p.background(255);
    let angle = 0;
    let myMouseX = p.map(p.mouseX, 0, p.width, p.width / 5, p.width / 3, true);
    let myMouseY = p.map(p.mouseY, 0, p.height, 1, LIMIT, true);
    while (angle < p.PI) {
      angle += p.TWO_PI / (300 * p.map(myMouseY, 1, 7, 1, p.floor(LIMIT / 3)));
      let xAxis = p.width / 2 + p.cos(angle) * myMouseX;
      let yAxis = p.height / 2 + p.cos(angle) * myMouseX;
      let x1 = xAxis + p.cos(angle) * (p.height / 6);
      let y1 = yAxis + p.sin(angle * myMouseY) * (p.height / 6);
      let x2 = xAxis + p.cos(angle + p.PI / 6) * (p.height / 6);
      let y2 = yAxis + p.sin(angle * myMouseY + p.PI / 6) * (p.height / 6);
      let x3 = xAxis + p.cos(angle + p.PI) * (p.height / 6);
      let y3 = yAxis + p.sin(angle * myMouseY + p.PI) * (p.height / 6);
      let x4 = xAxis + p.cos(angle + (p.PI * 5) / 6) * (p.height / 6);
      let y4 = yAxis + p.sin(angle + (p.PI * 5) / 6) * (p.height / 6);
      switch (fun) {
        case 0:
          p.bezier(x1, y1, x2, y2, x3, y3, x4, y4);
          break;
        case 1:
          p.bezier(x2, y2, x3, y3, x4, y4, x1, y1);
          break;
        case 2:
          p.bezier(x3, y3, x4, y4, x1, y1, x2, y2);
          break;
        default:
          p.bezier(x4, y4, x1, y1, x2, y2, x3, y3);
          break;
      }
    }
  };

  p.touchMoved = function () {
    if (
      p.mouseX >= 0 &&
      p.mouseY >= 0 &&
      p.mouseX <= p.width &&
      p.mouseY <= p.height
    ) {
      return false;
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
const description =
  "Move pointer or finger over sketch. Reload page for a different variation.";
