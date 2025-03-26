// 자릿수 더하기
function solution(n) {
  let answer = 0;
  let str = n.toString();
  for (let i = 0; i < str.length; i++) {
    answer += Number(str[i]);
  }
  return answer;
}

function solution(n) {
  return n
    .toString()
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0);
}
