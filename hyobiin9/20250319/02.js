// 문제 설명
// 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.
// 배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때,
// commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

function solution(array, commands) {
  var answer = [];

  for (let a of commands) {
    let i = a[0];
    let j = a[1];
    let k = a[2];

    let arr = array.slice(i - 1, j).sort((a, b) => a - b);
    answer.push(arr[k - 1]);
  }

  return answer;
}
