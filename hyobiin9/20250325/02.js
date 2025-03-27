// 문제 설명
// 어느 날 철호는 어떤 자연수로 이루어진 원형 수열의 연속하는 부분 수열의 합으로 만들 수 있는 수가 모두 몇 가지인지 알아보고 싶어졌습니다.
// 원형 수열은 처음과 끝이 연결되어 끊기는 부분이 없기 때문에 연속하는 부분 수열도 일반적인 수열보다 많아집니다.
// 원형 수열의 모든 원소 elements가 순서대로 주어질 때, 원형 수열의 연속 부분 수열 합으로 만들 수 있는 수의 개수를 return 하도록 solution 함수를 완성해주세요.

function solution(elements) {
  const set = new Set();
  let order = 0;
  let count = 1;

  while (count <= elements.length) {
    if (order < elements.length) {
      let sum = 0;

      for (let i = 0; i < count; i++) {
        sum += elements[(order + i) % elements.length];
      }

      set.add(sum);
      order++;
    } else {
      count++;
      order = 0;
    }
  }

  return set.size;
}
