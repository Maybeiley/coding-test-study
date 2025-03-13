//뒤에서 5등까지

function solution(num_list) {
  var answer = [];
  num_list.sort((a, b) => a - b);
  answer = num_list.slice(0, 5);
  return answer;
}

//뒤에서 5등 위로
function solution(num_list) {
  return num_list.sort((a, b) => a - b).slice(5);
}
