const SIZE = 200;
const BOX_COUNT = SIZE * 10;

let speed1;
let speed2;
let speed3;
let r1 = 0;
let r2 = 0;
let r3 = 0;
let variant;
let spheres = [];

function setup() {
  const myCanvas = createCanvas(660, 840, WEBGL);
  myCanvas.parent("my-canvas");

  speed1 = (random(0.1, 0.2) / TWO_PI) * random([-1, 1]);
  speed2 = (random(0.3, 0.4) / TWO_PI) * random([-1, 1]);
  speed3 = (random(0.5, 0.6) / TWO_PI) * random([-1, 1]);

  noStroke();
  color(255);

  setTimeout(() => {
    drawingComplete = true;
  }, 45000);
}

function draw() {
  background(255);

  directionalLight(
    min(frameCount, 255),
    min(frameCount, 255),
    min(frameCount, 255),
    cos(frameCount / 100),
    sin(frameCount / 200),
    sin(frameCount / 100) / 2
  );

  camera(
    sin(frameCount / (SIZE * 5)) * (SIZE * 2),
    cos(frameCount / (SIZE * 5)) * (SIZE * 2),
    SIZE * 2,
    0,
    0,
    0,
    0,
    1,
    0
  );

  spheres.forEach((s, i) => {
    push();
    specularMaterial(255);
    translate(...s);
    sphere(map(i, 0, BOX_COUNT, 0, 10));
    pop();
  });

  spheres.push([
    polarToCartesianX(0, r1, SIZE),
    polarToCartesianY(0, r2, SIZE),
    frameCount % 2
      ? polarToCartesianX(0, r3, SIZE)
      : polarToCartesianY(0, r3, SIZE)
  ]);
  spheres.length > BOX_COUNT && spheres.shift();

  r1 += speed1;
  r2 += speed2;
  r3 += speed3;
}
