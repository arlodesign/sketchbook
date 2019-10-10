import React from "react";
import SketchLayout from "~components/sketch-layout";
import "p5.createloop";

const RENDER = process.env.DEV && false;

const sketch = function(p) {
  let phaseShift = 0;

  function drawCurve(xAmplitude, yAmplitude, xPeriod, yPeriod, phaseShift) {
    for (let theta = 0; theta < p.TWO_PI; theta += 0.01) {
      let x = xAmplitude * p.sin(xPeriod * theta);
      let y = yAmplitude * p.sin(yPeriod * theta + phaseShift);
      p.ellipse(x, y, 5, 5);
    }
  }

  p.setup = function() {
    p.createCanvas(660, 840);

    p.createLoop(5, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.1,
    });
  };

  p.draw = function() {
    const { theta } = p.animLoop;
    let xPeriod = 3;
    let yPeriod = 5;/
    let xAmplitude = 100;
    let yAmplitude = 100;

    p.background(255);
    p.translate(p.width / 2, p.height / 2);

    phaseShift += 0.01;
    drawCurve(xAmplitude, yAmplitude, xPeriod, yPeriod, theta);
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
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
