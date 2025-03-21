// 이전 추천 문제: 약수의 개수와 덧셈
// 두 정수 left와 right가 매개변수로 주어집니다.
// left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고,
// 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

function solution(left, right) {
  let result = [];

  for (let i = left; i <= right; i++) {
    let count = 0;

    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        count++;
        if (j !== i / j) {
          count++;
        }
      }
    }
    count % 2 === 0 ? result.push(i) : result.push(-i);
  }

  let sum = result.reduce((acc, curr) => acc + curr, 0);
  return sum;
}
