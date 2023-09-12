function solution(my_string) {
    const words = my_string.trim().split(/ +/);
    const filtered = words.filter(word => word !== ' ');
    return filtered;
}
// split메서드: ( )를 기준으로 문자열을 분리하여 배열로 반환
/*문자열의 맨 처음과 끝에 있는 공백은 분리 대상이 아니므로
 split() 메서드는 문자와 문자 사이에 있는 공백만을 분리한다. */

// 그래서 trim 함수를 써야함
// trim()함수: 문자열에서 앞뒤에 있는 공백 문자(스페이스, 탭, 줄 바꿈)을 제거하는 문자열 메서드.

// 정규표현식 / +/

// split(/ +/): 하나 이상의 공백 문자(공백 문자열)를 기준으로 문자열을 분리하도록 지정
