function solution(ineq, eq, n, m) {
  let answer = 0;

  if (ineq === "<" && eq === "=") {
    answer = n <= m ? 1 : 0;
  } else if (ineq === "<" && eq === "!") {
    answer = n < m ? 1 : 0;
  } else if (ineq === ">" && eq === "=") {
    answer = n >= m ? 1 : 0;
  } else if (ineq === ">" && eq === "!") {
    answer = n > m ? 1 : 0;
  }

  return answer;
}

/* 
const result = solution("<", "=", 20, 50);
console.log(result);
위 테스트케이스의 경우,기댓값은 1인데
실행한 결괏값은 0이 나오는 에러가 있었다.

알고보니, 내가 작성한 solution함수에서 매개변수를 n, m, ineq, eq 순서로 받아서였다.
function solution(n, m, ineq, eq)이런 식으로 작성해서 생긴 에러.

그래서 ineq, eq, n, m 순서로 바꿔서 넣어줬더니, 값이 제대로 나왔다.
입출력 예시를 꼼꼼히 보고, 매개변수 순서에 유의해라!!!!!!!!
*/


