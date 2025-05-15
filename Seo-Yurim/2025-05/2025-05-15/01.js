function solution(numbers, hand) {
  const keypad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ['*', 0, '#']
  ];
  let left = [3, 0];
  let right = [3, 2];
  let result = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < keypad.length; j++) {
      for (let k = 0; k < keypad[j].length; k++) {
        if (numbers[i] === keypad[j][k]) {
          if ([1, 4, 7].includes(numbers[i])) {
            left = [j, k];
            result.push('L');
          } else if ([3, 6, 9].includes(numbers[i])) {
            right = [j, k];
            result.push('R');
          } else {
            let leftCount = Math.abs(j - left[0]) + Math.abs(k - left[1]);
            let rightCount = Math.abs(j - right[0]) + Math.abs(k - right[1]);
            if (leftCount > rightCount) {
              right = [j, k];
              result.push('R');
            } else if (rightCount > leftCount) {
              left = [j, k];
              result.push('L');
            } else {
              if (hand === 'right') {
                right = [j, k];
                result.push('R');
              } else {
                left = [j, k];
                result.push('L');
              }
            }
          }
        }
      }
    }
  }
  return result.join('');
}
