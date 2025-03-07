const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "input.txt");
const input = fs.readFileSync(filePath, "utf-8").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const matrixA = input
  .slice(1, N + 1)
  .map((line) => line.split(" ").map(Number));
const matrixB = input
  .slice(N + 1, N * 2 + 1)
  .map((line) => line.split(" ").map(Number));
const result = Array.from(Array(N), () => Array(M).fill(0));

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    result[i][j] = matrixA[i][j] + matrixB[i][j];
  }
}

result.forEach((row) => {
  console.log(row.join(" "));
});
