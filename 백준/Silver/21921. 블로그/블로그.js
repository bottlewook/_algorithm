const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')
const [N, X] = input[0].split(' ')
const arr = input[1].split(' ').map(Number)

let sum = 0;
let count = 1;

for (let i = 0; i < +X; i++) {
  sum += arr[i]
}

let max = sum
for (i = +X; i < N; i++) {
  sum = sum + arr[i] - arr[i - X]
  if (max <= sum) {
    if (max === sum) {
      count++
    } else {
      count = 1;
      max = sum
    }
  }

}

if (max === 0) {
  console.log('SAD')
}

if (max !== 0) {
  console.log(max)
  console.log(count)
}