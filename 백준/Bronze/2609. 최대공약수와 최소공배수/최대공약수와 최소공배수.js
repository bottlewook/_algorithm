const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = fs.readFileSync(readFileSyncAddress).toString().trim().split(' ').map((item) => Number(item)).sort((a, b) => a - b)

function solution(input) {
  let [a, b] = input
  let temp = 1
  let count = 2;
  while (count <= a) {
    while (a % count === 0 && b % count === 0) {
      temp *= count
      a /= count
      b /= count
    }
    count++
  }
  console.log(temp)
  console.log(temp * a * b)
}

solution(input)