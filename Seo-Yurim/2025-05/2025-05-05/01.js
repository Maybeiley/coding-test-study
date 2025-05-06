function solution(dartResult) {
  const regex = /(\d+)([SDT])([*#]?)/g;
  let bonus = { S: 1, D: 2, T: 3 };
  let scores = [];
  let match;

  while ((match = regex.exec(dartResult)) !== null) {
    let [_, num, b, opt] = match;
    let score = Math.pow(parseInt(num), bonus[b]);

    if (opt === '*') {
      score *= 2;
      if (scores.length > 0) {
        scores[scores.length - 1] *= 2;
      }
    } else if (opt === '#') {
      score *= -1;
    }

    scores.push(score);
  }

  return scores.reduce((total, current) => total + current, 0);
}
