// K번째수

function solution(array, commands) {
  var answer = [];
  for (let n = 0; n < commands.length; n++) {
    const command = commands[n];
    const i = command[0];
    const j = command[1];
    const k = command[2];
    sliceArray = array.slice(i - 1, j).sort((a, b) => a - b);
    answer.push(sliceArray[k - 1]);
  }
  return answer;
}
