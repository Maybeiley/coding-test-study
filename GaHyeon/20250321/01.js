// 피자 나눠 먹기(1)
function solution(n) {
  if (n % 7 === 0) {
    return parseInt(n / 7);
  }
  return Math.floor(n / 7) + 1;
}
