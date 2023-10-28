function solution(lottos, win_nums) {
  // 0이 아닌 숫자 중, 당첨번호의 개수
  let count = 0;
  //lottos배열 중에서 0의 개수
  let zeroCount = 0;

  let highest, lowest;

  for (let i = 0; i < lottos.length; i++) {
    if (lottos[i] != 0) {
      if (win_nums.includes(lottos[i])) {
        count++;
      }
    } else zeroCount++;
  }

  highest = count + zeroCount;
  lowest = count;

  return [7 - Math.max(highest, 1), 7 - Math.max(lowest, 1)];
}
