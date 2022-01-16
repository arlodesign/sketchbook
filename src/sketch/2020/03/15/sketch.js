import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();
import vert from "assets/basic.vert";
import frag from "./15.frag";
import { easeOutCubic as ease } from "util/easing";

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const DURATION = 60;
  const RATE = 60;

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
      noiseRadius: 0.5,
    });
    theShader = p.createShader(vert, frag);
  };

  p.draw = function () {
    const { theta, noise, noise1D, progress } = p.animLoop;
    p.background(255);

    p.shader(theShader);
    theShader.setUniform("u_resolution", [p.width, p.height]);
    theShader.setUniform("u_noise", noise());
    theShader.setUniform("u_noise_x", noise1D(1) * 10);
    theShader.setUniform("u_noise_y", noise1D(10) * 20);
    theShader.setUniform("u_theta", theta);
    theShader.setUniform("u_time", p.millis() / 1000);
    theShader.setUniform(
      "u_progress",
      ease(4 * progress * progress - 4 * progress)
    );
    p.rect(0, 0, p.width, p.height);

    if (process.env.DEV && RENDER && p.frameCount <= DURATION * RATE) {
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
