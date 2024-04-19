const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')
const arr = input[1].split(' ').map(Number).sort((a, b) => a - b);

let sum = 0;
let answer = 0;
for (let x of arr) {
  sum += x
  answer += sum
}

console.log(answer)