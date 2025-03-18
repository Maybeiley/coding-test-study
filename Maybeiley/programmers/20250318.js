/*
[약수의 개수와 덧셈]
두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.
*/

// function solution(left, right) {
//   var answer = 0;

//   for (let i = Number(left); i <= Number(right); i++) {
//     let count = 0;
//     for (let j = 1; j <= i; j++) {
//       if (i % j === 0) count++;
//     }
//     count % 2 === 0 ? (answer += i) : (answer -= i);
//   }

//   return answer;
// }

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

// 다른 사람의 풀이: `${'*'.repeat(a)}\n`.repeat(b)
// 내가 쓰고 싶었던 방식으로 ('*'.repeat(a)\n).repeat(b)까지 생각했는데 백틱으로 ${}를 감싸는 것까지 생각하지 못해 결국 반복문으로 풀이했다. repeat 앞에는 string으로 만들자!
