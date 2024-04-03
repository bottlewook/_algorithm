const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let input = fs.readFileSync(readFileSyncAddress).toString().trim()
let n = Number(input);
let count = 0;
let flag = false;

while (n >= 0) {
  if (n === 0 || n % 5 === 0) {
    count += parseInt(n / 5);
    console.log(count);
    flag = true;
    break
  }
  n -= 3;
  count++;
}

if (!flag) {
  console.log(-1)
}