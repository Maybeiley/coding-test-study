// 문제: 분수의 덧셈
// 첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다.
// 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

// 최대공약수 구하는 함수
function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

// 최소공배수 구하는 함수
function lcm(a, b) {
  return Math.abs(a * b) / gcd(a, b);
}

function solution(numer1, denom1, numer2, denom2) {
  let commonDenom = lcm(denom1, denom2);

  numer1 *= Math.floor(commonDenom / denom1);
  numer2 *= Math.floor(commonDenom / denom2);
  let sumNumer = numer1 + numer2;

  let commonGcd = gcd(sumNumer, commonDenom);
  sumNumer /= commonGcd;
  commonDenom /= commonGcd;

  return [sumNumer, commonDenom];
}
