const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')
const [n, target] = input[0].split(' ').map(Number)
const arr = []

for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]))
}
let start = 1
let end = arr.reduce((a, b) => Math.max(a, b))

let result = 0;
while (start <= end) {
  let mid = parseInt((start + end) / 2)
  let total = 0;

  for (let line of arr) {
    total += parseInt(line / mid)
  }
  if (total < target) {
    end = mid - 1
  } else {
    result = mid
    start = mid + 1
  }
}
console.log(result)