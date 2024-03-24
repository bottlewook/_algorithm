const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let input = fs.readFileSync(readFileSyncAddress).toString().trim().split('').map(Number)

let count = Array(10).fill(0)

for (let x of input) {
  count[x]++
}

let answer = ''
for (let i = 9; i >= 0; i--) {
  for (let j = 0; j < count[i]; j++) {
    answer += i
  }
}

console.log(answer)