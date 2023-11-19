// 다른 사람의 풀이 
// reduce 메서드를 사용하여, numLog 배열을 순회하면서, 조작에 따른 문자열을 구한다.

function solution(numLog) {
  return numLog.reduce((acc, curr, idx) => {
    const diff = curr - numLog[idx - 1]; // 현재 원소와 이전 원소의 차이를 계산

    // diff 값에 따라 조작에 대응하는 문자열을 더해감
    return (
      acc +
      (diff === 1
        ? "w"
        : diff === 10
        ? "d"
        : diff === -1
        ? "s"
        : diff === -10
        ? "a"
        : "")
    );
  }, "");
}

