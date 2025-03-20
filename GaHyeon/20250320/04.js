// 홀수 vs 짝수수
function solution(num_list) {
  let evenSum = 0;
  let oddSum = 0;
  for (let i = 0; i < num_list.length; i += 2) {
    evenSum += num_list[i];
  }

  for (let j = 1; j < num_list.length; j += 2) {
    oddSum += num_list[j];
  }
  return evenSum > oddSum ? evenSum : oddSum;
}

// 다른 사람 풀이
function solution(num_list) {
  return Math.max(
    num_list.reduce((p, c, idx) => p + (idx % 2 == 0 ? c : 0), 0),
    num_list.reduce((p, c, idx) => p + (idx % 2 != 0 ? c : 0), 0)
  );
}
