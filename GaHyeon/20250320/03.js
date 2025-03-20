function solution(num_list, n) {
  var answer = [];
  for (let i = n; i < num_list.length; i++) {
    answer.push(num_list[i]);
  }
  for (let j = 0; j < n; j++) {
    answer.push(num_list[j]);
  }
  return answer;
}
