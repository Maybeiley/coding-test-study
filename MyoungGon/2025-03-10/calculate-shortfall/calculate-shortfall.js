function solution(price, money, count) {
  let answer = money;

  for (let i = 1; i < count + 1; i++) {
    answer -= price * i;
  }

  return answer < 0 ? -answer : 0;
}

console.log(solution(3, 20, 4));
console.log(solution(3, 20, 2));
