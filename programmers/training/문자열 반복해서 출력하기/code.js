// 입력 예: string 5

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

// 입력 스트림에서 한 줄을 읽을 때마다 실행되는 이벤트 핸들러입니다.
// 입력된 줄을 공백을 기준으로 분리하여 input 배열에 저장합니다.
rl.on("line", function (line) {
  input = line.split(" ");

  //입력 스트림이 종료되었을 때 실행되는 이벤트 핸들러입니다.
  // 이때 input 배열에 저장된 값으로부터 str과 n 값을 추출합니다.
}).on("close", function () {
  //input 배열의 첫 번째 요소를 str 변수에 할당합니다.
  // 즉, 사용자로부터 입력받은 문자열이 str 변수에 저장됩니다.
  str = input[0];
  n = Number(input[1]);

  const repeatedString = str.repeat(n);
  console.log(repeatedString);
});
