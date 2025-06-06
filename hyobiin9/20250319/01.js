// 문제 설명
// 정수 배열 numbers가 주어집니다.
// numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아
// 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

// Set은 중복을 자동으로 제거해주는 자바스크립트의 자료구조임.

function solution(numbers) {
  let set = new Set();

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      set.add(numbers[i] + numbers[j]);
    }
  }

  return [...set].sort((a, b) => a - b);
}
