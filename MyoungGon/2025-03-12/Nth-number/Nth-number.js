function solution(array, commands) {
  return commands.map((command) => {
    const [startPosition, endPosition, position] = command;

    const newArray = array
      .slice(startPosition - 1, endPosition)
      .sort((a, b) => a - b);

    return newArray[position - 1];
  });
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3]
    ]
  )
);
