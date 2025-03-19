// 문제 설명
// 문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때,
// 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다.

// 구현 방식
// strObj == n번째 문자를 저장하는 객체
// s == n번째 문자들을 모은 배열
// strings를 알파벳 순으로 정렬, 각 문자열에서 n번째 문자를 추출해서 strObj와 s에 저장
// s 배열을 오름차순 정렬, s를 순회하며 n번째 문자를 가진 문자열들을 strObj에서 찾고 result에 저장
// result에서 중복문자열은 answer에 추가 X

function solution(strings, n) {
  var answer = [];

  let strObj = {};
  let s = [];

  strings.sort().map((string) => {
    strObj[string] = string[n];
    s.push(string[n]);
  });

  s.sort();

  for (let i of s) {
    let result = Object.entries(strObj)
      .filter(([_, v]) => v === i)
      .map(([k, _]) => k);

    for (let str of result) {
      if (!answer.includes(str)) {
        answer.push(str);
      }
    }
  }

  return answer;
}

// 중복처리 방식에 개선이 필요하다고 판단
// -> Set 사용, map + filter 한 번에 처리

function solution(strings, n) {
  const groupedByChar = new Map();

  for (let string of strings) {
    let char = string[n];
    if (!groupedByChar.has(char)) {
      groupedByChar.set(char, []);
    }
    groupedByChar.get(char).push(string);
  }

  const answer = [];
  Array.from(groupedByChar.keys())
    .sort()
    .forEach((char) => {
      groupedByChar
        .get(char)
        .sort()
        .forEach((str) => {
          answer.push(str);
        });
    });

  return answer;
}
