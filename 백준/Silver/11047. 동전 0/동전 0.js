const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')
let target = Number(input[0].split(' ')[1])
const arr = [];
for (let i = 1; i < input.length; i++) {
  arr.push(Number(input[i]))
}
let answer = 0;

for (let i = arr.length - 1; i >= 0; i--) {
  while (arr[i] <= target) {
    answer++
    target -= arr[i]
  }
}
console.log(answer)