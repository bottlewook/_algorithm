const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')

const arr = input[1].split(' ').map(Number);

let sum = 0;
let count = 0;

for (let x of arr) {
  if (x === 1) {
    count++
    sum += count
  } else {
    count = 0
  }
}

console.log(sum)