const polarToCartesianX = (center, angle, distance) => {
  return center + Math.cos(angle) * distance;
};
const polarToCartesianY = (center, angle, distance) => {
  return center + Math.sin(angle) * distance;
};

/**
 *
 * @param {number} centerX
 * @param {number} centerY
 * @param {number} angle
 * @param {number} distance
 * @param {bool} asArray
 */
const polarToCartesian = (
  centerX,
  centerY,
  angle,
  distance,
  asArray = false
) => {
  const x = polarToCartesianX(centerX, angle, distance);
  const y = polarToCartesianY(centerY, angle, distance);
  return asArray ? [x, y] : { x, y };
};
const polarToCartesianEllipse = (
  centerX,
  centerY,
  angle,
  radiusX,
  radiusY,
  asArray = false
) => {
  const x = centerX + Math.cos(angle) * radiusX;
  const y = centerY + Math.sin(angle) * radiusY;
  return asArray ? [x, y] : { x, y };
};

export { polarToCartesianX, polarToCartesianY, polarToCartesianEllipse };
export default polarToCartesian;
