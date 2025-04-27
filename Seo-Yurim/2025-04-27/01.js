function solution(emergency) {
  let sorted = [...emergency].sort((a, b) => b - a);

  return emergency.map((val) => sorted.indexOf(val) + 1);
}
