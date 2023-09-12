function solution(rank, attendance) {
    let a = 0, b = 0, c = 0;
    let copiedRank = rank.slice(); // 배열 복사 (얕은 복사: 내부 객체나 배열은 원본과 공유되므로, 하나를 수정하면 다른 것도 영향을 받음)
    
    for(let i = 0; i < attendance.length; i++){
        if(!attendance[i]){
            copiedRank[i] = 100; // 결석한 학생의 순위(rank)는 100으로 바꿈
        }
    }
    
    // 오름차순 정렬
    let setRanked = [...copiedRank].sort((a, b) => a - b);
    
    // a, b, c 값 계산
    // 주의: 학생들의 번호는 0번부터 시작함
    a = rank.indexOf(setRanked[0]);
    b = rank.indexOf(setRanked[1]);
    c = rank.indexOf(setRanked[2]);
    
    return 10000 * a + 100 * b + c;
}