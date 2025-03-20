/*
[문자열 내 마음대로 정렬하기]
문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.
*/

// function solution(strings, n) {
//   const mix = strings.map((str) => str.slice(n, n + 1) + str);
//   const answer = mix.sort().map((str) => str.slice(1));

//   return answer;
// }

// 추가 내용: sort는 비교 함수 결과가 음수, 0, 양수 값에 따라 정렬하기 때문에, 이것을 활용해서 n번째 글자를 비교하여 정렬할 수 있다.

/*
[유한소수 판별하기]
소수점 아래 숫자가 계속되지 않고 유한개인 소수를 유한소수라고 합니다. 분수를 소수로 고칠 때 유한소수로 나타낼 수 있는 분수인지 판별하려고 합니다. 유한소수가 되기 위한 분수의 조건은 다음과 같습니다.

기약분수로 나타내었을 때, 분모의 소인수가 2와 5만 존재해야 합니다.
두 정수 a와 b가 매개변수로 주어질 때, a/b가 유한소수이면 1을, 무한소수라면 2를 return하도록 solution 함수를 완성해주세요.
*/

function solution(a, b) {
  let upper = a;
  let bottom = b;
  for (let i = 2; i <= a; i++) {
    if (upper % i === 0) {
      if (bottom % i === 0) {
        upper = upper / i;
        bottom = bottom / i;
      }
    }
  }

  while (Number.isInteger(bottom / 5)) {
    bottom = bottom / 5;
  }
  while (Number.isInteger(bottom / 2)) {
    bottom = bottom / 2;
  }
  return bottom === 1 ? 1 : 2;
}

// 추가 내용: 각각의 약수를 찾아 나누도록 풀이했는데, (a%i===0 && b%i===0) 조건으로 반복문을 써서 최대공약수로 한 번에 나누는 방법도 있다!
