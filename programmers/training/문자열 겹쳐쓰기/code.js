function solution(my_string, overwrite_string, s) {
  //JS에서 문자열은 불변(immutable)한다.
  // 문자열의 각 문자를 직접 수정할 수 없다는 의미
  // 문자열을 배열로 바꾼 후 변경한 다음, 다시 문자열로 변환하는 것이 일반적인 방법
  //split('')로 문자열을 배열로 변환하고, 변경 후에 join('')으로 다시 문자열로 변환
  let my_string_array = my_string.split("");

  for (let i = s, j = 0; i < s + overwrite_string.length; i++, j++) {
    my_string_array[i] = overwrite_string[j];
  }
  return my_string_array.join("");
}
