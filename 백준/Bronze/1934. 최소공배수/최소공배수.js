const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')

function GCD(a, b) {
  while (b !== 0) {
    let temp = b
    b = a % b
    a = temp
  }
  return a
}

function solution(input) {
  let [a, b] = input.split(' ').map(item => Number(item)).sort((a, b) => a - b)
  let c = GCD(a, b)
  console.log(a * b / c)
}

for (let i = 1; i < input.length; i++) {
  solution(input[i])
}