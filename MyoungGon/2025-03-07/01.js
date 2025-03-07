function solution(arr, divisor) {
  const result = arr.filter((x) => x % divisor === 0);
  if (result.length === 0) {
    return [-1];
  }
  result.sort((a, b) => a - b);
  return result;
}
