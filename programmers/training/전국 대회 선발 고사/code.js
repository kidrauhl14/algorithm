// rank와 attendance의 속성을 갖는는 객체를 만든다.
// (attendance가 true인 학생들) 중에서
// rank가 높은 순서대로 해당 학생들의 번호(인덱스): a,b,c
// return  10000 × a + 100 × b + c;

function solution(rank, attendance) {
  const rankSet = rank
    .map((rankValue, rankIdx) => ({ rankValue, rankIdx }))
    .filter((_, idx) => attendance[idx]);

  rankSet.sort((a, b) => a.rankValue - b.rankValue);
  
  const answer =
    rankSet[0].rankIdx * 10000 + rankSet[1].rankIdx * 100 + rankSet[2].rankIdx;
  return answer;
}