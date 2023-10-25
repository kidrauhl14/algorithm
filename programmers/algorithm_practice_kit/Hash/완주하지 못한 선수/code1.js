// participant: 마라톤에 참여한 선수들의 이름이 담긴 배열
// completion: 완주한 선수들의 이름이 담긴 배열

// return할 값: 완주하지 못한 선수의 이름

// 풀이방법1.  [해시 알고리즘]
// 해시(Hash)는 데이터를 저장하는 방식 중 하나로,  
// 어떤 데이터에 대한 고유한 식별자를 생성하는 함수다. 이 식별자를 해시 값이라고 하며, 
// 해시 함수에 같은 입력이 주어지면 항상 같은 해시 값이 반환된다. 해시는 주로 검색이나 데이터의 무결성 검증 등 다양한 용도로 사용된다.
// 해시 함수를 사용하여 데이터를 해싱한 후에 그 값을 키(key)로 사용하여 데이터에 빠르게 접근할 수 있다.
// 딕셔너리나 집합 같은 자료구조에서 해시 함수는 중요한 역할을 한다.


/*JavaScript에서는 객체를 사용하여 간단한 해시를 구현할 수 있다.

각 참가자의 이름을 해시 테이블에 저장하고, 
완주자 명단을 확인하면서 해당 이름을 제거한다.
남아있는 이름이 완주하지 못한 선수의 이름이 된다. */

function solution (participant, completion){
  // hashTable 객체를 만들어서, 참가자의 이름과 등장 횟수를 저장하는 해시 테이블로 활용. 
    const hashTable = {};

  // 먼저 참가자 명단을 순회하며 해시 테이블에 이름을 추가하고, 
    for(const name of participant){
        if (hashTable[name]){
            hashTable[name]++;
        } else {
            hashTable[name] = 1;
        }
    }

  // 다음으로 완주자 명단을 순회하며 해당 이름을 해시 테이블에서 제거
    for(const name of completion){
        hashTable[name]--;
        if(hashTable[name] === 0){
            delete hashTable[name];
        }
    }

  // 마지막으로 해시 테이블에 남아 있는 이름이 완주하지 못한 선수의 이름
    const result = Object.keys(hashTable)[0];
    return result;
}
