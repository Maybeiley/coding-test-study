// 문제 설명
// 0과 1로 이루어진 어떤 문자열 x에 대한 이진 변환을 다음과 같이 정의합니다.
// 1. x의 모든 0을 제거합니다.
// 2. x의 길이를 c라고 하면, x를 c를 2진법으로 표현한 문자열로 바꿉니다.
// x가 1이 될 때까지 계속해서 s에 이진 변환을 가했을 때,
// 이진 변환의 횟수와 변환 과정에서 제거된 모든 0의 개수를 각각 배열에 담아
// return 하도록 solution 함수를 완성해주세요.

// s를 0을 기준으로 나누어서, 배열의 길이에서 1개를 빼면 0의 개수를 구할 수 있다는 점을 이용.

function solution(s) {
  let zeroCount = 0;
  let count = 0;

  while (s !== "1") {
    zeroCount += s.split("0").length - 1;
    s = s.split("0").join("").length.toString(2);
    count++;
  }

  return [count, zeroCount];
}
