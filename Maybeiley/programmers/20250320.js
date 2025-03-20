/*
[문자열 내 마음대로 정렬하기]
문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.
*/

function solution(strings, n) {
  const mix = strings.map((str) => str.slice(n, n + 1) + str);
  const answer = mix.sort().map((str) => str.slice(1));

  return answer;
}

// 추가 내용: sort는 비교 함수 결과가 음수, 0, 양수 값에 따라 정렬하기 때문에, 이것을 활용해서 n번째 글자를 비교하여 정렬할 수 있다.
