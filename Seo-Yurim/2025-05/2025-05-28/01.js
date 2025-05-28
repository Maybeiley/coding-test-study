function solution(a, b, c, d) {
  let dice = [a, b, c, d];
  let count = {};

  for (let num of dice) {
    count[num] = (count[num] || 0) + 1;
  }
  console.log(count);

  if (Object.keys(count).length === 1) {
    return 1111 * dice[0];
  }

  if (Object.keys(count).length === 2) {
    const values = Object.values(count);
    const keys = Object.keys(count).map(Number);

    if (values.includes(3)) {
      const p = keys.find((k) => count[k] === 3);
      const q = keys.find((k) => count[k] === 1);
      return Math.pow(10 * p + q, 2);
    } else if (values[0] === 2 && values[1] === 2) {
      const [p, q] = keys;
      return (p + q) * Math.abs(p - q);
    }
  }

  if (Object.keys(count).length === 3) {
    let nums = Object.entries(count)
      .filter(([_, v]) => v === 1)
      .map(([k]) => Number(k));
    return nums[0] * nums[1];
  }

  return Math.min(...dice);
}
