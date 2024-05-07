const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n');

const N = Number(input[0]);

const sumArr = input[1].split(' ').map(Number);

const M = Number(input[2])

const arr = [];

for (let i = 3; i < M + 3; i++) {
  arr.push(input[i].split(' ').map(Number))
}

const intervalSumArr = [0];
let intervalSum = 0;
for (let x of sumArr) {
  intervalSum += x
  intervalSumArr.push(intervalSum)
}

let answer = ''
for (let [x, y] of arr) {
  answer += intervalSumArr[y] - intervalSumArr[x - 1] + '\n'
}

console.log(answer.trim())