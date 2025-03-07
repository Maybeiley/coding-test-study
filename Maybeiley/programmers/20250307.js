/*
[나누어 떨어지는 숫자 배열]
array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요. 
*/

function solution(arr, divisor) {
  var answer = [];

  arr
    .sort((a, b) => a - b)
    .map((num) => {
      if (num % divisor === 0) return answer.push(num);
    });

  return answer.length > 0 ? answer : [-1];
}

console.log(solution([5, 9, 7, 10], 5));
