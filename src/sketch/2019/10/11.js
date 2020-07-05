import p5 from "p5";
import "p5.createloop";

const RENDER = process.env.DEV && false;

const sketch = function (p) {
  const curves = [
    {
      xPeriod: 3,
      yPeriod: 4,
      color: "red",
      rotationDir: -1,
    },
    {
      xPeriod: 3,
      yPeriod: 2,
      color: "green",
      rotationDir: 0,
    },
    {
      xPeriod: 5,
      yPeriod: 4,
      color: "blue",
      rotationDir: 1,
    },
  ];

  let amplitude;

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.createLoop(49, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.1,
    });
    p.noFill();
    p.strokeWeight(30);

    amplitude = p.width / 2 - 50;
  };

  p.draw = function () {
    const { theta, noise1D } = p.animLoop;

    p.blendMode(p.BLEND);
    p.background(0);
    p.blendMode(p.SCREEN);

    p.translate(p.width / 2, p.height / 2);

    curves.forEach(({ xPeriod, yPeriod, color, rotationDir }, i) => {
      p.push();
      p.rotate(theta * rotationDir);
      p.stroke(color);
      p.beginShape();
      for (let th = -0.02; th < p.TWO_PI + 0.04; th += 0.02) {
        let x = amplitude * p.sin(xPeriod * th);
        let y = amplitude * p.sin(yPeriod * th + theta * 3);
        p.curveVertex(x, y);
      }
      p.endShape();
      p.pop();
    });
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
/*
TrigonometricInputs inputs;
void setup() {
size(300, 300);
background(155);
frameRate(15);
}
void drawCurve(float xAmplitude, float yAmplitude, float xPeriod, float yPeriod, float phaseShift){
for (float theta = 0; theta < TWO_PI; theta += 0.01){
float x = xAmplitude * sin(xPeriod * theta);
float y = yAmplitude * sin(yPeriod * theta + phaseShift);
ellipse(x, y, 5, 5);
}
}
float phaseShift = 0;
void draw() {
background(155);
translate(150,150);
float xPeriod = 3;
float yPeriod = 5;
float xAmplitude = 100;
float yAmplitude = 100;
if (this.inputs != null){
xPeriod = this.inputs.getXPeriod();
yPeriod = this.inputs.getYPeriod();
xAmplitude = this.inputs.getXAmplitude();
yAmplitude = this.inputs.getYAmplitude();
}
phaseShift += .01;
adjustColors(phaseShift);
drawCurve(xAmplitude, yAmplitude, xPeriod, yPeriod, phaseShift);
}
void adjustColors(float r){
stroke(sin(r) * 128 + 128, 50, sin(r * PI/2)*128 + 128, 200);
}
void bindInputsJS(TrigonometricInputs inputs){
this.inputs = inputs;
}
*/
