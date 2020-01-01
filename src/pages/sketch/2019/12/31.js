import React from "react";
import SketchLayout from "~components/sketch-layout";
import "p5.createloop";
import polarToCartesian from "~lib/polarToCartesian";
import { easeInQuad as ease } from "~lib/easing";

const sketch = function(p) {
  const RENDER = p.getURLParams().render;
  const PETAL_COUNT = 32;
  const HUE = p.random();

  let maskImage;

  p.setup = function() {
    if (RENDER) {
      p.pixelDensity(1);
      p.frameRate(30);
    }

    p.createCanvas(660, 840);
    p.createLoop(40, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 2,
    });
    p.colorMode(p.HSL, 1);

    maskImage = p.createGraphics(p.width, p.height);
    maskImage.fill(0);
    maskImage.triangle(
      p.width / 2,
      p.height / 2,
      ...polarToCartesian(
        p.width / 2,
        p.height / 2,
        -(p.TWO_PI / PETAL_COUNT) / 2,
        ((1 / p.cos(-(p.TWO_PI / PETAL_COUNT) / 2)) * p.width) / 2,
        true
      ),
      ...polarToCartesian(
        p.width / 2,
        p.height / 2,
        p.TWO_PI / PETAL_COUNT / 2,
        ((1 / p.cos(p.TWO_PI / PETAL_COUNT / 2)) * p.width) / 2,
        true
      )
    );
  };

  p.draw = function() {
    const { noise1D, noise2D, theta } = p.animLoop;

    p.background(p.color(1 - HUE, 0.4, 0.1));

    const flameImage = p.createGraphics(p.width, p.height);
    flameImage.colorMode(p.HSL, 1);

    for (let i = 1; i < 20; i++) {
      flameImage.beginShape();
      for (let y = p.height / 5; y < p.height - p.height / 5; y += 2) {
        const r = p.map(noise1D(y / i / 100), -1, 1, 0.01, 1);

        flameImage.noFill();
        flameImage.stroke(p.color(1 - HUE, 1, 0.6, 0.9));
        flameImage.strokeWeight(3);

        flameImage.vertex(
          p.width - (p.width / 2) * r,
          y + noise2D(y / 30, p.sin(theta))
        );
      }
      flameImage.endShape();
    }

    for (let i = 1; i < 10; i++) {
      flameImage.beginShape();
      for (let y = p.height / 5; y < p.height - p.height / 5; y += 10) {
        const r = ease(p.abs(p.sin(theta) * noise1D(y)));

        flameImage.noFill();
        flameImage.stroke(p.color(HUE, 1, 0.5, 0.9));
        flameImage.strokeWeight(8);

        flameImage.point(
          p.width - (p.width / 2) * r - 8,
          y + noise2D(y / 50, p.sin(theta))
        );
      }
      flameImage.endShape();
    }

    const flames = flameImage.get();
    flames.mask(maskImage);
    p.translate(p.width / 2, p.height / 2);
    p.rotate(theta);
    for (let i = 0; i < PETAL_COUNT; i++) {
      p.push();
      p.scale(i % 2 ? 1 : -1, 1);
      p.rotate((p.TWO_PI / PETAL_COUNT) * i);
      p.image(flames, -p.width / 2, -p.height / 2);
      p.pop();
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
