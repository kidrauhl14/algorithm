/*reduce를 이용해 배열을 순회하고
new Array(num)를 통해 num길이 만큼의 빈 배열을 만든 후
fill(num)으로 배열의 모든 값을 num으로 채운다. */

function solution(arr) {
  return arr.reduce((list, num) => [...list, ...new Array(num).fill(num)], []);
}

// array.reduce(callback[, initialValue])
