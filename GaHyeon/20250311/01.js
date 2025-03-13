// n번째 원소부터
function solution(num_list, n) {
  var answer = [];

  for (let i = n - 1; i < num_list.length; i++) {
    answer.push(num_list[i]);
  }
  return answer;
}

// n번째 원소까지
function solution(num_list, n) {
  var answer = [];
  for (let i = 0; i < n; i++) {
    answer.push(num_list[i]);
  }
  return answer;
}
