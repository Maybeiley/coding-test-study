const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "input.txt");
const input = fs
  .readFileSync(filePath, "utf-8")
  .toString()
  .split("\n")
  .map((line) => {
    return line.replace(/\r/g, "");
  });

const [N, M] = input[0].split(" ").map(Number);
const cards = input[1].split(" ").map(Number);

let sum = 0;

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    for (let k = j + 1; k < N; k++) {
      const currentSum = cards[i] + cards[j] + cards[k];
      if (currentSum <= M) {
        sum = Math.max(sum, currentSum);
      }
    }
  }
}

console.log(sum);
