function solution(sizes) {
  let result = { max: [], min: [] };

  for (let i = 0; i < sizes.length; i++) {
    result.max.push(Math.max(...sizes[i]));
    result.min.push(Math.min(...sizes[i]));
  }

  return Math.max(...result.max) * Math.max(...result.min);
}
