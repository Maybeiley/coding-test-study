// 문제 설명
// 자연수 n이 매개변수로 주어집니다.
// n을 3진법 상에서 앞뒤로 뒤집은 후,
// 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

// .toString(3) --> 10진법을 3진법으로 변환
// parseInt(string, 3) --> 3진법을 10진법으로 변환

function solution(n) {
  var answer = 0;

  n = n.toString(3).split("").reverse().join("");
  answer = parseInt(n, 3);

  return answer;
}
