// 공배수
function solution(number, n, m) {
  if (number % n === 0 && number % m === 0) {
    return 1;
  }
  return 0;
}

// 다른 사람 풀이: 삼항 연산자
function solution(number, n, m) {
  return number % n === 0 && number % m === 0 ? 1 : 0;
}
