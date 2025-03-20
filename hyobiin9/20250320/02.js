// 문제 설명
// 무인도에 갇힌 사람들을 구명보트를 이용하여 구출하려고 합니다.
// 구명보트는 작아서 한 번에 최대 2명씩 밖에 탈 수 없고, 무게 제한도 있습니다.
// 구명보트를 최대한 적게 사용하여 모든 사람을 구출하려고 합니다.
// 사람들의 몸무게를 담은 배열 people과 구명보트의 무게 제한 limit가 매개변수로 주어질 때,
// 모든 사람을 구출하기 위해 필요한 구명보트 개수의 최솟값을 return 하도록 solution 함수를 작성해주세요.

// 구현 방식
// 투포인터 알고리즘을 사용하여 무조건 몸무게가 많은 사람부터 보트 태우기

function solution(people, limit) {
  var answer = 0;

  people = people.sort((a, b) => a - b);

  let left = 0;
  let right = people.length - 1;
  let total = 0;

  while (left <= right) {
    if (people[left] + people[right] <= limit) {
      left++;
    }
    right--;
    answer++;
  }

  return answer;
}
