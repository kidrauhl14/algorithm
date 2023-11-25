// 동적 계획법(Dynamic Programming)
// 삼각형의 꼭대기에서 바닥까지 이어지는 경로 중, 거쳐간 숫자의 합이 가장 큰 경우를 찾는 문제
// 재귀로도 문제를 풀 수 있지만, 중복 계산이 발생해 효율이 떨어질 수 있음(시간초과)

function solution(triangle) {
  // 삼각형 배열을 거꾸로 탐색 (맨 아랫줄부터 접근)
  for (let i = triangle.length - 1; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length - 1; j++) {
      const temp = Math.max(triangle[i][j], triangle[i][j + 1]);
      // 주어진 삼각형 배열을 직접 수정하면서 계산하기 때문에 추가적인 공간을 사용하지 않아도 되는 장점이 있음
      triangle[i - 1][j] += temp;
    }
  }
  return triangle[0][0];
}

