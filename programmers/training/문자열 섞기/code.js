function solution(str1, str2) {
  return [...str1].map((x, idx) => x + str2[idx]).join("");
}

/* [...str1]: str1 문자열을 배열로 변환합니다. 
이를 통해 str1의 각 문자들이 배열의 요소로 변환됩니다.*/

/*
.map((x, idx) => x + str2[idx]): map 함수를 사용하여 배열의 각 요소에 접근합니다. 
매개변수 x는 str1의 각 문자, idx는 현재 요소의 인덱스를 나타냅니다. 
 */
