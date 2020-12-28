import p5 from "p5";
import "p5.createloop";
import vert from "assets/basic.vert";
import frag from "./08.frag";
import { easeInOutCubic } from "util/easing";

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const DURATION = 20;
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
      noiseRadius: 0.3,
    });
    theShader = p.createShader(vert, frag);
  };

  p.draw = function () {
    const { theta, noise, noise1D, progress } = p.animLoop;
    p.background(255);

    p.shader(theShader);
    theShader.setUniform("u_resolution", [p.width, p.height]);
    theShader.setUniform("u_noise_r", p.map(noise1D(5), -1, 1, 0, 1));
    theShader.setUniform("u_noise_g", p.map(noise1D(3), -1, 1, 0, 1));
    theShader.setUniform("u_noise_b", p.map(noise1D(7), -1, 1, 0, 1));
    theShader.setUniform("u_theta", theta);
    theShader.setUniform(
      "u_progress",
      easeInOutCubic(-4 * progress * progress + 4 * progress)
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
