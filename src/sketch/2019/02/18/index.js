import p5 from "p5";
import font from "assets/Cousine-BoldItalic.otf";

const sketch = function (p) {
  const ALPHA = [
    { letter: "T", x: 352 - 15, y: 225 },
    { letter: "H", x: 431 - 15, y: 225 },
    { letter: "I", x: 508 - 15, y: 225 },
    { letter: "S", x: 586 - 15, y: 225 },
    { letter: "I", x: 93 - 15, y: 375 },
    { letter: "S", x: 171 - 15, y: 375 },
    { letter: "J", x: 327 - 15, y: 375 },
    { letter: "U", x: 405 - 15, y: 375 },
    { letter: "S", x: 483 - 15, y: 375 },
    { letter: "T", x: 561 - 15, y: 375 },
    { letter: "I", x: 64 - 15, y: 525 },
    { letter: "N", x: 142 - 15, y: 525 },
    { letter: "Y", x: 298 - 15, y: 525 },
    { letter: "O", x: 376 - 15, y: 525 },
    { letter: "U", x: 454 - 15, y: 525 },
    { letter: "R", x: 532 - 15, y: 525 },
    { letter: "H", x: 37 - 15, y: 675 },
    { letter: "E", x: 115 - 15, y: 675 },
    { letter: "A", x: 193 - 15, y: 675 },
    { letter: "D", x: 271 - 15, y: 675 },
  ].reverse();
  const FONT_SIZE = 150;
  const FRAME_FREQUENCY = 60;
  const ITERATIONS = 2;
  const MARGIN = 20;
  const CF = [
    (angle) => p.abs(p.sin(angle)) * 240,
    (angle) => p.abs(p.cos(angle)) * 240,
    (angle) => p.abs(p.tan(angle)) * 240,
    (angle) => p.abs(p.sin(angle + p.PI)) * 240,
    (angle) => p.abs(p.cos(angle + p.PI)) * 240,
    (angle) => p.abs(p.tan(angle + p.PI)) * 240,
    (angle) => p.abs(p.sin(-angle)) * 240,
    (angle) => p.abs(p.cos(-angle)) * 240,
    (angle) => p.abs(p.tan(-angle)) * 240,
    (angle) => p.abs(p.sin(-angle + p.PI)) * 240,
    (angle) => p.abs(p.cos(-angle + p.PI)) * 240,
    (angle) => p.abs(p.tan(-angle + p.PI)) * 240,
  ];
  let myFont;
  let letterIndex = 0;
  let points = [];
  let lineCount = 0;
  let rOpt;
  let gOpt;
  let bOpt;

  function setStroke(a) {
    p.stroke(rOpt(a), gOpt(a), bOpt(a), 64);
  }

  p.preload = function () {
    myFont = p.loadFont(font);
  };

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(255);
    p.textAlign(p.LEFT);
    p.textFont(myFont);
    p.textSize(130);
    p.textLeading(150);
    while (Array.from(new Set([rOpt, gOpt, bOpt])).length < 3) {
      rOpt = p.random(CF);
      gOpt = p.random(CF);
      bOpt = p.random(CF);
    }
  };

  p.draw = function () {
    p.fill(255, lineCount < ITERATIONS ? 255 : 0);
    p.noStroke();
    const { letter, x, y } = ALPHA[letterIndex];
    p.text(letter, x, y);
    if (p.frameCount % FRAME_FREQUENCY === 1) {
      const letterPoints = myFont.textToPoints(letter, x, y, 130, {
        sampleFactor: 0.05,
      });
      points = points.concat(
        letterPoints.map(({ x, y }) => ({
          position: p.createVector(x, y),
          velocity: p.createVector(p.random(-2, 2), p.random(-2, 2)),
          acceleration: p.createVector(
            p.random(-0.05, 0.05),
            p.random(-0.05, 0.05)
          ),
        }))
      );
    }
    setStroke(p.frameCount / (FRAME_FREQUENCY * ALPHA.length * ITERATIONS));

    points.forEach(({ position, velocity, acceleration }, i) => {
      points[i].position = position.add(velocity.add(acceleration));
      if (
        position.x < MARGIN ||
        position.x > p.width - MARGIN ||
        position.y < MARGIN ||
        position.y > p.height - MARGIN
      ) {
        points.splice(i, 1);
      }
    });
    if (points.length > 0) {
      let points2 = points.map((p) => ({
        position: p.position,
        reached: false,
      }));
      points2[0].reached = true;
      while (points2.filter((point) => point.reached).length < points2.length) {
        const MAX = p.dist(0, 0, p.width, p.height) * 2;
        let shortest = MAX;
        let reachedIndex;
        let unreachedIndex;
        points2.forEach((point, i) => {
          if (point.reached) return;
          points2.forEach((point2, i2) => {
            if (point2.reached) return;
            const THIS_DIST = p.dist(
              point.position.x,
              point.position.y,
              point2.position.x,
              point2.position.y
            );
            if (THIS_DIST < shortest) {
              shortest = THIS_DIST;
              reachedIndex = i;
              unreachedIndex = i2;
            }
          });
        });
        p.line(
          points2[reachedIndex].position.x,
          points2[reachedIndex].position.y,
          points2[unreachedIndex].position.x,
          points2[unreachedIndex].position.y
        );
        points2[unreachedIndex].reached = true;
      }
    }
    if (p.frameCount % FRAME_FREQUENCY === 0) {
      letterIndex++;
    }
    if (letterIndex === ALPHA.length) {
      letterIndex = 0;
      lineCount++;
    }
    if (lineCount > ITERATIONS) {
      p.noLoop();
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
