const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n');

let [N, K] = input[0].split(' ').map(Number);

const arr = [];

let answer = 0;

for (let i = 1; i <= N; i++) {
  arr.push(Number(input[i]))
}

for (let i = arr.length - 1; i >= 0; i--) {
  if (arr[i] <= K) {
    answer += parseInt(K / arr[i])
    K = K % arr[i]
  }
}

console.log(answer)