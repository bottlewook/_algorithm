const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n');

let num = Number(input[0]);

let answer = 0;

let idx = 1;
let sum = 0;
let flag = 0;

while (sum <= num) {
  if (sum === num) {
    flag = 1
    break
  }
  sum += idx
  idx++
  answer++
}

console.log(flag ? answer : answer - 1)