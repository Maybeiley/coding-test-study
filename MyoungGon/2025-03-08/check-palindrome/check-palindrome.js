// // 한단어 검증
// const fs = require("fs");
// const path = require("path");
// const filePath = path.join(__dirname, "input.txt");
// const input = fs.readFileSync(filePath, "utf-8").toString().trim();

// const reverseInput = input.split("").reverse().join("");

// if (input === reverseInput) {
//   console.log(1);
// } else {
//   console.log(0);
// }

// 여러 단어 검증
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const inputs = [];

rl.on("line", (line) => {
  if (line.trim() === "") {
    rl.close();
  } else {
    inputs.push(...line.trim().split(" "));
  }
}).on("close", () => {
  const results = inputs.map((word) => {
    let isPalindrome = true;

    for (let i = 0; i < Math.floor(word.length / 2); i++) {
      if (word[i] !== word[word.length - i - 1]) {
        isPalindrome = false;
        break;
      }
    }

    return isPalindrome ? 1 : 0;
  });

  console.log(results.join("\n"));
});
// 예시)
// level node
// node
// level
// 1
// 0
// 1
// 0
