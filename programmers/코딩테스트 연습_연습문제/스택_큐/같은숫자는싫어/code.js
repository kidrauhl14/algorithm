//이 코드의 시간 복잡도는 효율적이며, 배열을 한 번만 순회하기 때문에 성능이 떨어지지 않음
function solution(arr) {
  var answer = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] !== arr[i]) answer.push(arr[i]);
  }

  return answer;
}

