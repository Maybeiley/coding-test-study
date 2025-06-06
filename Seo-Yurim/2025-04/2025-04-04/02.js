/*
문제: 최대공약수와 최소공배수
두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 
배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 
예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.
 */

function 최대공약수(x, y) {
  while (y !== 0) {
    let temp = y;
    y = x % y;
    x = temp;
  }
  return x;
}

function 최소공배수(x, y) {
  for (let i = 1; ; i++) {
    let check = true;

    if ((y * i) % x !== 0) {
      check = false;
    }

    if (check) {
      return y * i;
    }
  }
}

function solution(n, m) {
  return [최대공약수(n, m), 최소공배수(n, m)];
}
