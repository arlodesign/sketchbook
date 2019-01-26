function addNoise(intensity = 0.5) {
  for (let i = 0; i < 10000; i++) {
    stroke(
      i % 2
        ? `rgba(0, 0, 0, ${intensity})`
        : `rgba(255, 255, 255, ${intensity})`
    );
    point(
      randomGaussian(width / 2, width / 3),
      randomGaussian(height / 2, height / 3)
    );
  }
}
