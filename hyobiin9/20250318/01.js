// 문제 설명
// 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다.
// 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

function solution(s, n) {
  var answer = "";

  for (let i of s) {
    if (i === " ") {
      answer += " ";
      continue;
    }

    let code = i.charCodeAt();

    if (code <= 122 && code >= 97) {
      code = ((code - 97 + n) % 26) + 97;
    } else if (code >= 65 && code <= 90) {
      code = ((code - 65 + n) % 26) + 65;
    }
    answer += String.fromCharCode(code);
  }

  return answer;
}
