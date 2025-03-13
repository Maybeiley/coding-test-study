//로또의 최고 순위와 최저 순위

const rankCal = (correctCount) => (correctCount === 0 ? 6 : 7 - correctCount);
function solution(lottos, win_nums) {
  let joker = 0;
  let correctCount = 0;
  lottos.forEach((number) => {
    if (number === 0) joker += 1;
    if (win_nums.includes(number)) correctCount += 1;
  });
  const lowRank = rankCal(correctCount);
  const highRank = rankCal(correctCount + joker);
  return [highRank, lowRank];
}
