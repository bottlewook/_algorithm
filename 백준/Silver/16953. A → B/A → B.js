const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let input = fs.readFileSync(readFileSyncAddress).toString().trim().split(' ').map(Number)
let [A, B] = input
let count = 1;
let flag = false

while (A <= B) {
  if (A === B) {
    flag = true
    break
  }
  if (B % 2 === 0) {
    B /= 2
  } else if (B % 10 === 1) {
    B = parseInt(B / 10)
  } else break
  count++
}

if (!flag) console.log(-1)
else console.log(count)