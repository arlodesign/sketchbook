const addNoise = (p, intensity = 0.5) => {
  const PTS = p.width * p.height * 0.02;

  p.push();
  for (let i = 0; i < PTS; i++) {
    p.fill(
      i % 2
        ? `rgba(0, 0, 0, ${intensity})`
        : `rgba(255, 255, 255, ${intensity})`
    );
    p.noStroke();
    p.ellipse(
      p.randomGaussian(p.width / 2, p.width / 3),
      p.randomGaussian(p.height / 2, p.height / 3),
      1 / (p.pixelDensity() / 2)
    );
  }
  p.pop();
};

export default addNoise;
