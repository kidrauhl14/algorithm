// participant: 마라톤에 참여한 선수들의 이름이 담긴 배열
// completion: 완주한 선수들의 이름이 담긴 배열

// return할 값: 완주하지 못한 선수의 이름

// 풀이방법2.  [배열 정렬 -> 비교]
function solution(participant, completion) {
  // 참가자 명단과 완주자 명단을 정렬
  participant.sort();
  completion.sort();

  // 완주하지 못한 선수 찾기
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}
