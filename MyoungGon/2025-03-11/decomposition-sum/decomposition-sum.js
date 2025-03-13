const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "input.txt");
const input = fs.readFileSync(filePath, "utf-8").toString().trim();

const num = Number(input);

const start = Math.max(1, num - String(num).length * 9);

let answer = 0;

for (let i = start; i < num; i++) {
  decompositionSum =
    i +
    i
      .toString()
      .split("")
      .map(Number)
      .reduce((sum, decomposition) => sum + decomposition, 0);
  if (decompositionSum === num) {
    answer = i;
    break;
  }
}

console.log(answer);
