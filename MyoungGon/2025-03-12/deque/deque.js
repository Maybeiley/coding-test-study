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
  .replace(/\r/g, "");
const len = input.length;
let pos = 0;

function readToken() {
  const start = pos;
  while (
    pos < len &&
    input[pos] !== "\n" &&
    input[pos] !== "\r" &&
    input[pos] !== " "
  ) {
    pos++;
  }
  const token = input.slice(start, pos);
  if (pos < len) pos++;
  return token;
}

const N = parseInt(readToken(), 10);
const results = [];

const deque = new Array(2 * N);
let front = N;
let back = N;

for (let i = 0; i < N; i++) {
  const cmd = parseInt(readToken(), 10);
  switch (cmd) {
    case 1: {
      const value = parseInt(readToken(), 10);
      deque[--front] = value;
      break;
    }

    case 2: {
      const value = parseInt(readToken(), 10);
      deque[back++] = value;
      break;
    }

    case 3:
      results.push(front < back ? deque[front++] : -1);
      break;

    case 4:
      results.push(front < back ? deque[--back] : -1);
      break;

    case 5:
      results.push(back - front);
      break;

    case 6:
      results.push(front === back ? 1 : 0);
      break;

    case 7:
      results.push(front < back ? deque[front] : -1);
      break;

    case 8:
      results.push(front < back ? deque[back - 1] : -1);
      break;
  }
}

console.log(results.join("\n"));
