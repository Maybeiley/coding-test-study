// qr code
function solution(q, r, code) {
  let answer = [];
  for (let i = 0; i < code.length; i++) {
    if (i % q === r) {
      answer.push(code[i]);
    }
  }
  return answer.join("");
}

// 다른 사람 풀이
function solution(q, r, code) {
  let answer = "";
  for (let i = r; i < code.length; i += q) answer += code[i];
  return answer;
}
