function polarToCartesianX(center, angle, distance) {
  return center + cos(angle) * distance;
}
function polarToCartesianY(center, angle, distance) {
  return center + sin(angle) * distance;
}
function polarToCartesian(centerX, centerY, angle, distance) {
  return {
    x: polarToCartesianX(centerX, angle, distance),
    y: polarToCartesianY(centerY, angle, distance)
  };
}
