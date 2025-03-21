// 카펫
function solution(brown, yellow) {
  const total = brown + yellow;
  let array = [];
  for (let i = 1; i <= total; i++) {
    if (total % i === 0) {
      let width = total / i;
      let height = i;
      array.push([width, height]);
    }
  }
  for (let [width, height] of array) {
    if ((width - 2) * (height - 2) === yellow) {
      return [width, height];
    }
  }
}

// 1. 전체 넓이에서 약수를 구한다.
// 2. 너비, 높이 -2를 한 후 곱한 것이 yellow의 개수와 같다면
// 3. 그 값을 return
