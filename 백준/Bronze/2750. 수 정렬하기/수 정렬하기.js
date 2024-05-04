const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')

const [N, ...arr] = input.map(Number)
arr.sort((a, b) => a - b);

let answer = ''
for (let x of arr) {
  answer += x + '\n'
}

console.log(answer.trim())