import { makeNoise4D } from "open-simplex-noise";
import polarToCartesian from "util/polarToCartesian";
const noise = new makeNoise4D(Date.now());

self.onmessage = function ({ data }) {
  const TWO_PI = Math.PI * 2;
  const { img, width, height, progress, scale, radius } = data;

  const getIndex = (x, y) => (Math.floor(x) + Math.floor(y) * width) * 4;
  const noiseVal = (x, y, s, r) =>
    noise(
      s * x,
      s * y,
      r * Math.cos(TWO_PI * progress),
      r * Math.sin(TWO_PI * progress)
    );

  let newImg = new Uint8ClampedArray(width * height * 4);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const index = getIndex(x, y);
      const px = polarToCartesian(
        x,
        y,
        TWO_PI * noiseVal(x, y, scale[0], radius[0]),
        width * 2 * Math.abs(noiseVal(x, y, scale[1], radius[1]))
      );

      px.x =
        px.x < 0
          ? Math.floor(width + (px.x % width))
          : Math.floor(px.x % width);
      px.y =
        px.y < 0
          ? Math.floor(height + (px.y % height))
          : Math.floor(px.y % height);

      const pxIndex = getIndex(px.x, px.y);

      newImg[index + 0] = img[pxIndex + 0];
      newImg[index + 1] = img[pxIndex + 1];
      newImg[index + 2] = img[pxIndex + 2];
      newImg[index + 3] = 255;
    }
  }

  self.postMessage(newImg);
};
