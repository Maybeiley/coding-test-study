/*문자열 my_string과 정수 n이 매개변수로 주어질 때, 
my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return 하도록 solution 함수를 완성해보세요.

제한사항
2 ≤ my_string 길이 ≤ 5
2 ≤ n ≤ 10
"my_string"은 영어 대소문자로 이루어져 있습니다. */

//간단한 풀이
function solution(my_string, n) {
  return my_string
    .split("")
    .map((char) => char.repeat(n))
    .join("");
}

//split 예시
let str = "hello";

// 빈 문자열('')로 split하면 한 글자씩 분리됩니다
str.split(""); // 결과: ['h', 'e', 'l', 'l', 'o']

// 다른 split 예시들
"hello world".split(" "); // 결과: ['hello', 'world']
"a,b,c".split(","); // 결과: ['a', 'b', 'c']

//map(char => char.repeat(n)): 각 문자를 n번 반복합니다
//repeat(n): 문자열을 n번 반복하는 메서드
//예: 'h' → 'hhh' (n이 3일 경우)
//join(''): 배열을 다시 문자열로 합칩니다

// map 사용
function solution1(my_string, n) {
  return [...my_string].map((char) => char.repeat(n)).join("");
}

// forEach 사용
function solution2(my_string, n) {
  let result = "";
  [...my_string].forEach((char) => {
    result += char.repeat(n);
  });
  return result;
}

// map을 사용할 때는 메서드 체이닝이 가능합니다:
[...my_string].map((char) => char.repeat(n)).join("");
// forEach를 사용할 때는 별도의 변수가 필요합니다:
let result = "";
[...my_string].forEach((char) => {
  result += char.repeat(n);
});
// 이것이 바로 이 문제에서 대부분 map을 선호하는 이유입니다!
