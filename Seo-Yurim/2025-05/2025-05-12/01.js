function solution(keymap, targets) {
  let result = [];

  for (let i = 0; i < targets.length; i++) {
    let count = 0;

    for (let j = 0; j < targets[i].length; j++) {
      let index = [];

      for (let k = 0; k < keymap.length; k++) {
        index.push(keymap[k].indexOf(targets[i][j]));
      }

      let filtered = index.filter((num) => num !== -1);

      if (filtered.length === 0) {
        count = -1;
        break;
      } else {
        count += Math.min(...filtered) + 1;
      }
    }
    result.push(count);
  }

  return result;
}
