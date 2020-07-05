import p5 from "p5";
import "p5.createloop";
import vert from "assets/basic.vert";
import frag from "./01.frag";

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const DURATION = 20;
  const RATE = 30;

  let theShader;

  p.setup = function () {
    p.frameRate(RATE);
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    p.noStroke();
    p.createLoop(DURATION, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.1,
    });
    theShader = p.createShader(vert, frag);
  };

  p.draw = function () {
    const { progress, theta, noise } = p.animLoop;
    p.background(255);

    p.shader(theShader);
    theShader.setUniform("u_resolution", [p.width, p.height]);
    theShader.setUniform("u_theta", theta);
    theShader.setUniform("u_noise", p.map(noise(), -1, 1, 0, 1));
    p.rect(0, 0, p.width, p.height);
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
