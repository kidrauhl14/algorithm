// 나의 풀이 (for문, switch case문)
// (numLog[i+1] - numLog[i] == +1)이면: w
// (numLog[i+1] - numLog[i] == -1)이면: s
// (numLog[i+1] - numLog[i] == +10)이면: d
// (numLog[i+1] - numLog[i] == -10)이면: a

function solution(numLog) {
    let answer = "";

    for(let i = 0; i < numLog.length; i++){
        switch(numLog[i+1] - numLog[i]){
            case 1 :
                answer += "w";
                break;
            case -1 :
                answer += "s";
                break;
            case 10 :
                answer += "d";
                break;
            case -10 :
                answer += "a";
                break;
        }
    }
    return answer;
}
