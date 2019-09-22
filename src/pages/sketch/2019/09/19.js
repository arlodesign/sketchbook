import React from "react";
import SketchLayout from "~components/sketch-layout";
import Link from "~components/link";
import { easeInOutQuint as ease } from "~lib/easing";
import "p5.createloop";

const RENDER = process.env.DEV && false;
const LINES = 50;
const POINTS = 50;

const sketch = function(p) {
  let maxDist;

  p.setup = function() {
    p.createCanvas(660, 840);

    p.createLoop(10, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.1,
    });

    maxDist = p.dist(
      -p.width / 2,
      -p.height / 2,
      p.width + p.width / 2,
      p.height + p.height / 2
    );
  };

  p.draw = function() {
    p.background(0);
    p.stroke(255);
    p.fill(0);

    const { noise2D, theta } = p.animLoop;

    for (let i = 0; i <= LINES; i++) {
      const y = p.height * (i / LINES);
      p.beginShape();

      for (let j = 0; j <= POINTS; j++) {
        let x;

        switch (j) {
          case 0:
            x = -1;
            break;
          case POINTS:
            x = p.width + 1;
            break;
          default:
            x =
              (p.width / POINTS) * j + (p.width / POINTS) * (noise2D(j, i) / 2);
            break;
        }

        const distFromFocus = p.dist(
          x,
          y,
          p.map(p.cos(theta * 2), -1, 1, -p.width / 2, p.width + p.width / 2),
          p.map(p.sin(theta), -1, 1, -p.height / 2, p.height + p.height / 2)
        );
        const waveIntensity =
          ease(distFromFocus / maxDist) * (p.height / LINES) * 5;
        const waveHeight = p.abs(noise2D(i, j)) * waveIntensity;

        p.curveVertex(x, y - waveHeight);

        j === 0 || (j === POINTS && p.curveVertex(x, y - waveHeight));
      }

      p.vertex(p.width + 1, y);
      p.vertex(p.width + 1, p.height + 1);
      p.vertex(-1, p.height + 1);

      p.endShape(p.CLOSE);
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
