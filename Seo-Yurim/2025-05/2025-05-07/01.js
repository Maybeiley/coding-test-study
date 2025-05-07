function solution(n) {
  let transCount = n.toString(2).match(/1/g).length;

  while (n++) {
    let iTransCount = n.toString(2).match(/1/g).length;
    if (transCount === iTransCount) return n;
  }
}
