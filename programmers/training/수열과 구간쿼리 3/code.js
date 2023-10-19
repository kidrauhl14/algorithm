function solution(arr, queries) {
  for (let i = 0; i < queries.length; i++) {
    let query = queries[i];
    let temp = arr[query[0]]; // 임시 변수를 사용하여 값 저장

    // arr[i]와 arr[j]의 값을 서로 바꿉니다.
    arr[query[0]] = arr[query[1]];
    arr[query[1]] = temp;
  }

  return arr;
}
