// 문제 설명
// 자연수 n이 주어졌을 때, n의 다음 큰 숫자는 다음과 같이 정의 합니다.
// 조건 1. n의 다음 큰 숫자는 n보다 큰 자연수 입니다.
// 조건 2. n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 갯수가 같습니다.
// 조건 3. n의 다음 큰 숫자는 조건 1, 2를 만족하는 수 중 가장 작은 수 입니다.
// 자연수 n이 매개변수로 주어질 때, n의 다음 큰 숫자를 return 하는 solution 함수를 완성해주세요.

// n에서 1의 개수를 세고 싶다면 .split('1') - 1을 하면 된다는 점을 이용.

function solution(n) {
  var answer = n;

  const countN = n.toString(2).split("1").length - 1;
  let countA = 0;

  while (countA !== countN) {
    answer++;
    countA = answer.toString(2).split("1").length - 1;
  }

  return answer;
}
