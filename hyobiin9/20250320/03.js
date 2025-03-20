// 문제 설명
// 이 문제는 빈 병 a개를 가져다주면 콜라 b병을 주는 마트가 있을 때, 빈 병 n개를 가져다주면 몇 병을 받을 수 있는지 계산하는 문제입니다.
// 기존 콜라 문제와 마찬가지로, 보유 중인 빈 병이 a개 미만이면, 추가적으로 빈 병을 받을 순 없습니다.

function solution(a, b, n) {
  var answer = 0;

  while (n >= a) {
    let exchanged = Math.floor(n / a) * b;
    answer += exchanged;

    n = exchanged + (n % a);
  }
  return answer;
}
