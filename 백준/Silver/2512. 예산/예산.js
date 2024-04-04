const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')
const n = Number(input[0])
const arr = input[1].split(' ').map(Number)
const target = Number(input[2])

let start = 1
let end = arr.reduce((a, b) => Math.max(a, b))

let result = 0;
while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let total = 0;
  for (let x of arr) {
    total += Math.min(mid, x)
  }
  if (total <= target) {
    start = mid + 1
    result = mid
  } else {
    end = mid - 1
  }
}

console.log(result)