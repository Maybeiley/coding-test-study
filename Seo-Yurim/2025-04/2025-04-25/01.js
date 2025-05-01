function solution(order) {
  let result = 0;

  order.forEach((menu) => {
    menu.includes('latte') ? (result += 5000) : (result += 4500);
  });

  return result;
}
