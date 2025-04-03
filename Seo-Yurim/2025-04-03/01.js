// 오늘의 추천 문제: OX 퀴즈
// 덧셈, 뺄셈 수식들이 'X [연산자] Y = Z' 형태로 들어있는 문자열 배열 quiz가 매개변수로 주어집니다.
// 수식이 옳다면 "O"를 틀리다면 "X"를 순서대로 담은 배열을 return하도록 solution 함수를 완성해주세요.

// for문 활용
function solution1(quiz) {
  let result = [];

  for (let i = 0; i < quiz.length; i++) {
    let [left, right] = quiz[i].split('=');

    eval(left) === Number(right) ? result.push('O') : result.push('X');
  }

  return result;
}

// map 활용
function solution2(quiz) {
  return quiz.map((val) => {
    let [left, right] = val.split('=');

    return eval(left) === Number(right) ? 'O' : 'X';
  });
}
