function solution(price, money, count) {
  let totalPrice = (price * (count + 1) * count) / 2;
  return money > totalPrice ? 0 : totalPrice - money;
}
