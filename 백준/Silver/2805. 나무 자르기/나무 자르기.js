const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')
const [n, target] = input[0].split(' ').map(Number)
const arr = input[1].split(' ').map(Number)

let start = 0;
let end = arr.reduce((a, b) => Math.max(a, b))

let result = 0;
while (start <= end) {
  // 절단기의 높이
  var mid = parseInt((start + end) / 2);
  // 절단기가 자른 나무 길이의 총합
  let total = 0;
  for (height of arr) if (height > mid) total += height - mid
  if (total < target) end = mid - 1
  else {
    result = mid;
    start = mid + 1
  }
}

console.log(result)