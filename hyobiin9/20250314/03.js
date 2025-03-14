// 문제 설명
// 한국중학교에 다니는 학생들은 각자 정수 번호를 갖고 있습니다.
// 이 학교 학생 3명의 정수 번호를 더했을 때 0이 되면 3명의 학생은 삼총사라고 합니다.
// 한국중학교 학생들의 번호를 나타내는 정수 배열 number가 매개변수로 주어질 때,
// 학생들 중 삼총사를 만들 수 있는 방법의 수를 return 하도록 solution 함수를 완성하세요.

// 구현 방식
// sum에 각각 다른 3개의 인덱스 값을 더했을 때 sum === 0이 되면 answer ++, sum !== 0이면 sum = 0
// 그리고 third를 1씩 더해주고, third가 number.length - 1이 됐다면 second ++, third는 second + 1
// first를 더하는 방법도 위와 동일.

function solution(number) {
  var answer = 0;

  let sum = 0;

  let first = 0;
  let second = 1;
  let third = 2;

  while (first <= number.length - 2 && third <= number.length - 1) {
    sum += number[first] + number[second] + number[third];

    if (sum === 0) {
      answer++;
    } else {
      sum = 0;
    }

    if (third < number.length - 1) {
      third++;
    } else if (third === number.length - 1 && second < number.length - 2) {
      second++;
      third = second + 1;
    } else {
      first++;
      second = first + 1;
      third = first + 2;
    }
  }

  return answer;
}
