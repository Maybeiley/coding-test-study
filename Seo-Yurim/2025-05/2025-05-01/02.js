function score(userAnswers, answers) {
  let count = 0;

  for (let i = 0; i < answers.length; i++) {
    let index = i % userAnswers.length;
    if (answers[i] === userAnswers[index]) count++;
  }

  return count;
}

function solution(answers) {
  let student1 = [1, 2, 3, 4, 5];
  let student2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let corretCounts = [];

  corretCounts.push(score(student1, answers));
  corretCounts.push(score(student2, answers));
  corretCounts.push(score(student3, answers));

  let maxCount = Math.max(...corretCounts);
  let topScorers = [];

  for (let i = 0; i < corretCounts.length; i++) {
    if (maxCount === corretCounts[i]) topScorers.push(i + 1);
  }

  return topScorers;
}
