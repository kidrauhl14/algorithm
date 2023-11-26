// 탐색 알고리즘이란? 주어진 자료를 통해 원하는 결과를 찾아내는 알고리즘
// 이를 통해 데이터의 정렬, 검색, 그래프 이론 등 다양한 문제 해결(ex. 이진 탐색, 깊이-우선 탐색(DFS), 너비-우선 탐색(BFS) 등)

// brown과 yellow의 수를 통해 카펫의 전체 크기를 찾아내려면,
// 갈색 격자의 수와 노란색 격자의 수를 더한 후,
// 이를 가로와 세로의 곱으로 표현할 수 있는 모든 경우의 수를 찾는다.
// 그리고 이 중에서 가로 길이가 세로 길이와 같거나, 세로 길이보다 긴 경우를 찾으면 된다. (제한사항 참고)
// 완전탐색: 가능한 모든 경우의 수를 전부 검사해 보는 알고리즘.
// 가능한 모든 height 값에 대해 검사를 수행

// 예를 들어 가로+세로 값이 16이면: 16*1, 8*2, 4*4
function solution(brown, yellow) {
    const total = brown + yellow;
    for(let height = 3; height <= total; height++){ //세로 길이가 최소 3 이상이 돼야함
        
        if(total % height == 0){
            const width = total / height;
            
            // 카펫의 가운데 노란색 부분 계산
            if((width-2) * (height-2) == yellow){ // 갈색 격자 테두리 부분을 제외한다.
                return width >= height ? [width, height] : [height, width];
            }
        }
    }
}


