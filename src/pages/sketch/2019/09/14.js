import React from "react";
import SketchLayout from "~components/sketch-layout";
import Link from "~components/link";
import "p5.createloop";

const RENDER = process.env.DEV && false;

const sketch = function(p) {
  p.setup = function() {
    p.createCanvas(660, 840);

    p.createLoop(10, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.1,
    });
  };

  p.draw = function() {
    p.background(0);
    p.stroke(255);
    p.fill(0);

    const { noise2D, theta } = p.animLoop;

    for (let y = 0; y < p.height; y += p.height / 100) {
      p.beginShape();
      p.curveVertex(0, y);
      p.curveVertex(0, y);
      for (let x = p.width / 5; x <= p.width - p.width / 5; x += p.width / 5) {
        const distFromMidPoint = p.abs(
          y - p.map(p.cos(theta), -1, 1, 0, p.height)
        );
        const waveIntensity = p.map(distFromMidPoint, 0, p.height, 0, 100);
        const waveHeight = p.abs(noise2D(x, y)) * waveIntensity;
        p.curveVertex(x, y - waveHeight);
      }
      p.curveVertex(p.width, y);
      p.curveVertex(p.width, y);
      p.endShape();
    }
  };
};

export default ({ location }) => (
  <SketchLayout
    sketch={sketch}
    path={location.pathname}
    description={
      <>
        Every code artist does one of these{" "}
        <Link href="https://www.washingtonpost.com/entertainment/music/how-joy-divisions-unknown-pleasures-image-went-from-underground-album-cover-to-piece-of-cultural-ubiquity/2019/06/14/26e75338-8c76-11e9-adf3-f70f78c156e8_story.html?arc404=true">
          Unknown Pleasures
        </Link>{" "}
        sort of sketches at some point. It’s my turn to riff on this for a few
        days.
      </>
    }
  />
);
