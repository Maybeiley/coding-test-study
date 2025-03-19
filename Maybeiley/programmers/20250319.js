/*
[카펫]
Leo는 카펫을 사러 갔다가 아래 그림과 같이 중앙에는 노란색으로 칠해져 있고 테두리 1줄은 갈색으로 칠해져 있는 격자 모양 카펫을 봤습니다.
Leo는 집으로 돌아와서 아까 본 카펫의 노란색과 갈색으로 색칠된 격자의 개수는 기억했지만, 전체 카펫의 크기는 기억하지 못했습니다.
Leo가 본 카펫에서 갈색 격자의 수 brown, 노란색 격자의 수 yellow가 매개변수로 주어질 때 카펫의 가로, 세로 크기를 순서대로 배열에 담아 return 하도록 solution 함수를 작성해주세요.
- 제한사항 : 카펫의 가로 길이는 세로 길이와 같거나, 세로 길이보다 깁니다.
*/

// function solution(brown, yellow) {
//   var answer = [];

//   for (let w = 1; w <= yellow; w++) {
//     let h = yellow / w;
//     if (Number.isInteger(h) & (h <= w)) {
//       if (brown === 2 * (h + w + 2)) {
//         answer.push(w + 2, h + 2);
//         return answer;
//       }
//     }
//   }

//   return answer;
// }

// 참고하기: return Array.push('')를 실행하면 push 메서드의 반환값으로 새로운 배열의 길이를 반환한다!

/*
[자릿수 더하기]
자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

- 제한사항 : N의 범위는 100,000,000 이하의 자연수
*/

function solution(n) {
  const answer = String(n)
    .split('')
    .reduce((a, b) => Number(a) + Number(b));

  return answer;
}
