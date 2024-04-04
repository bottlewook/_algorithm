const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let input = fs.readFileSync(readFileSyncAddress).toString().trim()
let target = Number(input)
let flag = false

let count = 0;

while (target >= 0) {
  if (target === 0 || target % 5 === 0) {
    count += parseInt(target / 5)
    console.log(count)
    flag = true
    break
  }
  target -= 3
  count++
}

if (!flag) {
  console.log(-1)
}