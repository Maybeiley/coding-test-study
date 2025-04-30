// 문제: 최빈값 구하기
// 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다.
// 정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요.
// 최빈값이 여러 개면 -1을 return 합니다.

function solution(array) {
  let count = {};
  let maxValue = 0;
  let maxKeys = [];

  for (let num of array) {
    count[num] = count[num] + 1 || 1;
  }

  for (let key in count) {
    if (count[key] > maxValue) {
      maxValue = count[key];
      maxKeys = [key];
    } else if (count[key] === maxValue) {
      maxKeys.push(key);
    }
  }

  return maxKeys.length > 1 ? -1 : Number(maxKeys[0]);
}
