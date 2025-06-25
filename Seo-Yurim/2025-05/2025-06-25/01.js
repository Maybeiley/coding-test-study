function solution(i, j, k) {
  let count = 0;

  for (let a = i; a <= j; a++) {
    let num = a.toString().split("");
    for (let n of num) {
      if (Number(n) === k) count++;
    }
  }

  return count;
}
