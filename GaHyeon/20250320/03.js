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

// 다른 사람 풀이
function solution(num_list, n) {
  num_list.unshift(...num_list.splice(n));
  return num_list;
}
