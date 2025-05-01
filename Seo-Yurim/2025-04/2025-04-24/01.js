// 문제: 푸드 파이트 대회

function solution(food) {
  let result = [];

  for (let i = 1; i < food.length; i++) {
    let count = Math.floor(food[i] / 2);

    while (count > 0) {
      count--;
      result.push(i);
    }
  }

  return result.join('') + '0' + result.reverse().join('');
}
