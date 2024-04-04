const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let input = fs.readFileSync(readFileSyncAddress).toString().trim().split('-')
let answer = 0;

for (let i = 0; i < input.length; i++) {
  const cur = input[i].split('+').map(Number).reduce((a, b) => a + b, 0)
  if (i === 0) answer += cur
  else answer -= cur
}

console.log(answer)