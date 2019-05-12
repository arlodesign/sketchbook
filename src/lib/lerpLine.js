export default function(p, x1, y1, x2, y2, rate, showFirstDot = true) {
  if (rate <= 0)
    throw new Error("rate for lerpLine() must be greater than zero");

  for (let l = 0; l < 1; l += rate) {
    if (l === 0 && !showFirstDot) continue;
    p.random() > l && p.point(p.lerp(x1, x2, l), p.lerp(y1, y2, l));
  }
}
