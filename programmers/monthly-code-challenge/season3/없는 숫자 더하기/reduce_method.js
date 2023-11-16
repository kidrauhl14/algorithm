// reduce메서드에 대하여
// 배열의 각 요소에 대해 주어진 리듀서 함수를 실행하고, 단일 출력 값으로 결과를 반환. 
// 이 메서드는 배열을 순회하면서 현재 요소를 이용해 계산된 결과를 
// 다음 순회의 입력으로 전달하는데, 
//이 때 계산된 결과를 '누산값(accumulator)'라고 부릅니다.

// 리듀서 함수는 네 가지 인수를 받습니다:

// 1. 누산기(accumulator)
// 2. 현재 값(currentValue)
// 3. 현재 인덱스(currentIndex)
// 4. 원본 배열(array)

// reduce() 메서드의 기본 구문
array.reduce(function(accumulator, currentValue, currentIndex, array), initialValue);

// 여기서 initialValue는 선택적 인수로, 첫 번째 리듀서 호출에서 첫 번째 인수(누산기)의 초기값을 제공합니다. 
// 이 값이 제공되지 않으면 배열의 첫 번째 요소가 누산기의 초기값으로 사용됩니다.
// 예를 들어, 배열의 모든 숫자를 더하는 간단한 예제는 다음과 같습니다:
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // 15

//위 예제에서 reduce() 메서드는 각 배열 요소에 대해 누산기와 현재 값을 더하고, 그 결과를 다음 순회의 누산기 값으로 전달합니다.

// 자바스크립트의 reduce() 메서드는 매우 유연하여 다양한 상황에서 사용할 수 있습니다. 

// 예를 들어, 배열의 최대값을 찾거나, 배열 내 객체를 특정 조건에 따라 분류하는 것도 가능합니다.

