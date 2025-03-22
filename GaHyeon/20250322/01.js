// 2의 영역
function solution(arr) {
  if (!arr.includes(2)) {
    return [-1];
  }
  let start = arr.indexOf(2);
  let end = arr.lastIndexOf(2);

  return arr.slice(start, end + 1);
}

// 다른 사람 풀이
function solution(arr) {
  arr = arr.slice(arr.indexOf(2), arr.lastIndexOf(2) + 1);
  return arr.length == 0 ? [-1] : arr;
}
