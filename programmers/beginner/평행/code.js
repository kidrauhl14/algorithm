function solution(dots) {
  const [[x1, y1], [x2, y2], [x3, y3], [x4, y4]] = dots;

  if (
    Math.abs((y2 - y1) / (x2 - x1)) == Math.abs((y4 - y3) / (x4 - x3)) ||
    Math.abs((y3 - y1) / (x3 - x1)) == Math.abs((y4 - y2) / (x4 - x2)) ||
    Math.abs((y4 - y1) / (x4 - x1)) == Math.abs((y3 - y2) / (x3 - x2))
  ) {
    return 1;
  } else return 0;
}
