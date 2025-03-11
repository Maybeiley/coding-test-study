// 문제: 평균 구하기
// 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

function solution(arr) {
  let sum = arr.reduce((arr, curr) => arr + curr, 0);
  return sum / arr.length;
}
