function solution(participant, completion) {
  let count = {};

  for (let name of participant) {
    count[name] = (count[name] || 0) + 1;
  }

  for (let name of completion) {
    count[name]--;
  }

  for (let name in count) {
    if (count[name] > 0) return name;
  }
}
