const fs = require("fs");
const path = require("path");
const filePath = path.join(
  __dirname,
  process.platform === "linux" ? "/dev/stdin" : "input.txt"
);
const input = fs
  .readFileSync(filePath, "utf-8")
  .toString()
  .trim()
  .split("\r\n");

const commands = input.slice(1);
const queue = [];
const results = [];
let frontIndex = 0;

commands.forEach((command) => {
  const [operation, value] = command.split(" ");

  switch (operation) {
    case "push":
      queue.push(Number(value));
      break;
    case "pop":
      if (frontIndex < queue.length) {
        results.push(queue[frontIndex]);
        frontIndex++;
      } else {
        results.push(-1);
      }
      break;
    case "size":
      results.push(queue.length - frontIndex);
      break;
    case "empty":
      results.push(frontIndex === queue.length ? 1 : 0);
      break;
    case "front":
      results.push(frontIndex < queue.length ? queue[frontIndex] : -1);
      break;
    case "back":
      results.push(frontIndex < queue.length ? queue[queue.length - 1] : -1);
      break;
  }
});

console.log(results.join("\n"));
