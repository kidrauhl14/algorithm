// 코딩테스트 연습 > 코딩테스트 입문 > 안전지대
// https://school.programmers.co.kr/learn/courses/30/lessons/120866

// 정답 코드

function solution(board) {
  // 주어진 위치 주변에 있는 위험한 지역을 찾아주는 함수
  const addDangerousPosition = (mineRowIdx, mineColIdx, maxRow, maxCol) => {
    const dangerousIdxs = [];

    // 3x3 영역을 순회하면서 인덱스를 계산하여 배열에 추가
    for (let i = mineRowIdx - 1; i < mineRowIdx - 1 + 3; i++) {
      for (let j = mineColIdx - 1; j < mineColIdx - 1 + 3; j++) {
        const idx = maxRow * i + j;

        // 유효한 인덱스인 경우에만 추가
        if (0 <= i && i < maxRow && 0 <= j && j < maxCol) {
          dangerousIdxs.push(idx);
        }
      }
    }

    return dangerousIdxs;
  };

  // 위험한 지역의 인덱스를 저장할 배열
  const dangerousIdxs = [];

  // 보드의 행을 순회
  board.forEach((rows, rowIdx) => {
    // 행의 각 원소를 순회
    rows.forEach((target, colIdx) => {
      // 지뢰가 있는 위치인 경우
      if (target === 1) {
        // 주변의 위험한 지역을 찾아서 배열에 추가
        const newDangerousIdxs = addDangerousPosition(
          rowIdx,
          colIdx,
          board.length,
          board[0].length
        );
        dangerousIdxs.push(...newDangerousIdxs);
      }
    });
  });

  // 중복된 지역을 제외하고, 안전한 지역의 개수를 계산
  const answer =
    board.length * board[0].length - [...new Set(dangerousIdxs)].length;

  return answer;
}
