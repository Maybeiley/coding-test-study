// 숫자 찾기

function solution(num, k) {
  let index = num.toString().indexOf(k.toString());
  return index === -1 ? -1 : index + 1;
}
