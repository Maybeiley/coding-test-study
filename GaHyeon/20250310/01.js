// 부족한 금액 계산하기

function solution(price, money, count) {
  var answer = -1;
  let result = 0;
  let total = 0;

  for (let i = 1; i <= count; i++) {
    result = price * i;
    total += result;
  }

  if (money >= total) {
    return 0;
  } else if (total > money) {
    answer = total - money;
  }

  return answer;
}
