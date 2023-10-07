// 코딩테스트 연습 > 코딩테스트 입문 > 안전지대
// https://school.programmers.co.kr/learn/courses/30/lessons/120866

// 나의 의도: 일일이 for문 돌려서 board[i][j]가 있으면 
// => 해당 board[i][j]가 위험지대인지 확인하고, => 값을 2로 바꿔준다.
// 그리고나서 2의 개수를 세서 return한다.

// 그래서 아래와 같이 풀었는데, 에러 발생 (실행한 결괏값이 기댓값과 다름)

function solution(board) {
  let count = 0;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] == 1) {
        if (board[i - 1] && board[i - 1][j - 1] == 0) {
          board[i - 1][j - 1] = 2;
        }
        if (board[i - 1] && board[i - 1][j] == 0) {
          board[i - 1][j] = 2;
        }
        if (board[i - 1] && board[i - 1][j + 1] == 0) {
          board[i - 1][j + 1] = 2;
        }

        if (board[i][j - 1] == 0) {
          board[i][j - 1] = 2;
        }

        board[i][j] = 2;

        if (board[i][j + 1] == 0) {
          board[i][j + 1] = 2;
        }

        if (board[i + 1] && board[i + 1][j - 1] == 0) {
          board[i + 1][j - 1] = 2;
        }
        if (board[i + 1] && board[i + 1][j] == 0) {
          board[i + 1][j] = 2;
        }
        if (board[i + 1] && board[i + 1][j + 1] == 0) {
          board[i + 1][j + 1] = 2;
        }
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] == 2) {
        count++;
      }
    }
  }
  return count;
}


//     board[i-1][j-1 ~ j ~ j+1]
//     board[i][[j-1 ~ j ~ j+1]
//     board[i+1][j-1 ~ j ~ j+1]
//     개수 다 센 다음... board[i][j]의 전체 원소 개수에서 빼려고 한다.

/* 입출력 예
[0, 0, 0, 0, 0]
[0, 0, 0, 0, 0]
[0, 0, 0, 0, 0]
[0, 0, 1, 0, 0]
[0, 0, 0, 0, 0]
=> 그럼 이 케이스에서는 위험지역이 8개, 안전지역이 25-8-1=16개이다.*/

/* 입출력 예: 안전지역은 25-12 = 13개
[0, 0, 0, 0, 0]
[0, 0, 0, 0, 0]
[0, 0, 0, 0, 0]
[0, 0, 1, 1, 0]
[0, 0, 0, 0, 0]
*/