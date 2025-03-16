// 제곱 수 판별하기
function solution(n) {
  if (Number.isInteger(Math.sqrt(n))) {
    return 1;
  } else {
    return 2;
  }
}
