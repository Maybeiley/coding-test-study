function solution(chicken) {
  let coupon = chicken;
  let result = 0;

  while (coupon >= 10) {
    let bonus = Math.floor(coupon / 10);
    result += bonus;
    coupon = bonus + (coupon % 10);
  }

  return result;
}
