export default function(p, x1, y1, x2, y2, rate, showFirstDot = true) {
  for (let l = 0; l < 1; l += rate > 0 ? rate : 1 / p.dist(x1, y1, x2, y2)) {
    if (l === 0 && !showFirstDot) continue;
    p.random() > l && p.point(p.lerp(x1, x2, l), p.lerp(y1, y2, l));
  }
}
