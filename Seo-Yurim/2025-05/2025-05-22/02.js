function solution(array, n) {
  array.sort((a, b) => a - b);

  let diffs = array.map((num) => Math.abs(n - num));
  return array[diffs.indexOf(Math.min(...diffs))];
}
