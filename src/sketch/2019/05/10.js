import p5 from "p5";
import font from "assets/Cousine-BoldItalic.otf";

const sketch = function (p) {
  const colorOffset = p.random(1000000);
  const start = 150;
  const lineHeight = 100;
  let myFont;
  let points;

  p.preload = function () {
    myFont = p.loadFont(font);
  };

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(0);
    p.colorMode(p.HSB, 100);
    p.blendMode(p.HARD_LIGHT);
    p.strokeWeight(0.1);
  };

  p.draw = function () {
    const sampleFactor = p.map(p.cos(p.frameCount / 100), -1, 1, 0, 0.1);
    points = [];
    points = points.concat(
      myFont.textToPoints("—————", p.random(p.width), -start, 120, {
        sampleFactor,
      }),
      myFont.textToPoints("There is", 20, start, 100, {
        sampleFactor,
      }),
      myFont.textToPoints("no way", 20, start + lineHeight, 100, {
        sampleFactor,
      }),
      myFont.textToPoints("out,", 20, start + lineHeight * 2, 100, {
        sampleFactor,
      }),
      myFont.textToPoints("only a", 20, start + lineHeight * 3, 100, {
        sampleFactor,
      }),
      myFont.textToPoints("new place", 20, start + lineHeight * 4, 100, {
        sampleFactor,
      }),
      myFont.textToPoints("to be.", 20, start + lineHeight * 5, 100, {
        sampleFactor,
      }),
      myFont.textToPoints("—————", p.random(p.width), p.height + start, 120, {
        sampleFactor,
      })
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
        p.stroke(
          p.map(p.sin((p.frameCount + colorOffset) / 1000), -1, 1, 0, 100),
          50,
          p.frameCount % 2 ? 100 : 0,
          p.map(
            p.dist(x, y, points[i + 1].x, points[i + 1].y),
            0,
            p.width,
            100,
            0
          )
        );

        p.line(x, y, points[i + 1].x, points[i + 1].y);
      }
    });

    p.frameCount > 1500 && p.noLoop();
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
