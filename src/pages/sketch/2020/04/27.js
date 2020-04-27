import React from "react";
import SketchLayout from "~components/sketch-layout";
import "p5.createloop";

const sketch = function(p) {
  const RENDER = p.getURLParams().render;
  const DURATION = 20;
  const RATE = 30;

  p.setup = function() {
    p.pixelDensity(RENDER ? 2 : 1);
    p.frameRate(RATE);
    p.createCanvas(660, 840);
    p.background(255);

    p.createLoop(DURATION, {
     gif: RENDER ? { render: false, open: true } : false,
     noiseRadius: 0.1,
    });
  };

  p.draw = function() {
    const { progress, theta, noise } = p.animLoop;
    p.background(255);
    
    /*
      DRAW
    */

    p.frameCount % 100 === 0 && console.info(`${p.floor(progress * 100)}%`);
    if (!RENDER && p.frameCount === DURATION * RATE) {
      console.info("100%") ;
      p.noLoop();
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
