// 문제: 문자 개수 세기
// 알파벳 대소문자로만 이루어진 문자열 my_string이 주어질 때,
// my_string에서 'A'의 개수, ..., my_string에서 'Z'의 개수, my_string에서 'a'의 개수, ..., my_string에서 'z'의 개수를
// 순서대로 담은 길이 52의 정수 배열을 return 하는 solution 함수를 작성해 주세요.

function solution(my_string) {
  const alphabet = Array.from({ length: 52 }, (_, i) =>
    String.fromCharCode(i < 26 ? 65 + i : 97 + (i - 26))
  );
  const str = Object.fromEntries(alphabet.map((char) => [char, 0]));

  for (let char of [...my_string]) {
    str[char] += 1;
  }

  return Object.values(str);
}
