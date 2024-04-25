const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')

const length = Number(input[0]);
const data = input[1].split(' ').map(Number);

let result = 0;
let arrow = new Array(1000001).fill(0) // 각 높이에 화살이 몇 개 있는지

for (let x of data) {
  if (arrow[x] > 0) {
    arrow[x] -= 1
    arrow[x - 1] += 1
  } else {
    arrow[x - 1] += 1;
    result += 1
  }
}

console.log(result)

