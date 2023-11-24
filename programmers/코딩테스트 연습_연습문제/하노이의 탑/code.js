// n개의 원판을,  기둥 1 -> 기둥 3으로 옮겨야함

// 입출력 예시
// 1번 기둥에서 2번 기둥으로 원판을 옮깁니다. ([1,2])
// 1번 기둥에서 3번 기둥으로 원판을 옮깁니다. ([1,3])
// 2번 기둥에서 3번 기둥으로 원판을 옮깁니다. ([2,3])

// 재귀함수
function solution(n) {
  let answer = [];

  function hanoi(n, from, to, via) {
    //num:원반개수, from:출발점, to:도착점, via: 경유점
    if (n === 1) answer.push([from, to]);
    else {
      hanoi(n - 1, from, via, to); //n-1 개의 원판을 from에서 via로 옮긴다
      answer.push([from, to]); //남은 하나의 원판을 from에서 to로 옮긴다
      hanoi(n - 1, via, to, from); //마지막으로, 처음에 옮겼던 n-1 개의 원판을 via에서 to로 옮긴다
    }
  }

  hanoi(n, 1, 3, 2);
  return answer;
}
