// 문제 설명
// 알파벳 소문자로 이루어진 문자열을 가지고 시작합니다.
// 먼저 문자열에서 같은 알파벳이 2개 붙어 있는 짝을 찾습니다.
// 그다음, 그 둘을 제거한 뒤, 앞뒤로 문자열을 이어 붙입니다.
// 이 과정을 반복해서 문자열을 모두 제거한다면 짝지어 제거하기가 종료됩니다.
// 문자열 S가 주어졌을 때, 짝지어 제거하기를 성공적으로 수행할 수 있는지 반환하는 함수를 완성해 주세요.
// 성공적으로 수행할 수 있으면 1을, 아닐 경우 0을 리턴해주면 됩니다.

// 구현 방식
// i가 s의 요소를 모두 지나갈 때까지 while문을 돌리고,
// 다 돌았을 때 s의 길이가 0이면 1을 리턴, 아니라면 0을 리턴하는 함수를 만들었음.

function solution(s) {
  s = s.split("");

  let i = 0;

  while (i <= s.length - 1) {
    if (s[i] === s[i + 1]) {
      s.splice(i, 2);
      if (i !== 0) {
        i--;
      }
    } else {
      i++;
    }
  }

  if (s.length === 0) {
    return 1;
  }

  return 0;
}

// 이렇게 하니까 효율성이 안 좋아서 새로운 방법을 강구해보았음

// 구현 방식
// stack 알고리즘을 사용하였음 (후입선출)
// stack의 맨 마지막 문자와 s의 현재 문자가 동일하면 stack에서 제거

function solution(s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (stack[stack.length - 1] === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return stack.length ? 0 : 1;
}
