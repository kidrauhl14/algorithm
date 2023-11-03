// 날짜 계산
const calculateDayPast = (year, month, day) =>
  year * 12 * 28 + month * 28 + day;

function solution(today, terms, privacies) {
  const todayDayPast = calculateDayPast(
    ...today.split(".").map((stringDate) => Number(stringDate))
  );
  const termsSet = {};
  terms.forEach((term) => {
    const [type, month] = term.split(" ");
    termsSet[type] = Number(month);
  });

  // privacies.map으로 각 데이터에 대해 다음 작업을 수행합니다
  const answer = privacies
    .map((privacy, privacyNumber) => {
      // 데이터의 생성된 날짜와 유형을 분리
      const [date, type] = privacy.split(" ");
      const [year, month, day] = date
        .split(".")
        .map((stringDate) => Number(stringDate));

      // 해당 데이터 유형의 보관 기간을 더한 후, 총 일수로 변환합니다.
      // -1은 보관 가능 기간이 지난 후 하루 전까지를 의미합니다.
      const privacyDayPast =
        calculateDayPast(year, month + termsSet[type], day) - 1;

      // 만약 이 총 일수가 현재 날짜의 총 일수보다 작다면(현재 날짜가 보관 기간을 초과했다면), 데이터의 번호(privacyNumber+1)를 반환합니다.
      // 그렇지 않다면 null을 반환합니다.
      if (privacyDayPast < todayDayPast) {
        return privacyNumber + 1;
      } else {
        return null;
      }
    })
    .filter((privacyNumber) => privacyNumber); // filter 함수로 null 값을 제거

  return answer; // 파기해야 하는 데이터의 번호 리스트를 반환
}
