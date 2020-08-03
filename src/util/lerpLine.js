/**
 * Creates a line of points at a specified interval (the rate)
 *
 * @param {obj} p The current p5.js drawing context
 * @param {*} x1
 * @param {*} y1
 * @param {*} x2
 * @param {*} y2
 * @param {*} rate Number between 0 and 1 to determine how often to draw a point
 * @param {*} showFirstDot Defaults to true
 * @param {*} noisy Defaults to true
 */
function lerpLine(p, x1, y1, x2, y2, rate, showFirstDot = true, noisy = true) {
  const thisRate = Math.max(rate, 0.01 / p.dist(x1, y1, x2, y2));

  for (let l = 0; l < 1; l += thisRate) {
    if (l === 0 && !showFirstDot) continue;
    if ((noisy && p.random() > l) || !noisy) {
      p.point(p.lerp(x1, x2, l), p.lerp(y1, y2, l));
    }
  }
}

export default lerpLine;
