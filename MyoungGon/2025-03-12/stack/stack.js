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

const stack = [];
const results = [];

const commands = input.slice(1);

commands.forEach((command) => {
  const [operation, value] = command.split(" ");

  switch (operation) {
    case "push":
      stack.push(Number(value));
      break;
    case "pop":
      results.push(stack.length > 0 ? stack.pop() : -1);
      break;
    case "size":
      results.push(stack.length);
      break;
    case "empty":
      results.push(stack.length === 0 ? 1 : 0);
      break;
    case "top":
      results.push(stack.length > 0 ? stack[stack.length - 1] : -1);
      break;
  }
});

console.log(results.join("\n"));
