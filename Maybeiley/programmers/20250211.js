// 콜라츠 추측

function solution(num) {
  let answer = num;
  let i = 0;

  while (i < 500 && answer !== 1) {
    i++;
    answer = answer % 2 === 0 ? answer / 2 : answer * 3 + 1;
  }
  return answer === 1 ? i : -1;
}
