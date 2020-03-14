import React from "react";
import SketchLayout from "~components/sketch-layout";
import "p5.createloop";
import vert from "~shaders/basic.vert";
import frag from "~shaders/2020/03/01/13.frag";
import { easeInOutCubic } from "~lib/easing";

const sketch = function(p) {
  const RENDER = p.getURLParams().render;
  const DURATION = 60;
  const RATE = 60;

  let theShader;

  p.setup = function() {
    p.pixelDensity(1);
    p.frameRate(RATE);
    p.createCanvas(660, 660, p.WEBGL);
    p.noStroke();
    p.createLoop(DURATION, {
      noiseRadius: 0.1,
    });
    theShader = p.createShader(vert, frag);
  };

  p.draw = function() {
    const { theta, noise, noise1D, progress } = p.animLoop;
    p.background(255);

    p.shader(theShader);
    theShader.setUniform("u_resolution", [p.width, p.height]);
    theShader.setUniform("u_noise", noise());
    theShader.setUniform("u_theta", theta);
    theShader.setUniform("u_time", p.millis() / 1000);
    theShader.setUniform("u_progress", progress * progress - progress + 1);
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
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
