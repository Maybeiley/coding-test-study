// 문제 설명
// 모든 명함의 가로 길이와 세로 길이를 나타내는 2차원 배열 sizes가 매개변수로 주어집니다.
// 모든 명함을 수납할 수 있는 가장 작은 지갑을 만들 때,
// 지갑의 크기를 return 하도록 solution 함수를 완성해주세요.

// 대부분의 테스트케이스에서 가로 길이가 넓은 경우가 태반인 점을 고려하여
// 세로 길이가 가로 길이보다 길 경우 reverse를 하는 방법으로 구현.

function solution(sizes) {
  let w = [];
  let h = [];

  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] < sizes[i][1]) {
      sizes[i] = sizes[i].reverse();
    }
    w.push(sizes[i][0]);
    h.push(sizes[i][1]);
  }

  w.sort((a, b) => b - a);
  h.sort((a, b) => b - a);

  return w[0] * h[0];
}
