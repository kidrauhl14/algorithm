// 삼각달팽이 문제에서, javascript의 flat메서드를 사용했다.

// flat 메서드란?
// 모든 하위 배열 요소를 지정된 깊이까지 재귀적으로 이어붙여 새로운 배열을 만드는 메서드
// 이 메서드는 배열 내의 중첩된 배열을 '평평하게' 만드는데 사용됨

let nestedArray = [1, 2, [3, 4, [5, 6]]];
// flat() 메서드를 사용하면 다음과 같이 중첩된 배열을 평평하게 만들 수 있다
let flattenedArray = nestedArray.flat();
console.log(flattenedArray);
// Output: [1, 2, 3, 4, [5, 6]]
// 기본적으로 flat() 메서드는 1단계 깊이까지만 평평하게 만든다. 
// 만약 더 깊은 단계까지 평평하게 만들고 싶다면, flat() 메서드에 숫자를 인자(평평하게 만들고자 하는 깊이)로 전달하면 됨

// 예를 들어, 위의 예제에서 2단계 깊이까지 평평하게 만들고 싶다면?
let deeplyFlattenedArray = nestedArray.flat(2);
console.log(deeplyFlattenedArray);
// Output: [1, 2, 3, 4, 5, 6]