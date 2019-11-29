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
export default function(
  p,
  x1,
  y1,
  x2,
  y2,
  rate,
  showFirstDot = true,
  noisy = true
) {
  if (rate > 0) {
    for (let l = 0; l < 1; l += rate) {
      if (l === 0 && !showFirstDot) continue;
      if ((noisy && p.random() > l) || !noisy) {
        p.point(p.lerp(x1, x2, l), p.lerp(y1, y2, l));
      }
    }
  } else {
    p.line(x1, y1, x2, y2);
  }
}
