/*---
description: Refresh for a different color palette.
---*/

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
  { letter: "D", x: 271 - 15, y: 675 }
].reverse();
const FONT_SIZE = 150;
const FRAME_FREQUENCY = 60;
const ITERATIONS = 2;
const MARGIN = 20;
const CF = [
  angle => abs(sin(angle)) * 240,
  angle => abs(cos(angle)) * 240,
  angle => abs(tan(angle)) * 240,
  angle => abs(sin(angle + PI)) * 240,
  angle => abs(cos(angle + PI)) * 240,
  angle => abs(tan(angle + PI)) * 240,
  angle => abs(sin(-angle)) * 240,
  angle => abs(cos(-angle)) * 240,
  angle => abs(tan(-angle)) * 240,
  angle => abs(sin(-angle + PI)) * 240,
  angle => abs(cos(-angle + PI)) * 240,
  angle => abs(tan(-angle + PI)) * 240
];

let myFont;
let letterIndex = 0;
let points = [];
let lineCount = 0;
let rOpt;
let gOpt;
let bOpt;

function setStroke(a) {
  stroke(rOpt(a), gOpt(a), bOpt(a), 64);
}

function preload() {
  myFont = loadFont("/assets/Cousine-BoldItalic.otf");
}

function setup() {
  pixelDensity(4);
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent("my-canvas");

  background(255);
  textAlign(LEFT);
  textFont(myFont);
  textSize(130);
  textLeading(150);

  while ([...new Set([rOpt, gOpt, bOpt])].length < 3) {
    rOpt = random(CF);
    gOpt = random(CF);
    bOpt = random(CF);
  }
}

function draw() {
  fill(255, lineCount < ITERATIONS ? 255 : 0);
  noStroke();

  const { letter, x, y } = ALPHA[letterIndex];
  text(letter, x, y);

  if (frameCount % FRAME_FREQUENCY === 1) {
    const letterPoints = myFont.textToPoints(letter, x, y, 130, {
      sampleFactor: 0.05
    });
    points = points.concat(
      letterPoints.map(({ x, y }) => ({
        position: createVector(x, y),
        velocity: createVector(random(-2, 2), random(-2, 2)),
        acceleration: createVector(random(-0.05, 0.05), random(-0.05, 0.05))
      }))
    );
  }

  points.forEach(({ position, velocity, acceleration }, i) => {
    points[i].position = position.add(velocity.add(acceleration));
    if (
      position.x < MARGIN ||
      position.x > width - MARGIN ||
      position.y < MARGIN ||
      position.y > height - MARGIN
    ) {
      points.splice(i, 1);
    }
  });

  if (points.length > 0) {
    let points2 = points.map(p => ({ position: p.position, reached: false }));

    points2[0].reached = true;

    while (points2.filter(p => p.reached).length < points2.length) {
      const MAX = dist(0, 0, width, height) * 2;
      let shortest = MAX;
      let reachedIndex;
      let unreachedIndex;

      points2.forEach((p, i) => {
        if (!p.reached) return;

        points2.forEach((p2, i2) => {
          if (p2.reached) return;

          const THIS_DIST = dist(
            p.position.x,
            p.position.y,
            p2.position.x,
            p2.position.y
          );
          if (THIS_DIST < shortest) {
            shortest = THIS_DIST;
            reachedIndex = i;
            unreachedIndex = i2;
          }
        });
      });

      strokeWeight(0.25);
      setStroke(frameCount / (FRAME_FREQUENCY * ALPHA.length * ITERATIONS));

      line(
        points2[reachedIndex].position.x,
        points2[reachedIndex].position.y,
        points2[unreachedIndex].position.x,
        points2[unreachedIndex].position.y
      );
      points2[unreachedIndex].reached = true;
    }
  }

  if (frameCount % FRAME_FREQUENCY === 0) {
    letterIndex++;
  }
  if (letterIndex === ALPHA.length) {
    letterIndex = 0;
    lineCount++;
  }
  if (lineCount > ITERATIONS) {
    noLoop();
    drawingComplete = true;
  }
}
