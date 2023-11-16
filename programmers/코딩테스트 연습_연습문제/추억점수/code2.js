// 다른 사람의 풀이
// main로직: map메서드, reduce메서드, indexOf
// const yearnScore = yearning[name.indexOf(val)] || 0
// : 현재 처리하는 사람(val)의 추억점수를 찾습니다. 
// 먼저 name 배열에서 val의 인덱스를 찾고, 
// 그 인덱스를 이용해 yearning 배열에서 해당 사람의 추억점수를 가져옵니다. 
// 만약 사람이 name 배열에 없어서 추억점수를 찾을 수 없는 경우, 추억점수를 0으로 설정합니다.


function solution(name, yearning, photo) {

  // photo 배열의 각 요소(사진 그룹)에 대해 주어진 함수를 실행하고, 그 결과를 새 배열에 저장
  return photo.map((group) =>

    //그룹의 모든 사람에 대한 추억점수의 합을 계산합니다. val은 현재 처리하는 사람의 이름
    group.reduce((acc, val) => {
      //  yearning[name.indexOf(val)]가 undefined 또는 false, null, NaN, 0, "" 등의 "falsy" 값일 경우, 0을 반환
      const yearnScore = yearning[name.indexOf(val)] || 0;

      // 추억점수를 누산기(acc)에 더하고, 그 결과를 다음 단계의 누산기 값으로 반환합니다.
      return acc + yearnScore;
    }, 0)
  );
}



