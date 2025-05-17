function solution(survey, choices) {
  const score = [3, 2, 1, 0, 1, 2, 3];
  let count = [
    { R: 0, T: 0 },
    { C: 0, F: 0 },
    { J: 0, M: 0 },
    { A: 0, N: 0 }
  ];

  for (let i = 0; i < survey.length; i++) {
    let first = survey[i][0];
    let second = survey[i][1];
    let value = score[choices[i] - 1];

    if (choices[i] < 4) {
      for (let obj of count) {
        if (obj.hasOwnProperty(first)) obj[first] += value;
      }
    } else if (choices[i] > 4) {
      for (let obj of count) {
        if (obj.hasOwnProperty(second)) obj[second] += value;
      }
    }
  }

  let result = count.map((obj) => {
    let keys = Object.keys(obj);
    if (obj[keys[0]] === obj[keys[1]]) {
      return keys.sort()[0];
    }
    return obj[keys[0]] > obj[keys[1]] ? keys[0] : keys[1];
  });

  return result.join('');
}
