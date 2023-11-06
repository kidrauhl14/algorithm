function solution(absolutes, signs) {
  return absolutes.reduce(
    (acc, val, idx) => acc + val * (signs[idx] ? 1 : -1),
    0
  );
}



