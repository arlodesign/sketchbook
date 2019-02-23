function addNoise(intensity = 0.5) {
  const PTS = width * height * 0.02;

  console.log(PTS);

  push();
  for (let i = 0; i < PTS; i++) {
    fill(
      i % 2
        ? `rgba(0, 0, 0, ${intensity})`
        : `rgba(255, 255, 255, ${intensity})`
    );
    noStroke();
    ellipse(
      randomGaussian(width / 2, width / 3),
      randomGaussian(height / 2, height / 3),
      1 / (pixelDensity() / 2)
    );
  }
  pop();
}
