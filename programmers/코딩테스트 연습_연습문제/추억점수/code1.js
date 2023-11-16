// 나의 풀이
function solution(name, yearning, photo) {
  // map객체를 만들어서 (해시 테이블)
  let scoreMap = new Map();
  // key 값: name, value값: yearning으로 준다.

  for (let i = 0; i < name.length; i++) {
    scoreMap.set(name[i], yearning[i]);
  }

  // 그리움 점수가 없는 사람에 대한 예외조건 추가 (그리움 점수가 없는 사람: 0점)
  return photo.map((group) =>
    group.reduce(
      (acc, person) =>
        scoreMap.has(person) ? acc + scoreMap.get(person) : acc + 0,
      0)
  );
}





