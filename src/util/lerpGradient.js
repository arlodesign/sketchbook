/**
 * Like lerpColor(), but for multiple colors
 *
 * @param {obj} p The current p5.js drawing context
 * @param {Number} amt number between 0 and 1
 * @param {p5.Color} stops colors to use in the gradient
 */
function lerpGradient(p, amt, ...stops) {
  const firstStop =
    amt === 1 ? stops.length - 2 : p.floor(amt * (stops.length - 1));

  const lerpColorAmt = p.map(
    amt,
    firstStop / (stops.length - 1),
    (firstStop + 1) / (stops.length - 1),
    0,
    1,
    true
  );

  return p.lerpColor(stops[firstStop], stops[firstStop + 1], lerpColorAmt);
}

export default lerpGradient;
