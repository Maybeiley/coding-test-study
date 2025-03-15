function solution(money) {
  let maxDrink = parseInt(money / 5500);
  let change = money % 5500;
  return [maxDrink, change];
}
