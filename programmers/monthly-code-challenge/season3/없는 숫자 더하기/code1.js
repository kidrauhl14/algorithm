// reduce메서드를 활용하면, 
// 배열의 모든 원소를 순회하면서 누산기에서 현재 원소 값을 뺄 수 있다.

// "없는 숫자 더하기" (== 있는 숫자를 빼기)

// 0부터 9까지의 숫자를 모두 더한 값인 45에서 
// numbers 배열의 모든 원소를 빼는 방식으로 문제 해결

function solution(numbers) {
  var answer = -1;

  answer = numbers.reduce((acc, cur) => acc - cur, 45);
  return answer;
}

// reduce() 메서드의 기본 구문
// array.reduce(function(accumulator, currentValue, currentIndex, array), initialValue);