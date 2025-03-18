/*
[약수의 개수와 덧셈]
두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.
*/

function solution(left, right) {
  var answer = 0;

  for (let i = Number(left); i <= Number(right); i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) count++;
    }
    count % 2 === 0 ? (answer += i) : (answer -= i);
  }

  return answer;
}

// 다른 사람의 풀이: 제곱근이 정수면 약수의 개수가 홀수다 -> Number.isInteger(Math.sqrt(i)) 조건으로 풀이

/*
[직사각형 별찍기] 
이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.
 */

process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const n = data.split(' ');
  const a = Number(n[0]),
    b = Number(n[1]);

  for (let i = 0; i < b; i++) {
    console.log('*'.repeat(a));
  }
});

// 다른 사람의 풀이: `${'*'.repeat(a)}\n`.repeat(b) 또는 ('*'.repeat(a) + '\n').repeat(b).trim()
// 내가 쓰고 싶었던 방식으로 ('*'.repeat(a)\n).repeat(b)까지 생각했는데 백틱으로 ${}를 감싸는 것까지 생각하지 못해 결국 반복문으로 풀이했다. repeat 앞에는 string으로 만들자!

/*
[이진 변환 반복하기]
0과 1로 이루어진 어떤 문자열 x에 대한 이진 변환을 다음과 같이 정의합니다.

x의 모든 0을 제거합니다.
x의 길이를 c라고 하면, x를 "c를 2진법으로 표현한 문자열"로 바꿉니다.
예를 들어, x = "0111010"이라면, x에 이진 변환을 가하면 x = "0111010" -> "1111" -> "100" 이 됩니다.

0과 1로 이루어진 문자열 s가 매개변수로 주어집니다. s가 "1"이 될 때까지 계속해서 s에 이진 변환을 가했을 때, 이진 변환의 횟수와 변환 과정에서 제거된 모든 0의 개수를 각각 배열에 담아 return 하도록 solution 함수를 완성해주세요.
*/

function solution(s) {
  let count = 0;
  let zeros = 0;
  let string = s;

  while (string !== '1') {
    let ones = 0;
    string.split('').map((a) => (Number(a) === 0 ? zeros++ : ones++));
    string = ones.toString(2);
    count++;
  }

  return [count, zeros];
}
