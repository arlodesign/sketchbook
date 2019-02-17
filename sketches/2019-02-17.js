/*---
description: 
---*/

let points = [];

function getVectors() {
  return {
    position: createVector(
      randomGaussian(width / 2, width / 15),
      randomGaussian(height / 2, height / 15)
    ),
    velocity: createVector(random(-0.1, 0.1), random(-0.1, 0.1)),
    acceleration: createVector(random(-0.1, 0.1), random(-0.1, 0.1))
  };
}

function setup() {
  pixelDensity(4);
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent("my-canvas");
  points = [...Array(50).keys()].map(_ => getVectors());
  background(0);
}

function draw() {
  points.forEach(({ position, velocity, acceleration }, i) => {
    points[i].position = position.add(velocity.add(acceleration));
    if (
      position.x < 0 ||
      position.x > width ||
      position.y < 0 ||
      position.y > height
    ) {
      points[i] = getVectors();
    }
  });

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

    stroke(
      255 * cos(frameCount / 100),
      map(
        dist(
          width / 2,
          height / 2,
          points2[unreachedIndex].position.x,
          points2[unreachedIndex].position.y
        ),
        0,
        dist(0, 0, width / 2, height / 2),
        64,
        0
      )
    );

    line(
      points2[reachedIndex].position.x,
      points2[reachedIndex].position.y,
      points2[unreachedIndex].position.x,
      points2[unreachedIndex].position.y
    );
    points2[unreachedIndex].reached = true;
  }

  addNoise(0.02);

  if (frameCount > 800) {
    drawingComplete = true;
    noLoop();
  }
}
