// 문제 설명
// 두 정수 left와 right가 매개변수로 주어집니다.
// left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고,
// 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

// 완전 제곱수인 경우에만 약수의 개수가 홀수라는 점을 이용.
// Math.sqrt(x) 함수를 사용해서 제곱수를 계산하고, Number.isInteger를 사용하여 소수점이 있는지 판단함.

function solution(left, right) {
  var answer = 0;

  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }

  return answer;
}
