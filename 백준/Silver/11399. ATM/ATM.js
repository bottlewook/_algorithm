const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')
let n = +input[0]
const arr = input[1].split(' ').map(Number)
arr.sort((a, b) => a - b)
let answer = 0;
let temp = 0;
for (let x of arr) {
  temp += x
  answer += temp
}
console.log(answer)