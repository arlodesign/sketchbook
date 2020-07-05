import p5 from "p5";
import font from "assets/Cousine-BoldItalic.otf";

const sketch = function (p) {
  const letter = p.random("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""));
  const colorOffset = p.random(1000000);
  let myFont;
  let points;

  p.preload = function () {
    myFont = p.loadFont(font);
  };

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(0);
    p.colorMode(p.HSB, 100);
    p.strokeWeight(0.1);
  };

  p.draw = function () {
    p.stroke(
      p.map(p.sin((p.frameCount + colorOffset) / 1000), -1, 1, 0, 100),
      50,
      100
    );
    const sampleFactor = p.map(p.cos(p.frameCount / 100), -1, 1, 0, 0.1);
    points = myFont.textToPoints(
      letter + " " + p.random("!@#$%^&*()-+{}[]".split("")),
      20,
      625,
      900,
      {
        sampleFactor,
      }
    );
    points = points.map(({ x, y }) => ({
      x,
      y,
      corner: p.random([
        {
          x: 0,
          y: 0,
        },
        {
          x: p.width,
          y: 0,
        },
        {
          x: 0,
          y: p.height,
        },
        {
          x: p.width,
          y: p.height,
        },
      ]),
    }));

    points.forEach(({ x, y, corner }, i) => {
      if (points[i + 1]) {
        p.line(x, y, points[i + 1].x, points[i + 1].y);
      }
    });
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
document.getElementById("description").innerHTML =
  "Reload page for a different letter.";
