// 문제: 문자열 여러 번 뒤집기
// 문자열 my_string과 이차원 정수 배열 queries가 매개변수로 주어집니다.
// queries의 원소는 [s, e] 형태로, my_string의 인덱스 s부터 인덱스 e까지를 뒤집으라는 의미입니다.
// my_string에 queries의 명령을 순서대로 처리한 후의 문자열을 return 하는 solution 함수를 작성해 주세요.

function solution(my_string, queries) {
  let str = [...my_string];

  for (let i = 0; i < queries.length; i++) {
    let [s, e] = queries[i];
    while (s < e) {
      [str[s], str[e]] = [str[e], str[s]];
      s++;
      e--;
    }
  }

  return str.join('');
}
