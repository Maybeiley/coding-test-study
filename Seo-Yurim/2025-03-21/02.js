// 문제: JadenCase 문자열 만들기
// JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다.
// 단, 첫 문자가 알파벳이 아닐 때에는 이어지는 알파벳은 소문자로 쓰면 됩니다.
// 문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.

function solution(s) {
  let arrStr = s.split(' ');

  for (let i = 0; i < arrStr.length; i++) {
    arrStr[i] = arrStr[i].toLowerCase();
    arrStr[i] = arrStr[i].charAt(0).toUpperCase() + arrStr[i].slice(1);
  }

  return arrStr.join(' ');
}
