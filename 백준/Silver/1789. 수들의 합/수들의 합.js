const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let input = fs.readFileSync(readFileSyncAddress).toString().trim()
let target = Number(input)
let minus = 1;
let count = 0;
while (target >= 0) {
  target -= minus
  minus++
  count++
}

console.log(count - 1)