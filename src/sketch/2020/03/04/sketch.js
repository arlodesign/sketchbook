import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();
import vert from "assets/basic.vert";
import frag from "./04.frag";

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const DURATION = 20;
  const RATE = 30;

  let theShader;

  p.setup = function () {
    p.pixelDensity(1);
    p.frameRate(RATE);
    p.createCanvas(
      Math.min(p.windowWidth, p.windowHeight),
      Math.min(p.windowWidth, p.windowHeight),
      p.WEBGL
    );
    p.noStroke();
    p.createLoop(DURATION, {
      // gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.005,
    });
    theShader = p.createShader(vert, frag);
  };

  p.draw = function () {
    const { noise1D } = p.animLoop;
    p.background(255);

    p.shader(theShader);
    theShader.setUniform("u_resolution", [p.width, p.height]);
    theShader.setUniform("u_noise_x", p.map(noise1D(0.5), -1, 1, 0, 20));
    theShader.setUniform("u_noise_y", p.map(noise1D(0.7), -1, 1, 0, 20));
    p.rect(0, 0, p.width, p.height);

    if (RENDER) {
      // p.noLoop();
      p.save(
        `${String(p.frameCount).padStart(
          String(DURATION * RATE).length,
          "0"
        )}.png`
      );
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(
      Math.min(p.windowWidth, p.windowHeight),
      Math.min(p.windowWidth, p.windowHeight)
    );
  };
};

new p5(sketch, "sketch");
