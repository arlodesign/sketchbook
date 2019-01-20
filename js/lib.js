function lineIntersection(x1, y1, x2, y2, x3, y3, x4, y4) {
  const uA =
    ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) /
    ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1));
  const uB =
    ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) /
    ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1));

  if (uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1) {
    return { x: x1 + uA * (x2 - x1), y: y1 + uA * (y2 - y1) };
  }
  return { x: null, y: null };
}

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

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
