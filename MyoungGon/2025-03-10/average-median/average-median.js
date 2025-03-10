const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "input.txt");
const input = fs
  .readFileSync(filePath, "utf-8")
  .toString()
  .trim()
  .split("\n")
  .map((line) => {
    return Number(line.replace(/\r/g, ""));
  });

const average = Math.round(
  input.reduce((sum, num) => sum + num, 0) / input.length
);
const median = input.sort((a, b) => a - b)[Math.floor(input.length / 2)];

console.log(`${average}\n${median}`);
