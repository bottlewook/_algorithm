const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = fs.readFileSync(readFileSyncAddress).toString().trim();
const str = input.split('-')
const arr = [];
for (let x of str) {
  arr.push(x.split('+').map(Number))
}

let answer = arr[0].reduce((a, b) => a + b, 0)

for (let i = 1; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    answer -= arr[i][j]
  }
}

console.log(answer)