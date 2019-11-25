import React from "react";
import SketchLayout from "~components/sketch-layout";
import "p5.createloop";
import { withPrefix } from "gatsby";

const sketch = function(p) {
  const RENDER = p.getURLParams().render;
  const HUE = p.random();

  class Box {
    constructor() {
      this.x = p.random(p.width);
      this.w = p.random(p.width);

      this.color = p.color(HUE, 1, p.random());
      this.glitch = p.floor(p.random(15, 60));
    }
    setY() {
      this.y = p.height * p.animLoop.noise1D(this.glitch, { noiseRadius: 300 });
    }
    draw() {
      const { theta, noise1D } = p.animLoop;
      if (theta === 0) this.setY();
      p.fill(this.color);
      p.rect(
        this.x + p.width * noise1D(this.x, { noiseRadius: 20 }),
        this.y,
        this.w * p.abs(noise1D(this.x, { noiseRadius: 10 })),
        p.height / 2
      );
      if (p.frameCount % this.glitch === 0) {
        this.setY();
      }
    }
  }

  let boxes = [];
  let myFont;
  // https://api.datamuse.com/words?rel_trg=nervous
  let myWords = [
    "acetylcholine",
    "activation",
    "activity",
    "acute",
    "alcohol",
    "anxiety",
    "autonomic",
    "blood",
    "brain",
    "breakdown",
    "cardiac",
    "cardiovascular",
    "cause",
    "causes",
    "cell",
    "cells",
    "cerebral",
    "chronic",
    "clinical",
    "collapse",
    "cord",
    "depression",
    "disease",
    "diseases",
    "disorder",
    "drugs",
    "effects",
    "endocrine",
    "exhaustion",
    "exposure",
    "function",
    "functional",
    "ganglia",
    "gastrointestinal",
    "heart",
    "humans",
    "illness",
    "immune",
    "infection",
    "liver",
    "membrane",
    "mental",
    "molecular",
    "motor",
    "muscle",
    "muscles",
    "myelin",
    "nerve",
    "nerves",
    "neural",
    "neurological",
    "neuron",
    "neuronal",
    "neurons",
    "neuroscience",
    "neurotransmitter",
    "organs",
    "pain",
    "paralysis",
    "parasympathetic",
    "patients",
    "peripheral",
    "physiological",
    "psychiatric",
    "receptor",
    "receptors",
    "reflex",
    "respiratory",
    "responses",
    "sensory",
    "shock",
    "skeletal",
    "skin",
    "sleep",
    "spinal",
    "stimulation",
    "stimuli",
    "stress",
    "sympathetic",
    "symptoms",
    "synaptic",
    "syndrome",
    "system",
    "systems",
    "tissue",
    "tissues",
    "toxicity",
    "tract",
    "vertebrates",
    "virus",
  ];

  p.preload = function() {
    myFont = p.loadFont(withPrefix("/assets/NewsCycle-Bold.ttf"));
  };

  p.setup = function() {
    if (RENDER) {
      p.pixelDensity(1);
      p.frameRate(30);
    }

    p.createCanvas(660, 840);
    p.createLoop(20, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.1,
    });
    p.colorMode(p.HSL, 1);

    boxes = Array(30)
      .fill()
      .map(() => new Box());
  };

  p.draw = function() {
    p.blendMode(p.BLEND);
    p.background(0);
    p.blendMode(p.DIFFERENCE);
    p.noStroke();

    p.textFont(myFont, 100);
    p.textAlign(p.CENTER);

    for (let y = 77; y < p.height; y += 76) {
      p.fill(HUE, p.abs(p.animLoop.noise1D(y)), 0.5, 0.5);
      const key = p.floor(p.abs(p.animLoop.noise1D(y)) * myWords.length);
      const str =
        myWords[p.max(key - 1, 0)] +
        myWords[key] +
        myWords[p.min(key + 1, myWords.length - 1)];
      p.text(str.toUpperCase(), p.width / 2, y);
    }

    boxes.forEach(b => b.draw());
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
