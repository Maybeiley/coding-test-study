function solution(lottos, win_nums) {
  let scoreToRank = {
    6: 1,
    5: 2,
    4: 3,
    3: 4,
    2: 5,
    1: 6,
    0: 6
  };

  let current = lottos.filter((num) => win_nums.includes(num)).length;
  let zero = lottos.filter((num) => num === 0).length;

  return [scoreToRank[current + zero], scoreToRank[current]];
}
