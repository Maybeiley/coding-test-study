// 소수 찾기
// 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

// 첫 번째 알고리즘
function solution(n) {
  let array = [];
  for (let i = 2; i <= n; i++) {
    array.push(i);
  }
  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    array = array.filter((x) => x === num || x % num !== 0);
  }
  let answer = array.length;

  return answer;
}
// n까지 배열을 다 넣어 아래에서 나눠지는 것이 있다면 제거

// 아쉬운 점
// n이 커지면 filter가 비효율적임, 시간초과 및 실패

// 두 번째 알고리즘

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(n) {
  let answer = 0;
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      answer++;
    }
  }
  return answer;
}

//아쉬운 점
// 효율성 검사에서 실패함, 에라토스테네스의 체를 이용해야함
