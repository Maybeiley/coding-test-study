/*
[부족한 금액 계산하기]
새로 생긴 놀이기구는 인기가 매우 많아 줄이 끊이질 않습니다. 이 놀이기구의 원래 이용료는 price원 인데, 놀이기구를 N 번 째 이용한다면 원래 이용료의 N배를 받기로 하였습니다. 즉, 처음 이용료가 100이었다면 2번째에는 200, 3번째에는 300으로 요금이 인상됩니다.
놀이기구를 count번 타게 되면 현재 자신이 가지고 있는 금액에서 얼마가 모자라는지를 return 하도록 solution 함수를 완성하세요.
단, 금액이 부족하지 않으면 0을 return 하세요.
*/

function solution(price, money, count) {
  let answer = money;

  for (let i = 1; i <= count; i++) {
    answer -= price * i;
  }

  return answer > 0 ? 0 : -answer;
}

console.log(solution(3, 20, 4)); // result = 10

/*
[최댓값과 최솟값]
문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다. str에 나타나는 숫자 중 최소값과 최대값을 찾아 이를 "(최소값) (최대값)"형태의 문자열을 반환하는 함수, solution을 완성하세요.
예를들어 s가 "1 2 3 4"라면 "1 4"를 리턴하고, "-1 -2 -3 -4"라면 "-4 -1"을 리턴하면 됩니다.
*/

function solution(s) {
  const arr = s.split(' ').sort((a, b) => a - b);

  const min = arr[0];
  const max = arr[arr.length - 1];
  return `${min} ${max}`;
}

console.log(solution('1 2 3 4')); // return "1 4"
