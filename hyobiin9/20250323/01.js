// 문제 설명
// 경화는 과수원에서 귤을 수확했습니다.
// 경화는 수확한 귤 중 'k'개를 골라 상자 하나에 담아 판매하려고 합니다.
// 그런데 수확한 귤의 크기가 일정하지 않아 보기에 좋지 않다고 생각한 경화는 귤을 크기별로 분류했을 때 서로 다른 종류의 수를 최소화하고 싶습니다.
// 경화가 한 상자에 담으려는 귤의 개수 k와 귤의 크기를 담은 배열 tangerine이 매개변수로 주어집니다.
// 경화가 귤 k개를 고를 때 크기가 서로 다른 종류의 수의 최솟값을 return 하도록 solution 함수를 작성해주세요.

function solution(k, tangerine) {
  let count = {};

  let typesCount = 0;
  let selectedCount = 0;

  for (let i of tangerine) {
    count[i] = (count[i] || 0) + 1;
  }

  const sortedByCount = Object.entries(count).sort((a, b) => b[1] - a[1]);

  for (const [size, freq] of sortedByCount) {
    selectedCount += freq;
    typesCount++;

    if (selectedCount >= k) {
      break;
    }
  }

  return typesCount;
}
