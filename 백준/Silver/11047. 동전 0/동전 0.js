const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')
let [n, k] = input[0].split(' ').map(Number);
const [_, ...rest] = input;
const arr = rest.map(Number)

let count = 0;

for (let i = arr.length - 1; i >= 0; i--) {
  while (arr[i] <= k) {
    k -= arr[i]
    count++
  }
}

console.log(count)