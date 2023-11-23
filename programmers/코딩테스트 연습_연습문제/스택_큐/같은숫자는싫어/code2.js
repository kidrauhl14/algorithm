function solution(arr) {
  return arr.filter((val, index) => val != arr[index + 1]);
}
/*
이 코드는 효율성 문제가 있을 수 있다.
filter 함수의 콜백 함수가 각 요소마다 호출되기 때문에 중복 검사가 불필요하게 많이 수행되기 때문일 수 있습니다. 
특히 큰 배열에서는 성능에 영향을 미칠 수 있습니다.
연속된 중복을 제거하는 작업은 스택 또는 큐를 사용하여 더 효율적으로 수행할 수 있습니다.
 */


