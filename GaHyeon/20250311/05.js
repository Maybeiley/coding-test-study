// 정수 제곱근 판별
function solution(n) {
  if (Math.sqrt(n) % 1 !== 0) {
    return -1;
  } else {
    return Math.pow(Math.sqrt(n) + 1, 2);
  }
}
