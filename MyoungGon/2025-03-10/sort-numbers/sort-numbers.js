const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "input.txt");
const input = fs
  .readFileSync(filePath, "utf-8")
  .toString()
  .split("\n")
  .slice(1)
  .map((line) => {
    return line.replace(/\r/g, "");
  })
  .filter((line) => line !== "");

const numbers = input.map(Number);
const result = [...new Set(numbers)].sort((a, b) => a - b);

console.log(result.join("\n"));
