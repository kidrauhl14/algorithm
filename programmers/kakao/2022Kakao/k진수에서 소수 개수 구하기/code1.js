// n => k진수로 바꿈
// k안에 소수가 몇 개인가?
// 소수이려면. 2 3 5 7 11 13 17 ... 이래야되지
// (단, 소수 양쪽에 0이 있거나/ k0이거나/ 0k거나 / k인것만 허용)
// 기준이 0임. 양옆에 0이 있거나 / 오른쪽에 0 있거나/ 왼쪽에만 0있거나/ 양쪽에 nothing
// 그럼, 문자열에서 숫자 0을 기준으로 나눠버리면 됨.
// 주의: for문 돌릴 때, 시간복잡도?

// 소수인지 판별하려면? 약수가 1이랑 자기자신뿐이어야함.
// 2 3 5 7 11 13 17 19 23 29 31 37
// 제곱근으로 나눠. 가운데 약수까지만 확인하면 됨
// 예를들어 7이야. 그럼 루트 7은 2.xxx   그럼 for문을 2까지만 돌리겠다

function solution(n, k) {
  const converted = n.toString(k); // converted는 문자열.
  let count = 0;

  // 문자열에서 숫자 0을 기준으로 나누자.
  const numArr = converted.split("0");

  for (let i = 0; i < numArr.length; i++) {
    // 빈 문자열이 아니고, Number(numArr[i])가 2 미만인 경우에만
    if (numArr[i] !== "" && Number(numArr[i]) >= 2) {
      // 각 숫자가 소수인지를 나타내는 논리값
      let isPrime = true;

      const num = Number(numArr[i]);

      for (let j = 2; j <= Math.sqrt(num); j++) {
        if (num % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        count++;
      }
    }
  }
  return count;
}