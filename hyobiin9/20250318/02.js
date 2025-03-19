// 문제 설명
// 문자열 s가 주어졌을 때, s의 각 위치마다 자신보다 앞에 나왔으면서,
// 자신과 가장 가까운 곳에 있는 같은 글자가 어디 있는지 알고 싶습니다.
// 문자열 s이 주어질 때, 위와 같이 정의된 연산을 수행하는 함수 solution을 완성해주세요.

function solution(s) {
  let answer = [];
  let lastIndex = {};

  for (let i = 0; i < s.length; i++) {
    if (lastIndex[s[i]] !== undefined) {
      answer.push(i - lastIndex[s[i]]);
    } else {
      answer.push(-1);
    }
    lastIndex[s[i]] = i;
  }

  return answer;
}
