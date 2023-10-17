function solution(order) {
  let answer = 0;
  // 메뉴
  // 아메리카노(4500)-hot/ice,  라테(5000)-hot/ice
  for (let i = 0; i < order.length; i++) {
    if (order[i].includes("americano")) answer += 4500;
    if (order[i].includes("cafelatte")) answer += 5000;
    if (order[i].includes("anything")) answer += 4500;
  }
  return answer;
}
