// [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]
// 12개니까 => 3개씩 담으면 => 4상자
// 일단 sort해서. 내림차순으로 정렬: score.sort((a,b) => b-a)
// 그렇게하면, 4  4  4  4  4  4 2 2 2 2 1 1 이렇게됨: 4가 6개, 2가 4개, 1이 2개
// 만약에 높은순서대로 그룹짜주면: 444 444 222 211 이렇게하면 4 + 4 + 2 + 1
// 근데 만약에 이걸 섞어서 그룹을 짜면? : 412 221 이런 식으로 하면. 점수가 더 낮아진다. 
// 그러니까 높은순서대로 앞에서부터 잘라서 grouping해야한다. (최저점수를 각 그룹별로 높여야함)

function solution(k, m, score) {
  let answer = 0;
  score.sort((a, b) => b - a);
  score.forEach((s, idx) => {
    // m값을 동적으로 처리
    if (idx >= m - 1 && idx % m === m - 1) {
      const groupBox = score.slice(idx - (m - 1), idx + 1);
      answer += Math.min(...groupBox) * m;
    }
    // 위에서, m개가 찰 때마다 상자를 하나씩 만들고있으므로, 상자가 만들어지지 않으면 계산이 안된다.
    // 그러므로 남은 사과에 대한 예외처리는 할 필요가 없다.
  });
  return answer;
}


// 참고) slice메서드
// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// console.log(animals.slice(이상, 미만!!);