/*  n = 4 일 때 아래와 같은 배열을 먼저 생성한다
    [
        [0],
        [0, 0],
        [0, 0, 0],
        [0, 0, 0, 0],
*/

function solution(n) {
  //(_, i) => Array(i + 1).fill(0) :2차원 배열 생성
  // 이 함수에서 _는 현재 요소의 값(이 경우에는 undefined),
  // i는 현재 요소의 인덱스

  //이 함수는 길이가 n인 배열을 생성하고, 이 배열의 각 요소를 길이가 1부터 i+1까지인 새로운 배열로 대체
  // 그리고 이 새로운 배열의 모든 요소는 0으로 채워짐
  const answer = Array(n)
    .fill()
    .map((_, i) => Array(i + 1).fill(0)); //각 내부 배열의 길이는 해당 배열의 인덱스 + 1 (해당 행 번호 +1)

  /*배열에 1부터 n*(n+1)/2까지의 숫자를 채우는 작업을 수행합니다. 
  이 때 숫자는 특정한 패턴에 따라 채워집니다
  : 먼저 세로 방향으로 채우고, 그 다음 가로 방향으로 채우며, 마지막으로 대각선 방향(좌 상단)으로 채웁니다. 
  이 작업을 반복하면서 모든 칸을 채웁니다. */
  // n = 4 => 1+2+3+4 = 10
  const size = (n * (n + 1)) / 2; // 삼각형 모양의 2차원 배열에 채울 숫자의 총 개수

  // 초기값 설정: (i: 0, j: 0, count: 1)
  let [i, j, count] = [0, 0, 1]; // i와 j: 2차원 배열의 행과 열 인덱스, count: 채울 숫자

  
  // 배열을 모두 채울 때 까지 반복
  //세 가지 동작(세로 채우기 -> 가로 채우기 -> 대각선 채우기)을 반복하여 
  //  삼각형 모양의 2차원 배열에 숫자를 채움
  while (count <= size) {

    // 세로 채우기: 배열 범위 내에 있고, 해당 위치에 아직 숫자가 채워지지 않았을 때
    while (i < n && !answer[i][j]) {
      // 해당 위치에 count 값을 채우고, i와 count를 1씩 증가
      answer[i++][j] = count++;
    }

    // i === n 이 되면 위 반복문을 탈출하기 때문에, -1을 해서 배열길이-1 상태로 만듦
    // j++ -> 오른쪽으로 이동
    i--, j++;

    // 가로 채우기
    while (j < n && !answer[i][j]) {
      answer[i][j++] = count++;
    }
    // i-- -> 위로 이동
    // j === n 이 되면 위 반복문을 탈출, answer[i-1]은 answer[i]보다 길이가 1 짧기 때문에 -2를 적용
    i--, (j -= 2);

    // 대각선 채우기
    // i, j 모두 1씩 감소하며 좌 상단으로 이동하며 값을 채운다
    while (i > 0 && j > 0 && !answer[i][j]) {
      // 배열 범위 내에 있고, 해당 위치에 아직 숫자가 채워지지 않았을 때
      answer[i--][j--] = count++;
    }
    // 좌 상단으로 이동했기 때문에 다음 채울 칸은 i+2, j+1이다
    (i += 2), j++;
  }

  // 2차원 배열 -> 1차원 배열로 바꿈
  return answer.flat();
}
