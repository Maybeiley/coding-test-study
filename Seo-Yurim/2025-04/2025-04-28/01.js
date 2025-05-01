// 처음 풀이
function solution(N, stages) {
  let playersFailedStage = [];
  let playersReachedStage = [];

  for (let i = 1; i <= N; i++) {
    let failCount = 0;
    let stageCount = 0;

    for (let stage of stages) {
      if (i === stage) failCount++;
      if (i <= stage) stageCount++;
    }

    playersFailedStage.push(failCount);
    playersReachedStage.push(stageCount);
  }

  let failureRate = new Map();
  for (let i = 0; i < N; i++) {
    failureRate.set(i + 1, playersFailedStage[i] / playersReachedStage[i]);
  }

  const sorted = new Map(
    [...failureRate.entries()].sort((a, b) => b[1] - a[1])
  );
  return [...sorted.keys()];
}

// 처음 풀이 리팩토링
function solution(N, stages) {
  let stageStats = Array(N)
    .fill(0)
    .map(() => ({ fail: 0, reached: 0 }));

  for (let stage of stages) {
    for (let i = 0; i < N; i++) {
      if (stage === i + 1) stageStats[i].fail++;
      if (stage >= i + 1) stageStats[i].reached++;
    }
  }

  const failureRate = stageStats.map((stat, index) => ({
    stage: index + 1,
    rate: stat.fail / stat.reached
  }));

  failureRate.sort((a, b) => b.rate - a.rate);

  return failureRate.map((stat) => stat.stage);
}
