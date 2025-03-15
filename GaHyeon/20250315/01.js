// 이진 변환 반복하기
function solution(s) {
  let count = 0;
  let zeroCount = 0;
  while (s !== "1") {
    let before = s.length;
    s = s.replace(/0/g, "");
    let after = s.length;
    zeroCount += before - after;
    s = after.toString(2);
    count++;
  }
  return [count, zeroCount];
}
