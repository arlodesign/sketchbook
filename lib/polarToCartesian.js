function polarToCartesianX(center, angle, distance) {
  return center + cos(angle) * distance;
}
function polarToCartesianY(center, angle, distance) {
  return center + sin(angle) * distance;
}
function polarToCartesian(center, angle, distance) {
  return {
    x: polarToCartesianX(...arguments),
    y: polarToCartesianY(...arguments)
  };
}
