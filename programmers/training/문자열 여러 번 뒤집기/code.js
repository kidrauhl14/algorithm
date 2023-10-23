// 핵심: slice 메서드, splice 메서드, reverse메서드

function solution(my_string, queries) {
  // 1. 일단, 문자열을 배열로 변환
  let arr = my_string.split("");

  // 2. 각 쿼리에 대한 처리
  for (let query of queries) {
    let start = query[0];
    let end = query[1];

    // 3. 시작 인덱스 ~ 종료 인덱스 사이 부분 뒤집기 (slice메서드, splice메서드, reverse메서드)
    let slicedArr = arr.slice(start, end + 1).reverse();
    arr.splice(start, end - start + 1, ...slicedArr);
  }

  return arr.join("");
}


// Array.prototype.slice() 메서드: 특정 범위의 원소들만 선택하고,
// Array.prototype.reverse() 메서드: 선택된 원소들의 순서를 뒤집는다.
// Array.prototype.splice(): 원래 배열에서 해당 범위의 원소들을 제거하고, 뒤집힌 원소들로 대체한다.
