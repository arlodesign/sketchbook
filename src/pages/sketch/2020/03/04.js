import React from "react";
import SketchLayout from "~components/sketch-layout";
import "p5.createloop";
import vert from "~shaders/basic.vert";
import frag from "~shaders/2020/03/01/04.frag";

const sketch = function(p) {
  const RENDER = p.getURLParams().render;
  const DURATION = 20;
  const RATE = 30;

  let theShader;

  p.setup = function() {
    p.pixelDensity(1);
    p.frameRate(RATE);
    p.createCanvas(660, 660, p.WEBGL);
    p.noStroke();
    p.createLoop(DURATION, {
      // gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.005,
    });
    theShader = p.createShader(vert, frag);
  };

  p.draw = function() {
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
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
