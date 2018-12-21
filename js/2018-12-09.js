window.sketchHeadline = 'Reload page for a different variation.';

const goldenRatio = 1.6180339887;

let angle = 0;
let r = 10;
let apex = {};
let spin;
let grow;

function setup() {
  pixelDensity(4);
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent('my-canvas');
  background('black');
  noFill();
  apex = {
    width: width / goldenRatio,
    height: height / goldenRatio
  };
  spin = random(1, 3) * Math.random();
  grow = spin * noise(spin) * 10;
}

function draw() {
  angle += spin;
  r = r + grow;

  const noiseVal = noise(angle, r);
  const x = cos(angle * noiseVal) * r;
  const y = sin(angle * noiseVal) * r;
  const x2 = sin(angle * noiseVal) * r;
  const y2 = cos(angle * noiseVal) * r;

  stroke(`rgba(255, 255, 255, ${noiseVal})`);
  strokeWeight(spin * noiseVal + 1);
  line(apex.width, apex.height, x, y);
  line(apex.width, apex.height, x2, y2);

  if (x > width * goldenRatio && y > height * goldenRatio) {
    noLoop();
    drawingComplete = true;
  }
}
