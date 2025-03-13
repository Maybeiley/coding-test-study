/*
[정수 제곱근 판별]
임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.
*/

function solution(n) {
  var answer = 0;
  for (let i = 1; i * i <= n; i++) {
    answer = i * i === n ? (i + 1) * (i + 1) : -1;
  }
  return answer;
}

/*
[시저 암호]
어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.
*/

function solution(s, n) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.repeat(2);
  const lowercase = (str) => alphabet.indexOf(str);
  const uppercase = (str) => alphabet.toUpperCase().indexOf(str);

  const answer = s
    .split('')
    .map((str) => {
      if (str === ' ') return ' ';
      return lowercase(str) >= 0
        ? (str = alphabet[lowercase(str) + n])
        : (str = alphabet.toUpperCase()[uppercase(str) + n]);
    })
    .join('');

  return answer;
}

console.log(solution('AB', 1));
console.log(solution('a B z', 4));
