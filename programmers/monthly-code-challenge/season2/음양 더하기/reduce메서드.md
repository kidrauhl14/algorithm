### reduce() 메소드
- 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 단일 출력 값을 반환 
- 배열을 통해 값을 누적할 때 주로 사용

##### reduce() 메소드의 기본 구조: 
```
array.reduce(function(accumulator, currentValue, currentIndex, array), initialValue);
```

- 여기서 callback은 배열의 각 요소에 대해 실행될 함수이며, 
- initialValue는 선택사항으로, 누산기의 초기값을 설정하는 데 사용됩니다.

- callback 함수는 네 개의 매개변수를 받습니다:

- accumulator (누산기): 이전의 콜백 호출에서 반환된 값이며, callback이 처음 호출되면 initialValue를 제공하거나 배열의 첫 번째 요소를 사용합니다.
- currentValue (현재 값): 배열에서 현재 처리 중인 요소입니다.
- currentIndex (현재 인덱스): 배열에서 현재 처리 중인 요소의 인덱스입니다. initialValue가 제공되면 0, 그렇지 않으면 1부터 시작합니다.
- array (배열): reduce()가 호출된 배열입니다.



##### [reduce 메서드 사용 예시]
```
let array = [1, 2, 3, 4];
let sum = array.reduce(function(accumulator, currentValue) {
   return accumulator + currentValue;
 }, 0);

 console.log(sum); // 결과: 10
```
