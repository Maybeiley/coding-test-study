// 문제 설명

function solution(k, score) {
  var answer = []; // 최하위 점수

  let arr = []; // 명예의 전당

  for (let i = 0; i < score.length; i++) {
    if (arr.length < k) {
      arr.push(score[i]);
    } else {
      if (score[i] > Math.min(...arr)) {
        arr.splice(arr.indexOf(Math.min(...arr)), 1);
        arr.push(score[i]);
      }
    }

    answer.push(Math.min(...arr));
  }

  return answer;
}
