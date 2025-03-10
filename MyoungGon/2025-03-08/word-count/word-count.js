// // 한 문장 일때
// const fs = require("fs");
// const path = require("path");
// const filePath = path.join(__dirname, "input.txt");

// const input = fs.readFileSync(filePath, "utf-8").toString().trim();
// const words = input === "" ? [] : input.split(" ");

// console.log(words.length);

// 여러 문장 일 때
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let wordCounts = [];

rl.on("line", (line) => {
  const words = line.trim().split(" ");
  const count = line.trim() === "" ? 0 : words.length;
  wordCounts.push(count);
});

rl.on("close", () => {
  console.log(wordCounts.join("\n"));
});
