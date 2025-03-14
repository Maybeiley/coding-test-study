// 문제 설명
// Finn은 요즘 수학공부에 빠져 있습니다.
// 수학 공부를 하던 Finn은 자연수 n을 연속한 자연수들로 표현 하는 방법이 여러개라는 사실을 알게 되었습니다.
// 자연수 n이 매개변수로 주어질 때,
// 연속된 자연수들로 n을 표현하는 방법의 수를 return하는 solution를 완성해주세요.

// 구현 방식
// end를 1부터 n까지 늘려가면서 sum을 구함
// sum이 n을 초과하면, start를 증가시키면서 sum에서 제외함
// sum === n이 되면 answer ++

function solution(n) {
  var answer = 0;

  let start = 1;
  let sum = 0;

  for (let end = 1; end <= n; end++) {
    sum += end;

    while (sum > n) {
      sum -= start;
      start++;
    }

    if (sum === n) {
      answer++;
    }
  }

  return answer;
}
