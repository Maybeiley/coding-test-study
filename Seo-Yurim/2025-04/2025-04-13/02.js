// 문제: 정사각형으로 만들기
// 이차원 정수 배열 arr이 매개변수로 주어집니다.
// arr의 행의 수가 더 많다면 열의 수가 행의 수와 같아지도록 각 행의 끝에 0을 추가하고,
// 열의 수가 더 많다면 행의 수가 열의 수와 같아지도록 각 열의 끝에 0을 추가한 이차원 배열을 return 하는 solution 함수를 작성해 주세요.

function solution(arr) {
  let result = [...arr];
  let row = arr.length;
  let column = arr[0].length;

  if (row > column) {
    for (let i = 0; i < result.length; i++) {
      while (result[i].length !== row) {
        result[i].push(0);
      }
    }
  } else if (row < column) {
    for (let i = 0; i < result.length; i++) {
      while (result.length !== column) {
        result.push(Array(column).fill(0));
      }
    }
  }

  return result;
}
